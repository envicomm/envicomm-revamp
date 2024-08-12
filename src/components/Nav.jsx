import React from "react";
import { Link } from 'react-router-dom';
import logoWhite from "../assets/logoWhite.png"

function Nav() {
    return (
        <nav className="bg-midgreen w-full">
            <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:flex-nowrap">
                <div className="text-white order-1 md:order-1">
                    <img src={logoWhite} alt="logo" className="h-[50px]" />
                </div>
                <div className="order-3 w-full md:w-auto md:order-2">
                    <ul className="flex font-semibold justify-around text-white md:justify-between md:space-x-4">
                        <li className="px-4 py-2"><Link to="/">Home</Link></li>
                        <li className="px-4 py-2"><Link to="/About">About</Link></li>
                        <li className="px-4 py-2"><Link to="/Services">Services</Link></li>
                    </ul>
                </div>
                <div className="order-2 md:order-3">
                    <button className="px-4 py-2 bg-lightgreen hover:bg-white hover:text-midgreen text-gray-50 rounded-xl flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        </svg>
                        <span>Contact Us</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
