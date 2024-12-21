import { FiShoppingBag, FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const productData = useSelector((state) => state.cart.productData);
  const userInfo = useSelector((state) => state.cart.userInfo);
  const [menuOpen, setMenuOpen] = useState(false);
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <div className="w-full h-16 bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-6 md:px-12">
        <Link to="/">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-200 hover:text-gray-100 transition duration-300">
            Kumar Fertilizer
          </h1>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link
                to="/"
                className="text-gray-200 font-medium hover:text-gray-100 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="text-gray-200 font-medium hover:text-gray-100 transition duration-300"
              >
                Order
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-200 font-medium hover:text-gray-100 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/cart" className="relative">
            <FiShoppingBag className="text-2xl hover:text-gray-100 transform transition duration-300 cursor-pointer" />
            {productData.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-800 font-semibold text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                {productData.length}
              </span>
            )}
          </Link>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <img
                className="w-9 h-9 rounded-full border-2 border-white shadow-sm hover:scale-105 transform transition duration-300"
                src={
                  userInfo
                    ? userInfo?.image
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="userlogo"
              />
            </Link>
            {userInfo && (
              <p className="hidden md:block text-gray-200 font-medium">
                {userInfo.name}
              </p>
            )}
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <FiMenu
            className="text-2xl text-gray-200 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {menuOpen && (
        <div className="block md:hidden bg-gray-800 shadow-md">
          <ul className="flex flex-col items-center gap-6 py-4">
            <li>
              <Link
                to="/"
                className="text-gray-200 font-medium hover:text-gray-100 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="text-gray-200 font-medium hover:text-gray-100 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Order
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-200 font-medium hover:text-gray-100 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
