import React from "react";
import homebg from "../assets/homebg.jpg"


function Home() {
    return (
        <div className="min-h-screen">
            <div className="vh-100 flex items-center justify-center bg-white">
                <div className="text-center">
                    <img src={homebg} className="vh-100 object-cover"></img>
                    Home
                </div>  
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
