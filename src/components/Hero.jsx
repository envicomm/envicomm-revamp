import React, { useEffect, useState } from "react";
import { initTWE } from "tw-elements";
import { Link } from "react-router-dom";
import homebg from "../assets/homebg.jpg";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import hero4 from "../assets/hero-4.jpg";
import hero5 from "../assets/hero-5.jpg";
import hero6 from "../assets/hero-6.jpg";

import { Facebook, Linkedin, Instagram } from "lucide-react";

function BannerCarousel() {
  const images = [hero2,hero1,  hero3, hero4 ,hero5 ,hero6];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    initTWE();
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-[80vh] sm:h-[70vh] md:min-h-screen w-screen grid grid-cols-1 lg:grid-cols-2 ">
      {/* Carousel Background */}
    
      {/* Blurred White Overlay */}

      {/* Banner Content */}
      <div className="flex h-[40vh] lg:h-full w-full flex-col justify-center text-center">
        <div className="flex  flex-col gap-4 w-[100%] items-center justify-center">
          <h1 className="text-3xl lg:font-extrabold font-bold sm:text-4xl lg:text-5xl  ">
            ENVI-COMM CORPORATION
          </h1>
          <h2 className="px-2 text-sm text-darkgreen sm:px-4 sm:text-base md:px-8 md:text-lg">
            "Guiding Your Path to Green: Your Environmental Compliance
            Consulting Firm."
          </h2>
          <Link
            to="/contact"
            className="mt-4 rounded-lg bg-midgreen py-2 px-4 text-sm text-white transition duration-300 ease-in-out hover:bg-lightgreen sm:text-base md:text-lg"
          >
            Contact Us
          </Link>
          <div className="flex flex-row space-x-7 ">
            <Facebook className="bg-lightgreen hover:bg-darkgreen transition duration-300 ease-in-out p-2 text-white rounded-full w-10 h-10" />
            <Instagram className="bg-lightgreen  hover:bg-darkgreen transition duration-300 ease-in-out p-2 text-white rounded-full w-10 h-10" />
            <Linkedin className="bg-lightgreen  hover:bg-darkgreen transition duration-300 ease-in-out p-2 text-white rounded-full w-10 h-10" />
          </div>
        </div>
      </div>
      <div className="relative h-[40vh] md:h-full inset-0 z-0  ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`absolute inset-0 h-full w-full object-fill transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}

export default BannerCarousel;
