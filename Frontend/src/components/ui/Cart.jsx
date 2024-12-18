import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { resetCart } from "../../redux/cartSlice";
import CheckoutPopup from "./CheckoutPopup";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productData = useSelector((state) => state.cart.productData);
  const userInfo = useSelector((state) => state.cart.userInfo);

  const [totalAmt, setTotalAmt] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupLoading, setShowPopupLoading] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setShowPopupLoading(true);
      setTimeout(() => {
        setShowPopupLoading(false);
        setShowPopup(true);
      }, 2000);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(resetCart());
      navigate("/order");
      setLoading(false);
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
                You're just one step away from completing your order. Let's make
                it happen!
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">₹ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className={`text-base bg-black text-white w-full rounded-md py-3 mt-6 hover:bg-gray-800 duration-300 ${
              loading || showPopupLoading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={loading || showPopupLoading}
          >
            {showPopupLoading
              ? "Loading..."
              : loading
              ? "Processing..."
              : "Proceed to checkout"}
          </button>
        </div>
      </div>
      {showPopup && (
        <CheckoutPopup
          closePopup={closePopup}
          user={userInfo}
          totalAmt={totalAmt}
          handlePayment={handlePayment}
          loading={loading}
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
