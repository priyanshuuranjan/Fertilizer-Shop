import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const Fertilizer = () => {
  const [fertilizers, setFertilizers] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://kumarfertilizer-api.vercel.app/fertilizer")
      .then((response) => response.json())
      .then((data) => {
        setFertilizers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (fertilizer) => {
    dispatch(
      addToCart({
        _id: fertilizer._id,
        title: fertilizer.name,
        image: fertilizer.images,
        price: fertilizer.price,
        quantity: 1,
        description: fertilizer.description,
      })
    );
    toast.success(`${fertilizer.name} added successfully!`, {
      position: "bottom-right",
      style: {
        fontSize: "12px",
        padding: "10px",
      },
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full py-10 bg-slate-200">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Fertilizer Products
        </h2>
        <p className="text-gray-600 mt-1">
          Explore our premium fertilizers for enhanced soil fertility.
        </p>
        <div className="w-16 h-[3px] bg-sky-500 mx-auto mt-3"></div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {fertilizers.map((fertilizer) => (
          <div
            key={fertilizer._id}
            className="bg-white rounded-lg shadow-md group hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="flex items-center justify-center h-48 bg-gray-100">
              <img
                src={fertilizer.images}
                alt={fertilizer.name}
                className="object-contain group-hover:scale-105 transition-transform duration-300 h-full"
                onError={(e) => (e.target.src = "default-placeholder.png")}
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">
                {fertilizer.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {fertilizer.description}
              </p>
              <p className="text-lg font-bold text-price mt-2">
                ₹ {fertilizer.price}
              </p>
              <button
                onClick={() => handleAddToCart(fertilizer)} // Only this fertilizer is added to cart
                className="mt-4 px-5 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-green-500 transition-all duration-200 ease-in-out"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
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
    </div>
  );
};

export default Fertilizer;

//! changing some ui if it is not need then this code is perfect, it will be use later
// import { useEffect, useState } from "react";
// import {useDispatch} from "react-redux"

// const Fertilizer = () => {
//   const dispatch = useDispatch()
//   const [fertilizers, setFertilizers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:8000/fertilizer")
//       .then((response) => response.json())
//       .then((data) => {
//         setFertilizers(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//         setLoading(false);
//       });
//   }, []);

//   const [cart, setCart] = useState({});

//   const handleAddToCart = (fertilizerId) => {
//     setCart((prevCart) => ({
//       ...prevCart,
//       [fertilizerId]: 1,
//     }));
//   };

//   const handleIncrement = (fertilizerId) => {
//     setCart((prevCart) => ({
//       ...prevCart,
//       [fertilizerId]: (prevCart[fertilizerId] || 0) + 1,
//     }));
//   };

//   const handleDecrement = (fertilizerId) => {
//     setCart((prevCart) => {
//       const newQuantity = (prevCart[fertilizerId] || 0) - 1;
//       if (newQuantity <= 0) {
//         const { [fertilizerId]: _, ...rest } = prevCart; // Remove from cart if quantity is 0 or less
//         return rest;
//       }
//       return { ...prevCart, [fertilizerId]: newQuantity };
//     });
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full py-10 bg-slate-200">
//       <div className="text-center mb-6">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//           Fertilizer Products
//         </h2>
//         <p className="text-gray-600 mt-1">
//           Explore our premium fertilizers for enhanced soil fertility.
//         </p>
//         <div className="w-16 h-[3px] bg-sky-500 mx-auto mt-3"></div>
//       </div>

//       <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//         {fertilizers.map((fertilizer) => (
//           <div
//             key={fertilizer._id}
//             className="bg-white rounded-lg shadow-md group hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//           >
//             <div className="flex items-center justify-center h-48 bg-gray-100">
//               <img
//                 src={fertilizer.images}
//                 alt={fertilizer.name}
//                 className="object-contain group-hover:scale-105 transition-transform duration-300 h-full"
//                 onError={(e) => (e.target.src = "default-placeholder.png")}
//               />
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-bold text-gray-800">
//                 {fertilizer.name}
//               </h3>
//               <p className="text-sm text-gray-500 mt-1">
//                 {fertilizer.description}
//               </p>
//               <p className="text-lg font-bold text-price mt-2">
//                 ₹ {fertilizer.price}
//               </p>
//               {!cart[fertilizer._id] ? (
//                 <button
//                   onClick={() => handleAddToCart(fertilizer._id)}
//                   className="mt-4 px-5 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-green-500 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400"
//                 >
//                   Add to Cart
//                 </button>
//               ) : (
//                 <div className="mt-4 flex items-center justify-center gap-4">
//                   <button
//                     onClick={() => handleDecrement(fertilizer._id)}
//                     className="flex items-center justify-center w-10 h-10 bg-slate-200 rounded-full hover:bg-gray-400 transition-all"
//                   >
//                     <span className="text-2xl">-</span>
//                   </button>
//                   <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-lg font-semibold rounded-full">
//                     {cart[fertilizer._id]}
//                   </div>
//                   <button
//                     onClick={() => handleIncrement(fertilizer._id)}
//                     className="flex items-center justify-center w-10 h-10 bg-slate-200 rounded-full hover:bg-gray-400 transition-all"
//                   >
//                     <span className="text-2xl">+</span>
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Fertilizer;
