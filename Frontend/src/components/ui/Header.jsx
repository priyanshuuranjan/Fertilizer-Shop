import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const productData = useSelector((state) => state.cart.productData);
  const userInfo = useSelector((state) => state.cart.userInfo);

  return (
    <div className="w-full h-20 bg-gradient-to-r from-orange-400 to-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-6 md:px-12">
        <Link to="/">
          <h1 className="text-3xl md:text-4xl font-bold hover:scale-105 transform transition duration-300">
            Kumar Fertilizer
          </h1>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link
                to="/"
                className="text-white font-medium hover:text-gray-200 transition duration-300 hover:underline underline-offset-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="text-white font-medium hover:text-gray-200 transition duration-300 hover:underline underline-offset-4"
              >
                Order
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white font-medium hover:text-gray-200 transition duration-300 hover:underline underline-offset-4"
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/cart" className="relative">
            <FiShoppingBag className="text-3xl hover:scale-110 transform transition duration-300 cursor-pointer" />
            {productData.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 font-semibold text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                {productData.length}
              </span>
            )}
          </Link>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <img
                className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-105 transform transition duration-300"
                src={
                  userInfo
                    ? userInfo?.image
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="userlogo"
              />
            </Link>
            {userInfo && (
              <p className="hidden md:block text-white font-medium">
                {userInfo.name}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="block md:hidden bg-gradient-to-r from-orange-400 to-red-600 shadow-md">
        <ul className="flex justify-center gap-6 py-2">
          <li>
            <Link
              to="/"
              className="text-white font-medium hover:text-gray-200 transition duration-300 hover:underline underline-offset-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              className="text-white font-medium hover:text-gray-200 transition duration-300 hover:underline underline-offset-4"
            >
              Order
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white font-medium hover:text-gray-200 transition duration-300 hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
