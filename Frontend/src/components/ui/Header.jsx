import { logo } from "../../assets/index";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const productData = useSelector((state) => state.cart.productData);
  const userInfo = useSelector((state) => state.cart.userInfo);

  return (
    <div className="w-full h-20 bg-white  border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-4">
        <Link to="/">
          <div>
            <h3 className="w-29 text-gray-700 font-bold text-4xl">
              {" "}
              Kumar fertilizer
            </h3>
            {/* <img src={logo} className="w-16 text-black font-bold"/>  */}
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                to="/"
                className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer"
              >
                Order
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/cart">
            <div className="relative block">
              <FiShoppingBag className="hover:text-skyText duration-200 cursor-pointer" />
              <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo?.image
                  : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="userlogo"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
