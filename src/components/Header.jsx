import React from "react";
import Logo from "../assets/logo.png";
import Person from "../assets/person.png";

import { MdShoppingBasket } from "react-icons/md";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-11 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor transition-all duration-100 ease-in-out">
              Home
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor transition-all duration-100 ease-in-out">
              Menu
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor transition-all duration-100 ease-in-out">
              About Us
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor transition-all duration-100 ease-in-out">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <img
            src={Person}
            alt="Person"
            className="w-8 min-w-[20px] h-8 min-h-[20px] drop-shadow-xl"
          />
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
