import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Loader/Loader";

const Herbicide = () => {
  const [herbicides, setHerbicides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch("https://kumarfertilizer-api.vercel.app/herbicide")
      .then((response) => response.json())
      .then((data) => {
        setHerbicides(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setFetchError(true);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (herbicide) => {
    dispatch(
      addToCart({
        _id: herbicide._id,
        title: herbicide.name,
        image: herbicide.images,
        price: herbicide.price,
        quantity: 1,
        description: herbicide.description,
      })
    );
    toast.success(`${herbicide.name} added successfully!`, {
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
          Herbicide Products
        </h2>
        <p className="text-gray-600 mt-1">
          Explore our premium herbicides for effective weed management.
        </p>
        <div className="w-16 h-[3px] bg-sky-500 mx-auto mt-3"></div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {herbicides.map((herbicide) => (
          <div
            key={herbicide._id}
            className="bg-white rounded-lg shadow-md group hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="flex items-center justify-center h-48 bg-gray-100">
              <img
                src={herbicide.images}
                alt={herbicide.name}
                className="object-contain group-hover:scale-105 transition-transform duration-300 h-full"
                onError={(e) => (e.target.src = "default-placeholder.png")}
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">
                {herbicide.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {herbicide.description}
              </p>
              <p className="text-lg font-bold text-price mt-2">
                ₹ {herbicide.price}
              </p>
              <button
                onClick={() => handleAddToCart(herbicide)} // Only this herbicide is added to cart
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

export default Herbicide;
