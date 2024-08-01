import React from "react";
import homebg from "../assets/homebg.jpg";
import forest from "../assets/forest.png";
import Cards from "../components/Cards"
import Projects from "../components/Projects"
import Carousel from "../components/Carousel";


function Home() {
    return (
    <div className="overflow-x-hidden">
        <div
            className="h-[93vh] w-full relative"
            style={{ backgroundImage: `url(${homebg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
        <div className="h-[50vh] w-full flex items-center justify-center flex-col space-y-8">
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
            Join our community
        </div>
    </div>
    );

}

export default Home;


