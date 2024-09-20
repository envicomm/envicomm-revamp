import React from "react";
import application from "../assets/application.png";
import planning from "../assets/planning.png";
import reporting from "../assets/reporting.png";
import consultancy from "../assets/consultancy.png";
import { Link } from "react-router-dom";
export default function Cards() {
  return (
    <div className="relative w-[90%] md:w-[62%] flex flex-col gap-12 md:gap-20 items-center justify-center lg:space-x-10  ">
      <div className="flex justify-center pb-2 -20">
        <h1 className=" text-[#547326] font-bold text-2xl lg:text-4xl lg:pt-0 pt-20">
          SERVICES WE OFFER
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full place-items-center">
        <Link
          to="/services/application"
          className="flex flex-col  w-full  pt-8 h-full items-center hover:bg-gray-100  p-4 transition-all duration-500 ease-in-out rounded-[20px] bg-[#FDFDFF] shadow-[0px_4px_5px_5px_rgba(0,_0,_0,_0.15)]"
        >
          <img src={application} className="w-[100px] flex" />
          <figure class="flex justify-center pt-8">
            <div class="text-xl lg:text-2xl    text-[#0E1111] font-semibold  pb-2  ">
              APPLICATION
            </div>
          </figure>
          <div class="flex flex-col text-center px-5 ">
            <div class=" text-sm lg:text-base text-[#0E1111]">
              Streamlining the environmental application process for our clients
              to ensure compliance and expedite project approvals
            </div>
          </div>
        </Link>
        <Link
          to="/services/planning"
          className="flex flex-col  w-full  pt-8 h-full items-center hover:bg-gray-100  p-4 transition-all duration-500 ease-in-out rounded-[20px] bg-[#FDFDFF] shadow-[0px_4px_5px_5px_rgba(0,_0,_0,_0.15)]"
        >
          <img src={planning} className="w-[100px] flex" />
          <figure class="flex justify-center pt-8">
            <div class="text-xl lg:text-2xl    text-[#0E1111] font-semibold  pb-2  ">
              PLANNING
            </div>
          </figure>
          <div class="flex flex-col text-center px-5 ">
            <div class=" text-sm lg:text-base text-[#0E1111]">
              Delivering comprehensive environmental assessments backed by
              data-driven insights for informed decision-making
            </div>
          </div>
        </Link>
        <Link
          to="/services/reporting"
          className="flex flex-col  w-full  pt-8 h-full items-center hover:bg-gray-100  p-4 transition-all duration-500 ease-in-out rounded-[20px] bg-[#FDFDFF] shadow-[0px_4px_5px_5px_rgba(0,_0,_0,_0.15)]"
        >
          <img src={reporting} className="w-[100px] flex" />
          <figure class="flex justify-center pt-8">
            <div class="text-xl lg:text-2xl    text-[#0E1111] font-semibold  pb-2  ">
              REPORTING
            </div>
          </figure>
          <div class="flex flex-col text-center px-5 ">
            <div class=" text-sm lg:text-base text-[#0E1111]">
              Navigating complex environmental regulations and processes to
              ensure your projects meet all compliance standards
            </div>
          </div>
        </Link>
        <Link
          to="/services/consultancy"
          className="flex flex-col  w-full  pt-8 h-full items-center hover:bg-gray-100  p-4 transition-all duration-500 ease-in-out rounded-[20px] bg-[#FDFDFF] shadow-[0px_4px_5px_5px_rgba(0,_0,_0,_0.15)]"
        >
          <img src={consultancy} className="w-[100px] flex" />
          <figure class="flex justify-center pt-8">
            <div class="text-xl lg:text-2xl    text-[#0E1111] font-semibold  pb-2  ">
              CONSULTANCY
            </div>
          </figure>
          <div class="flex flex-col text-center px-5 ">
            <div class=" text-sm lg:text-base text-[#0E1111]">
              Leveraging expertise to provide sustainable environmental
              solutions tailored to your unique needs.
            </div>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-8 items-center justify-center">
        <div className="">
          <img src="landing-3.jpg" className="object-contain" />
        </div>
        <div className="flex flex-col gap-4   text-justify">
          <div className="border-l-4 2xl:border-l-8  border-[#8CBF3F] px-4 text-base md:text-lg lg:text-xl  text-[#0E1111] font-semibold 2xl:flex 2xl:items-center">
            <h1 className="">
              We pride ourselves on our strong partnership with government
              agencies, allowing us to navigate regulatory requirements
              seamlessly. This partnership ensures that your company remains
              compliant while focusing on its core operations.
            </h1>
          </div>
          <div className="hidden md:block px-4 text-sm md:text-lg lg:text-xl  h-full 2xl:mt-12">
            Furthermore, our dedicated team of experts stays updated on the
            latest legislative developments, providing you with insights and
            strategies tailored to your specific industry needs. By leveraging
            our extensive network, we can also advocate for your interests,
            ensuring that your voice is heard in policy discussions that impact
            your operations.
          </div>
        </div>
      </div>
    </div>
  );
}
