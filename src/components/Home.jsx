import React from "react";
import homebg2 from "../assets/homebg2.jpg";
import Cards from "../components/Cards";
import Projects from "../components/Projects";
import Carousel from "../components/Carousel";
import Leaf from "../assets/Leaf.png";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="overflow-x-hidden w-screen">
            <div
                className="h-[93vh] w-full relative"
                style={{ backgroundImage: `url(${homebg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="bg-gradient-to-r from-white via-white h-full lg:w-2/3 md:w-4/5 sm:w-full flex flex-col items-center justify-center space-y-6 py-10 px-6 md:py-20 md:px-12">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-sans text-center">
                        ENVI-COMM CORPORATION
                    </h1>
                    <h2 className="text-green-900 text-center px-4 md:px-8 max-w-prose">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem saepe minus vel aperiam consequatur labore veritatis alias quibusdam aut corporis, deleniti quae iste aspernatur ad, dolorem eligendi rerum nihil quis.
                    </h2>
                    <button className="bg-green-900 text-white py-2 px-4 rounded-lg mt-4">
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="h-[50vh] w-full flex items-center justify-center flex-col space-y-8 bg-slate-50">
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-serif text-midgreen">
                    Compliance, Community and Commitment
                </h1>
                <p className="text-center max-w-prose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam molestiae rem amet alias enim illo animi. Corrupti porro consectetur necessitatibus doloribus aliquam illo pariatur, magnam, voluptatum tempora unde quasi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium a unde veritatis neque sapiente, totam repudiandae porro aspernatur id! Voluptas nulla nihil ipsa consectetur odit nisi placeat amet, deleniti tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores ipsa saepe fugit quibusdam iure similique commodi quae id repudiandae praesentium totam eos maxime, doloribus amet laborum optio voluptatum est!
                </p>
            </div>
            <Cards />
            <Projects />
            <Carousel />
            <div className="h-[50vh] w-full flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="bg-darkgreen rounded-lg flex items-center p-4 w-[1000px] max-w-4xl">
                        <div className="text-white text-center font-medium text-lg md:text-2xl lg:text-3xl pl-[30px]">
                            Join our community!
                        </div>
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className="bg-[FCFCFC] text-gray-700 p-2 rounded-l-lg w-[300px]"
                        />
                        <button className="bg-lightgreen text-white p-2 rounded-r-lg">
                            <svg className="w- h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                        <img className="bottom ml-40 w-16 h-16 translate-y-12 translate-x-10" src={Leaf} alt="Placeholder"/>  
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
