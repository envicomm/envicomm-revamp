import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "../assets/logoWhite.png";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
  
    // Function to scroll to the top
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    // Effect to handle scroll on route change
    React.useEffect(() => {
      if (isOpen) {
        setIsOpen(false); // Close menu on route change
      }
      scrollToTop(); // Scroll to top on route change
    }, [location]);

  return (
    <nav className="bg-midgreen w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:flex-nowrap">
        <div className="text-white order-1 md:order-1">
          <img src={logoWhite} alt="logo" className="h-[50px]" />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="order-3 md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } order-3 w-full md:w-auto md:order-2 md:flex md:items-center md:space-x-4`}
        >
          <ul className="flex flex-col md:flex-row font-semibold justify-around text-white md:justify-between md:space-x-4">
            <li className="px-4 py-2">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/About" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/Services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Button */}
        <div className="order-2 md:order-3 hidden md:block">
          <button className="px-4 py-2 bg-lightgreen hover:bg-white hover:text-midgreen text-gray-50 rounded-xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* Add icon paths here if necessary */}
            </svg>
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
