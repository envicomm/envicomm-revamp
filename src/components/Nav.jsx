import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoWhite from "../assets/logoWhite.png";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-midgreen w-screen fixed top-0 left-0 z-30">
            <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:flex-nowrap">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <img src={logoWhite} alt="logo" className="h-[50px]" />
                    <button 
                        onClick={toggleMenu} 
                        className="md:hidden text-white focus:outline-none transition duration-300 ease-in-out"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className={`w-full md:w-auto md:flex md:items-center ${isOpen ? "block" : "hidden"} md:block`}>
                    <ul className="flex flex-col md:flex-row font-semibold text-white md:justify-between md:space-x-4">
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
                            <button className="w-full px-4 py-2 bg-lightgreen hover:bg-white hover:text-midgreen text-gray-50 rounded-xl flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    {/* Add your SVG content here */}
                                </svg>
                                <span>Contact Us</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
