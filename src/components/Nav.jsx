import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FDFDFF] flex w-full h-[100px]  items-center justify-center ">
      <div className="relative w-[100%] px-4 md:w-[62%] h-full md:items-center md:flex md:justify-between ">
        <div className="flex items-center justify-between   h-full">
          <img
            src="logo-header.png"
            alt="logo"
            className="h-[35px] md:h-[50px]"
          />
          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`absolute z-50 md:static top-full left-0 bg-[#FDFDFF] w-full md:w-auto transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } md:max-h-full md:opacity-100`}
        >
          <ul className="flex flex-col md:flex-row text-2xl items-center font-semibold  md:space-x-4">
            <li className="px-4 py-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:underline"
              >
                Home
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="/About"
                onClick={() => setIsOpen(false)}
                className="hover:underline"
              >
                About
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="/Services"
                onClick={() => setIsOpen(false)}
                className="hover:underline"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="w-[185px] h-11 bg-[#8cbf3f] rounded-[66px] justify-between items-center text-center inline-flex"
          >
            <div className="text-center text-white text-2xl font-normal font-['Poppins'] w-full">Contact Us</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
