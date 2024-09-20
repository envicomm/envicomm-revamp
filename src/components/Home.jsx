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
    <div className="relative flex flex-col gap-12 md:gap-24 items-center justify-center ">
      <Hero />

      <div className="w-full flex items-center justify-center h-full  ">
        <div className="w-[90%] md:w-[62%] flex items-center py-4 xl:py-12 flex-col gap-4 md:gap-12 text-center ">
          <div className="w-2/3">
            <h1 className="font-bold text-2xl lg:text-4xl  text-[#547326]">
              HAVING HARD TIME PROCESSING YOUR ENVIRONMENTAL PERMITS?
            </h1>
          </div>

          <h1 className="text-xs md:text-base lg:text-xl 2xl:text-2xl">
            ENVI-COMM CORPORATION is your trusted partner in crafting
            sustainable solutions. Contact us today and let our expert team help
            you navigate and resolve environmental crises with innovative
            strategies and a commitment to a greener future!
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative w-full">
              <img src="hero-1.png" className="object-contain" />
            </div>
            <div className="relative w-full">
              <img src="hero-3.jpg" className="object-contain" />
            </div>
            <div className="relative w-full">
              <img src="hero-4.jpg" className="object-contain" />
            </div>
          </div>
          <div className="w-full text-center text-white p-4 md:p-8 text-sm md:xl:text-lg 2xl:text-2xl  bg-[#414A4C]">
            <h1>
              ENVI-COMM CORPORATION is your one-stop solution for all
              environmental compliance needs. With our extensive range of
              services, including waste management, emissions monitoring, and
              environmental impact assessments
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full  flex items-center justify-center">
        <Cards />
      </div>

      <div className="w-full flex items-center justify-center h-full  ">
        <div className="w-11/12 md:w-[62%] flex items-center  xl:py-12 flex-col gap-11 md:gap-11 text-center ">
          <h1 className="text-2xl lg:text-4xl font-semibold text-[#547326] italic">
            Environmental Compliance, Community and Commitment
          </h1>
          <iframe
            className="w-full h-[630px]"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?mute=1&autoplay=1&loop=1"
          ></iframe>
          <div className="w-full text-center text-white p-4 md:p-8 text-sm md:xl:text-lg 2xl:text-2xl  bg-[#414A4C]">
            <h1>
              Our commitment to client support sets us apart. We work closely
              with each client, providing tailored solutions for their needs.
              Whether you're a small business or a large corporation, ENVI-COMM
              CORPORATION is here to support you every step of the way.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center w-[90%] md:w-[62%] h-full ">
        <h1 className="font-serif text-darkgreen font-bold text-2xl lg:text-4xl text-center">
          OUR PROJECTS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24 md:gap-4 place-items-center w-full">
          <div className="flex flex-col gap-4 w-full ">
            <img
              src="image11.png"
              alt=""
              className="object-contain lg:object-none lg:w-full lg:h-[250px] 2xl:h-[500px]"
            />
            <div className="flex flex-col gap-1 justify-between text-center">
              <h2 className="text-xl  text-[#0E1111] font-bold text-center">
                Resort and Waterpark Project
              </h2>
              <p className="text-base text-center">
                Environmental Compliance Certificate
              </p>
              <p className="text-base text-center"> - EIS</p>
              <div className="flex items-center justify-center">
                <Link
                  to={`/projectDetails?name=RESORT AND WATERPARK PROJECT`}
                  className="flex text-[24px] font-normal items-center w-[185px] h-[44px] justify-center p-3  tracking-wide rounded-[66px] bg-[#414A4C] text-gray-50"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full  ">
            <img
              src="image12.png"
              alt=""
              className="object-contain lg:object-none lg:w-full lg:h-[250px] 2xl:h-[500px]"
            />

            <div className="flex flex-col gap-1 justify-between">
              <h2 className="text-xl text-[#0E1111] font-bold text-center">
                Hydropower Plant Project
              </h2>
              <p className="text-base text-center">
                Environmental Compliance Certificate
              </p>
              <p className="text-base text-center"> - EIS</p>
              <div className="flex items-center justify-center">
                <Link
                  to={`/projectDetails?name=RESORT AND WATERPARK PROJECT`}
                  className="flex text-[24px] font-normal items-center w-[185px] h-[44px] justify-center p-3  tracking-wide rounded-[66px] bg-[#414A4C] text-gray-50"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <img
              src="image11.png"
              alt=""
              className="object-contain lg:object-none lg:w-full lg:h-[250px] 2xl:h-[500px]"
            />

            <div className="flex flex-col gap-1 justify-between">
              <h2 className="text-xl text-[#0E1111] font-bold text-center">
                Residential Building Project
              </h2>
              <p className="text-base text-center">
                Environmental Performance Report and
              </p>
              <p className="text-base text-center">Management Plan</p>

              <div className="flex items-center justify-center">
                <Link
                  to={`/projectDetails?name=RESORT AND WATERPARK PROJECT`}
                  className="flex text-[24px] font-normal items-center w-[185px] h-[44px] justify-center p-3  tracking-wide rounded-[66px] bg-[#414A4C] text-gray-50"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 md:gap-x-4 md:gap-y-20 mt-12 xl:mt-8 2xl:mt-0 xl:gap-12 w-[90%] md:w-[62%] h-full place-items-center ">
        <div className="relative w-[300px] h-full md:w-full 2xl:h-[400px]  bg-[#fdfdff] rounded-[20px] shadow-[0px_4px_5px_5px_rgba(0,_0,_0,_0.15)]">
          <img
            src="Eastland-v3.png"
            className="absolute shadow-[0px_4px_5px_5px_rgba(0,_0,_0,_0.15)] object-cover xl:w-[134px] xl:h-[134px] w-[120px] md:h-[120px] rounded-full left-1/2 -translate-x-1/2 -top-[20%] "
          />
          <div className="flex flex-col gap-4 xl:gap-8 items-center justify-center w-full h-full px-6 font-['Poppins']">
            <div className="flex  items-center mt-20 justify-center  ">
              <h1 className="text-center text-[#0e1111] text-base 4k:text-xl font-normal ">
                "I am very satisfied with the service provided by Envi-comm. The
                quality of their work is excellent, and both the staff and team
                leader are highly professional in their respective fields.”
              </h1>
            </div>
            <div className="flex w-full  flex-col ">
              <h1 class="text-center text-[#0e1111] text-base 4k:text-xl  font-semibold ">
                EASTLAND PROPERTY VENTURES, INC.
              </h1>
              <h1 class="text-center text-[#0e1111] text-sm 4k:text-xl font-light ">
                Proposed 10-Storey Socialized
                <br />
                Condominium Development
              </h1>
            </div>
          </div>
        </div>
        <div className="relative w-[300px] h-full md:w-full   bg-[#fdfdff] rounded-[20px] shadow-[0px_4px_5px_5px_rgba(0,_0,_0,_0.15)]">
          <img
            src="Hagnaya.png"
            className="absolute shadow-[0px_4px_5px_5px_rgba(0,_0,_0,_0.15)] object-cover xl:w-[134px] xl:h-[134px] w-[120px] md:h-[120px] bg-red-500 rounded-full left-1/2 -translate-x-1/2 -top-[20%] "
          />
          <div className="flex flex-col gap-8 items-center justify-center w-full h-full px-6 font-['Poppins']">
            <div className="flex  items-center mt-20 justify-center  ">
              <h1 className="text-center text-[#0e1111] text-base 4k:text-xl font-normal ">
                So far, I love the service here at Envi-comm Corporation, and I
                can truly say that their service is excellent
              </h1>
            </div>
            <div className="flex w-full  flex-col ">
              <h1 class="text-center text-[#0e1111] text-base 4k:text-xl font-semibold ">
                HAGNAYA BEACH RESORT
              </h1>
              <h1 class="text-center text-[#0e1111] text-sm 4k:text-xl font-light ">
                Beach Resort Project
              </h1>
            </div>
          </div>
        </div>
        <div className="relative w-[300px] h-full md:w-full   bg-[#fdfdff] rounded-[20px] shadow-[0px_4px_5px_5px_rgba(0,_0,_0,_0.15)]">
          <img
            src="Shemberg.png"
            className="absolute shadow-[0px_4px_5px_5px_rgba(0,_0,_0,_0.15)] object-cover xl:w-[134px] xl:h-[134px] w-[120px] md:h-[120px] bg-red-500 rounded-full left-1/2 -translate-x-1/2 -top-[20%] "
          />
          <div className="flex flex-col gap-8 items-center justify-center w-full h-full px-6 font-['Poppins']">
            <div className="flex  items-center mt-20 justify-center  ">
              <h1 className="text-center text-[#0e1111] text-base 4k:text-xl font-normal ">
                “We are very satisfied with your service, and if I'm going to
                rate it from 1 to 10, it is always 10.”
              </h1>
            </div>
            <div className="flex   w-full  flex-col ">
              <h1 class="text-center text-[#0e1111] text-base 4k:text-xl font-semibold ">
                SHEMBERG
              </h1>
              <h1 class="text-center text-[#0e1111] text-sm 4k:text-xl font-light ">
                SHEMBERG-INGREDIENTS
                <br />
                GUMS AND CORPORATION
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="relative pt-28 md:pt-32 lg:p-0 w-full h-full">
          <img src="4K-model.png" className="object-cover object-[60%_100%] md:object-[60%_100%] lg:object-[50%_100%]  h-full w-full" />
        </div>

        <div className="absolute w-[90%] md:w-[62%] flex h-full justify-center lg:justify-start ">
          <div className="flex flex-col gap-4 items-center lg:mt-36 4k:mt-0  ">
            <div className="flex flex-col text-center ">
              <h1 className="text-[#0e1111] text-[30px] md:text-[45px] 4xl:text-6xl 4xl:mt-24 font-medium font-['Poppins'] 4k:text-6xl">
                Get Our Updates
              </h1>
              <h1 className=" text-[#0e1111] text-xs font-normal 4xl:text-2xl font-['Poppins'] ">
                Find out about events and other news
              </h1>
            </div>
            <div className="flex items-center lg:items-start lg:justify-start justify-center text-sm  ">
              <input
                className="4xl:placeholder:text-2xl 4xl:placeholder:text-gray-500/40 4xl:placeholder:text-center 4xl:text-2xl h-[33px] 4xl:h-[50px] w-[186px] 4xl:w-[300px] px-4  bg-[#fdfdff] rounded-tl-[22px] rounded-bl-[22px] shadow-[0px_4px_5px_2px_rgba(0,_0,_0,_0.15)]"
                placeholder="example@gmail.com"
              />
              <button
                type="button"
                className="h-[33px] 4xl:h-[50px]  text-base 4xl:text-2xl px-4 justify-center  rounded-r-[22px]  bg-midgreen flex items-center text-white dark:text-gray-50 shadow-[0px_4px_5px_2px_rgba(0,_0,_0,_0.15)]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full  p-4 xl:p-24  flex items-center justify-center ">
        <FeedBackPage />
      </div> */}

      {/* <div className="w-full p-4 xl:p-24 bg-gray-500 text-white ">
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
      </div> */}
    </div>
  );
}

export default Home;
