import React, { useEffect, useState } from "react";
import { initTWE } from "tw-elements";
import { Link } from "react-router-dom";
import homebg from "../assets/homebg.jpg";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import { Facebook, Linkedin, Instagram } from 'lucide-react';

function BannerCarousel() {
  const images = [homebg, project1, project2, project3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    initTWE();
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[70vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] w-full overflow-hidden pt-20">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Blurred White Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white h-full w-full sm:w-4/5 md:w-2/3 lg:w-2/3 skew-x-12 -translate-x-[70px] lg:skew-x-0 lg:-translate-x-0"></div>

      {/* Banner Content */}
      <div className="relative z-20 flex h-full lg:w-2/3 w-full flex-col items-center justify-center space-y-4 p-4 text-center sm:space-y-6 sm:p-6 md:space-y-8 md:p-12">
        <h1 className="text-3xl lg:font-extrabold font-bold sm:text-4xl md:text-5xl lg:text-8xl lg:w-1/2 ">
          ENVI-COMM CORPORATION
        </h1>
        <h2 className="px-2 text-sm text-darkgreen sm:px-4 sm:text-base md:px-8 md:text-lg">
          "Guiding Your Path to Green: Your Environmental Compliance Consulting
          Firm."
        </h2>
        <Link
          to="/contact"
          className="mt-4 rounded-lg bg-darkgreen py-2 px-4 text-sm text-white transition duration-300 ease-in-out hover:bg-lightgreen sm:text-base md:text-lg"
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
  );
}

export default BannerCarousel;
