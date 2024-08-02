import React from "react";
import homebg from "../assets/homebg.jpg"


function Home() {
    return (
        <div className="min-h-screen">
            <div className="inset-0 flex items-center justify-center">
                <img src={homebg} alt="hero" className="object-cover w-full h-full" />
            </div>



            <div className="vh-100  flex items-center justify-center bg-blue-500">
                <div className="text-center text-white">
                    home
                </div>
            </div>
        </div>
    )
}

export default Home;
