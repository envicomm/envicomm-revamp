import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoWhite from "../assets/logoWhite.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#404041] w-full p-4 relative">
      <div className="flex justify-between items-center w-full">
        {/* Logo and Menu Button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={logoWhite} alt="logo" className="h-[50px]" />
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
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

        {/* Navigation Links */}
        <div
          className={`absolute z-50 md:static top-full left-0 bg-[#404041] w-full md:w-auto transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } md:max-h-full md:opacity-100`}
        >
          <ul className="flex flex-col md:flex-row items-center font-semibold text-white md:space-x-4">
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
            <li className="px-4 py-2">
              <Link
                to="/contact"
                className="w-full px-4 py-2 bg-midgreen hover:bg-white hover:text-midgreen text-gray-50 rounded-xl"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
