import { logo } from "../../assets/index";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.cart.productData);
  console.log(productData);
  return (
    <div className="w-full h-20 bg-white  border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-4">
        <div>
          <h3 className="w-29 text-gray-700 font-bold text-4xl">
            {" "}
            Kumar fertilizer
          </h3>
          {/* <img src={logo} className="w-16 text-black font-bold"/>  */}
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Order
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Contact
            </li>
          </ul>
          <div className="relative block">
            <FiShoppingBag className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              {productData.length}
            </span>
          </div>
          <img
            className="w-8 h-8 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="userlogo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
