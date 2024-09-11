import React from "react";

import Cards from "../components/Cards";
import Feedback from "../components/Feedback";
import Leaf from "../assets/Leaf.png";
import Hero from "./Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FeedBackPage } from "./new-feedback";

function Home() {


  
  return (
    <div className="flex flex-col items-center justify-center w-screen">
 

      <Hero />

      <div className="w-full  flex items-center justify-center">
        <Cards />
      </div>
      <div className="flex flex-col gap-24 items-center justify-center w-full h-full p-4 xl:p-24">
        <h1 className="font-serif text-darkgreen font-bold lg:text-6xl text-2xl lg:pt-0 pt-20">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full xl:w-[80%] gap-4 h-full place-items-center">
          <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img
              src="image-1.png"
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-wide text-center">
                  Resort and Waterpark Project
                </h2>
                <p className="dark:text-gray-800 text-center">
                    Environmental Compliance Certificate - EIS
                </p>
              </div>
              <Link
                to={`/projectDetails?name=RESORT AND WATERPARK PROJECT`}
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-midgreen text-gray-50"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img
              src="image-2.png"
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-wide text-center">
                  Hydropower Plant Project
                </h2>
                <p className="dark:text-gray-800 text-center">
                Environmental Compliance Certificate - EIS
                </p>
              </div>
              <Link
                to={`/projectDetails?name=MINI HYDROPOWER PROJECT`}
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-midgreen text-gray-50"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img
              src="about-page-4.png"
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-wide text-center">
                 Residential Building Project
                </h2>
                <p className="dark:text-gray-800 text-center">
                Environmental Performance Report and Management Plan
                </p>
              </div>
              <Link
                to={`/projectDetails?name=RESIDENTIAL BUILDING PROJECT`}
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-midgreen text-gray-50"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  p-4 xl:p-24  flex items-center justify-center ">
        <FeedBackPage />
      </div>
      
      <div className="w-full p-4 xl:p-24 bg-gray-500 text-white ">
        <div className="w-full dark:bg-gray-500">
          <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">
              Find out about events and other news
            </p>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="example@email.com"
                className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
              />
              <button
                type="button"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-midgreen  dark:text-gray-50"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
