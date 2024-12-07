import React from "react";
import {
  HiBookOpen,
  HiBookmarkSquare,
  HiMiniQueueList,
  HiRss,
} from "react-icons/hi2";
import { LuChevronRight } from "react-icons/lu";
import { useLocation } from "react-router-dom";

const links = [
  {
    name: "Home",
    href: "/",
    description:
      "Explore our homepage for the latest updates and featured products.",
    icon: HiBookOpen,
  },
  {
    name: "Order",
    href: "/order",
    description: "Track your orders and view order history easily.",
    icon: HiMiniQueueList,
  },
  {
    name: "Shop",
    href: "/shop",
    description:
      "Browse our wide range of products and add your favorites to the cart.",
    icon: HiBookmarkSquare,
  },
  {
    name: "Contact",
    href: "/contact",
    description: "Get in touch with us for inquiries, support, or feedback.",
    icon: HiRss,
  },
];

const NotFound = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").filter(Boolean).pop() || "page";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <p className="text-4xl font-bold text-blue-600">404</p>
      <h1 className="mt-2 text-2xl font-semibold text-gray-800">
        The <span className="text-red-500 underline">{path}</span> you’re
        looking for doesn’t exist.
      </h1>
      <p className="mt-4 text-gray-600">
        Sorry, we couldn’t find the {path} page. Maybe try one of these popular
        pages instead:
      </p>
      <ul className="mt-6 space-y-4">
        {links.map((link, index) => (
          <li key={index} className="flex items-center space-x-4">
            <div className="p-2 bg-gray-200 rounded-full">
              <link.icon className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <a
                href={link.href}
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {link.name}
              </a>
              <p className="text-sm text-gray-500">{link.description}</p>
            </div>
            <LuChevronRight className="h-5 w-5 text-gray-400" />
          </li>
        ))}
      </ul>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
