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
  const images = [hero2, hero1, hero3, hero4, hero5, hero6];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    initTWE();
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full lg:h-[calc(100vh-100px)] flex items-center justify-center ">
      <div className="w-full h-full ">
        <img src="Employees.png" className=" object-cover w-full h-full " />
      </div>
      <div className="z-0 absolute inset-0 w-full h-full bg-[#547326] opacity-60"></div>
      {/* Overlay Text */}
      <div className="z-10 absolute inset-0 w-full mx-auto h-full  flex flex-col items-center justify-center text-white ">
        <div className="z-100 w-[62%] flex flex-col  gap items-center justify-center h-full">
          <h1 className="text-sm md:text-lg xl:text-2xl 2xl:text-4xl">
            Guiding Your Path to Green:
          </h1>

          <h1 className="text-xl/6 md:text-4xl lg:text-6xl 2xl:text-8xl text-center font-bold">
            Your Environmental Compliance Consulting Firm.
          </h1>
          <div  className="flex justify-start gap-4 mt-4">
            <button className="rounded-[100px] text-xs xl:text-xl 2xl:text-2xl bg-[#8CBF3F] px-4 py-2  xl:px-12 xl:py">
                Get Started
            </button>
            <button className="rounded-[100px] text-xs xl:text-xl 2xl:text-2xl border-white border-2 px-4 py-2  xl:px-12 xl:py">
                Talk to Us
            </button>
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default BannerCarousel;
