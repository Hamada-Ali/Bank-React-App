import React from "react";
import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
  const [toggleState, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} className="w-[124px] h-[32px]" alt="hoobank" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-poppins font-normal cursor-poniter text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleState ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggleState)}
        />
              <div
          className={`${
            toggleState ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 
        my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-start items-center flex-1">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins  font-normal cursor-poniter text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-2"
                }`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
