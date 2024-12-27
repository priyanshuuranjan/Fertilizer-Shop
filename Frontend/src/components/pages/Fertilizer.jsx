import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Loader/Loader";

const Fertilizer = () => {
  const [fertilizers, setFertilizers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      fetchFertilizerData();
    }, 2000);
  }, []);

  const fetchFertilizerData = async () => {
    try {
      const response = await fetch(
        "https://kumarfertilizer-api.vercel.app/fertilizer"
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setFertilizers(data);
      setLoading(false);
    } catch (error) {
      setFetchError(error.message);
      setLoading(false);
    }
  };

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        _id: item._id,
        title: item.name,
        image: item.images,
        price: item.price,
        quantity: 1,
        description: item.description,
      })
    );
    toast.success(`${item.name} added successfully!`, {
      position: "bottom-right",
      style: {
        fontSize: "12px",
        padding: "10px",
      },
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (fetchError) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-200">
        <div className="text-center p-6">
          <p className="text-xl text-gray-600 mb-4">
            Oops! Something went wrong while fetching data.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-all duration-200"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-10 bg-slate-200">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Fertilizers
        </h2>
        <p className="text-gray-600 mt-1">
          Browse our collection of premium fertilizers.
        </p>
        <div className="w-16 h-[3px] bg-sky-500 mx-auto mt-3"></div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {fertilizers.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md group hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="flex items-center justify-center h-48 bg-gray-100">
              <img
                src={item.images}
                alt={item.name}
                className="object-contain group-hover:scale-105 transition-transform duration-300 h-full"
                onError={(e) => (e.target.src = "default-placeholder.png")}
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              <p className="text-lg font-bold text-price mt-2">
                ₹ {item.price}
              </p>
              <button
                onClick={() => handleAddToCart(item)}
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
