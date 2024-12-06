import { cartImg } from "../../assets/index";
import { logo } from "../../assets/index";
const Header = () => {
  return (
    <div className="w-full h-20 bg-white  border-b-[1px] border-b-gray-800 font-titleFont">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between px-4">
        <div>
          <h3 className="w-29 text-gray-700 font-bold text-4xl"> Kumar fertilizer</h3>
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
          <div className="relative">
            <img className="w-6" src={cartImg} alt="cartImg" />
            <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
              0
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
