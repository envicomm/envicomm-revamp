import React from "react";
import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div className="w-full h-full flex flex-col  justify-center text-white">
      <div className="flex flex-col gap-4 xl:gap-28 px-4 py-12 xl:p-36 xl:h-screen bg-homebg bg-cover bg-center bg-fixed">
        <div className="flex items-center gap-2 text-[16px]">
          <h1>Home</h1>
          <h1>{`>`}</h1>
          <h1 className="text-[16px] xl:text-[26px]">About Us</h1>
        </div>
        <div className="grid xl:grid-cols-2 w-full">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl text-[#8CBF3F]">
              COMPLIANCE, COMMUNITY, COMMITMENT
            </h1>

            <h1 className="text-justify text-lg">
              <span className="font-bold">ENVI-COMM CORPORATION</span> is an
              environmental consultancy firm, driven by a team passionate about
              championing sustainable development. We emphasize compliance with
              environmental regulations and prioritize the creation of in-house
              programs that foster environmental conservation and sustainable
              growth.
            </h1>
          </div>
        </div>
      </div>
      <div className="xl:h-screen grid grid-cols-1 xl:grid-cols-3 text-black">
        <div className="opacity-80 h-full xl:relative hidden xl:block">
          <img src="about-page-2.png" className="absolute h-full w-full" />
        </div>
        <div className="xl:col-span-2 flex flex-col ">
          <div className="flex xl:m-32 h-full  items-center justify-center  p-8 ">
            <div className=" flex flex-col xl:gap-12 gap-4">
              <h1 className="text-4xl text-[#547326] font-bold">Our History</h1>
              <p className="text-justify text-base xl:text-xl">
                ENVI-COMM CORPORATION is an environmental consulting corporation
                composed of individuals passionate about sustainable development
                through compliance with various environmental regulations and
                the institutionalization of in-house environmental conservation
                and sustainable development programs and systems.
              </p>
            </div>
          </div>
           <div className="bg-midgreen flex flex-col gap-4 xl:p-12 p-12 xl:mr-12 text-white ">
            <h1>History</h1>
            <h1 className="text-justify text-base xl:text-xl text-[#fff]">
              Established in 2018 under Greenergyst, Envi-comm emerged to
              promote sustainable practices in the Philippines. After a
              temporary closure during the 2020 pandemic, we reopened in 2021
              with renewed dedication to environmental stewardship.
            </h1>
          </div>
        </div>
      </div>
      <div className="  p-12 xl:p-24 w-full flex flex-col gap-4 xl:gap-12 items-center justify-center text-white  bg-gray-500 ">
        <h1 className="text-4xl text-midgreen">Core Values</h1>

       
          <ul className="flex flex-col xl:justify-start gap-4 items-center text-xl">
            <li>Unparalled Service</li>
            <li>Professionalism</li>
            <li>Integrity</li>
          </ul>
       
      </div>
      <div className="xl:h-screen grid xl:grid-cols-2 xl:w-[80%] gap-4  mx-auto text-black">
        <div className="flex flex-col gap-8 items-center justify-center xl:p-24  p-12">
          <div className="flex flex-col  w-full text-[#547326]">
            <h1 className="text-4xl ">Our Mission</h1>
            <h1 className="text-2xl">Green For Tomorrow</h1>
          </div>
          <div className="w-full">
            <h1 className="text-justify">
              We strive to deliver unparalleled service across different fields
              of expertise and provide service reliability that exceeds our
              Customer's standards and expectations
            </h1>
          </div>
        </div>
        <div className="w-full h-screen xl:flex items-center justify-center hidden">
          <div className="w-full relative h-[90%] ">
            <img
              src="image-1.png"
              className="absolute top-0 left-0 z-20 w-[380px] h-[450px] translate-y-20 -translate-x-14"
            />
            <img
              src="image-2.png"
              className="absolute bottom-0 right-0 z-10 w-[380px] h-[450px] -translate-x-40 -translate-y-24"
            />
            <div className="absolute  w-[380px] h-[380px] top-0 right-4 -translate-x-36  bg-gray-200 rounded-[90%] translate-y-16  z-0 "></div>
          </div>
        </div>
      </div>
      <div className="xl:h-screen grid xl:grid-cols-2 xl:w-[80%] gap-2   mx-auto xl:px-4 xl:py-32 text-black">
        <div className="xl:grid grid-rows-2 gap-2 relative h-full w-full hidden ">
          <div className="grid grid-cols-2 gap-2  ">
            <div className="bg-green-500 relative w-full h-full">
              <img
                src="about-page-3.png"
                className="absolute object-cover w-full h-full"
              />
            </div>
            <div className="bg-green-500 relative w-full h-full">
              <img
                src="about-page-4.png"
                className="absolute object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-green-500 relative w-full h-full">
              <img
                src="about-page-5.png"
                className="absolute  object-cover w-full h-full"
              />
            </div>
            <div className="bg-green-500 relative w-full h-full">
              <img
                src="about-page-6.png"
                className="absolute object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center p-12 xl:p-24 ">
          <div className="flex flex-col  w-full text-[#547326]">
            <h1 className="text-4xl ">Our Vision</h1>
            <h1 className="text-2xl">20/20 ECO Leadership</h1>
          </div>
          <div className="w-full">
            <h1 className="text-justify">
              We aim to be the national leader in providing reliable
              environmental compliance and consultancy solutions.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
