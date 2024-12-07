import { ImGithub } from "react-icons/im";
import { FaTwitter, FaInstagram, FaHome } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logo, paymentLogo } from "../../assets/index";

const socialLinksArray = [
  { name: "github", icon: <ImGithub /> },
  { name: "twitter", icon: <FaTwitter /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-3 text-base text-gray-400">
      {socialLinksArray.map((item) => (
        <span
          key={item?.name}
          className="p-2 border border-gray-700 rounded-full hover:text-white hover:border-white duration-300 cursor-pointer"
        >
          {item?.icon}
        </span>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-4">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logo} alt="logo" />
          <p className="text-white text-sm tracking-wide">© 2024 Kumar-Fertilizer All rights reserved.😉</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />

          <SocialLinks />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>B45 Building, Sapahi</p>
            <p>Mobile: +91 6299908913</p>
            <p>e-mail: priyanshumth0808@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
