import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="bg-midgreen w-full">
            <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:flex-nowrap">
                <div className="text-white order-1 md:order-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
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
