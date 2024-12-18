import { useEffect, useState } from "react";
const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    console.log(savedOrders); 
    const sortedOrders = savedOrders.sort(
      (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
    );

    setOrders(sortedOrders);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-lg p-8">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-8 text-center border-b pb-4">
          Order History
        </h2>
        <div className="space-y-8">
          {orders.length === 0 ? (
            <p className="text-gray-600 text-center text-lg font-medium">
              🛒 No orders yet! Place an order to see your history here.
            </p>
          ) : (
            orders.map((order, index) => (
              <div
                key={index}
                className="order-item p-6 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                  <p className="text-gray-800 font-semibold text-lg">
                    Order Placed:{" "}
                    <span className="text-gray-600">
                      {new Date(order.orderDate).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="text-blue-500 font-bold text-lg">
                    ₹{order.totalAmt}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <p className="text-gray-700">
                      <span className="font-medium">Name:</span> {order.name}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Phone:</span>{" "}
                      {order.phoneNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-medium">Address:</span>{" "}
                      {order.address}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-medium">Payment Mode:</span>{" "}
                      {order.paymentMode || "Online"}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Products Ordered:
                  </h3>
                  {order.products && order.products.length > 0 ? (
                    <ul className="space-y-2">
                      {order.products.map((product, idx) => (
                        <li
                          key={idx}
                          className="flex justify-between bg-gray-200 p-3 rounded-lg"
                        >
                          <span className="font-medium">{product.name}</span>
                          <span className="text-gray-600">
                            Qty: {product.quantity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">No products in this order</p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
