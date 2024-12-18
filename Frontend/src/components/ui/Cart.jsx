import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { resetCart } from "../../redux/cartSlice";  // Imported resetCart action
import CheckoutPopup from "./CheckoutPopup";  // Imported CheckoutPopup

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productData = useSelector((state) => state.cart.productData);
  const userInfo = useSelector((state) => state.cart.userInfo);

  const [totalAmt, setTotalAmt] = useState("");
  const [loading, setLoading] = useState(false);  // Added state for loading animation
  const [showPopup, setShowPopup] = useState(false);  // State to control the popup visibility
  const [showPopupLoading, setShowPopupLoading] = useState(false);  // State for 2 seconds popup loading

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price.toFixed(2));  // Set the total amount
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setShowPopupLoading(true);  // Show 2 seconds loading state
      setTimeout(() => {
        setShowPopupLoading(false);  // Hide 2 seconds loading
        setShowPopup(true);  // Show the checkout popup
      }, 2000);  // Wait for 2 seconds before showing the popup
    } else {
      toast.error('Please sign in to Checkout');  // Show error if user is not logged in
    }
  };

  const closePopup = () => {
    setShowPopup(false);  // Close the popup when called
  };

  const handlePayment = () => {
    setLoading(true);  // Start loading when user clicks Proceed to Pay
    setTimeout(() => {
      dispatch(resetCart());  // Reset the cart
      navigate("/order");  // Navigate to the order page
      setLoading(false);  // Stop loading
    }, 3000);
  };

  return (
    <>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-full lg:w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">
                ₹ {totalAmt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span>
                You're just one step away from completing your order. Let's make it happen!
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">₹ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}  // Trigger the checkout popup with 2 seconds loading
            className={`text-base bg-black text-white w-full rounded-md py-3 mt-6 hover:bg-gray-800 duration-300 ${loading || showPopupLoading ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={loading || showPopupLoading}  // Disable button during loading
          >
            {showPopupLoading ? "Loading..." : loading ? "Processing..." : "Proceed to checkout"}
          </button>
        </div>
      </div>

      {/* Checkout Popup */}
      {showPopup && (
        <CheckoutPopup
          closePopup={closePopup}
          user={userInfo}
          totalAmt={totalAmt}
          handlePayment={handlePayment}  // Pass handlePayment to CheckoutPopup
          loading={loading}  // Pass loading state for spinner
        />
      )}

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="dark"
      />
    </>
  );
};

export default Cart;
