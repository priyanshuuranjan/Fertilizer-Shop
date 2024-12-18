import React, { useState } from "react";
import { toast } from "react-toastify";
import { Circles } from "react-loader-spinner"; // Importing a spinner component for loading effect
import { useNavigate } from "react-router-dom";

const CheckoutPopup = ({ closePopup, user, totalAmt, handlePayment, loading }) => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash on Delivery"); // Default payment mode

  const handleOrder = async () => {
    if (!address || !phoneNumber) {
      toast.error("Please fill all the fields!");
      return;
    }
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      toast.error("Enter a valid 10-digit phone number.");
      return;
    }

    try {
      // Prepare order details
      const orderData = {
        userId: user.id,
        name: user.name,
        address,
        phoneNumber,
        paymentMode,
        totalAmt,
        orderDate: new Date(),
      };

      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      const updatedOrders = [orderData, ...existingOrders];
      localStorage.setItem("orders", JSON.stringify(updatedOrders));

      toast.success("Order placed successfully!");

      // Simulate payment process
      handlePayment();
    } catch (error) {
      toast.error("Something went wrong while placing your order.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        <h2 className="text-xl font-bold mb-4 text-center">Checkout</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md bg-gray-100"
              value={user.name}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-semibold">Address</label>
            <textarea
              id="address"
              className="w-full p-2 border rounded-md"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              className="w-full p-2 border rounded-md"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="paymentMode" className="block text-sm font-semibold">Payment Mode</label>
            <select
              id="paymentMode"
              className="w-full p-2 border rounded-md"
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Online Payment">Online Payment</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handleOrder}
            disabled={loading}
            className={`w-full py-2 text-white font-semibold rounded-md ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} transition duration-300`}
          >
            {loading ? (
              <div className="flex justify-center">
                <Circles height="20" width="20" color="#fff" />
              </div>
            ) : (
              `Pay ${paymentMode === "Online Payment" ? `₹${totalAmt}` : "on Delivery"}`
            )}
          </button>
        </form>
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Total Amount: <span className="font-bold text-blue-600">₹{totalAmt}</span>
        </p>
      </div>
    </div>
  );
};

export default CheckoutPopup;
