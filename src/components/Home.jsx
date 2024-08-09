import React from "react";
import homebg2 from "../assets/homebg2.jpg";
import Cards from "../components/Cards";
import Projects from "../components/Projects";
import Carousel from "../components/Carousel";
import Leaf from "../assets/Leaf.png";


function Home() {
    return (
        <div className="w-full flex flex-col">
            <div className="relative h-[93vh] w-full  bg-homebg2 bg-cover bg-center top-0">
                <div className="bg-gradient-to-r from-white via-white h-full w-full sm:w-full md:w-4/5 lg:w-2/3 flex flex-col items-center justify-center space-y-6 py-10 px-6 md:py-20 md:px-12">
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

            <div className="lg:h-[50vh] h-screen w-full flex lg:items-center lg:justify-center flex-col space-y-8 bg-slate-50 p-8 lg:my-0">
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-serif text-midgreen">
                    Compliance, Community and Commitment
                </h1>
                <p className="text-center max-w-prose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quaerat, cum excepturi deserunt fuga sint consequuntur labore, esse dolore voluptatem repudiandae nostrum atque tempora amet pariatur nobis eaque, nesciunt at. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam deserunt omnis neque consectetur tenetur. Architecto dolore, distinctio beatae, in vitae provident doloremque rerum hic tempore reprehenderit animi, quasi quia nam.
                </p>
            </div>
            <div>
            < Cards />
            </div>

            <div className="sticky h-[50vh] bg-slate-50 w-full flex items-center justify-center px-4">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="bg-darkgreen rounded-lg flex flex-col md:flex-row items-center p-4 w-full max-w-4xl">
                        <div className="text-white text-center font-medium text-lg md:text-2xl lg:text-3xl mb-4 md:mb-0 md:pl-4">
                            Join our community!
                        </div>
                        <div className="flex items-center w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="bg-white text-gray-700 p-2 rounded-l-lg w-full md:w-[300px]"
                            />
                            <button className="bg-lightgreen text-white p-2 rounded-r-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                        <img className="ml-0 md:ml-10 w-12 h-12 md:w-16 md:h-16 mt-4 md:mt-0" src={Leaf} alt="Placeholder"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
