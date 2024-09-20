import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="relative w-[90%] grid grid-cols-2 lg:grid-cols-3 gap-2 h-full">
      <div className="w-full h-full flex flex-col items-center justify-between pt-2">
        <img
          src="logover3.png"
          className="w-[144px] h-[90px] md:w-[200px] md:h-[150px]"
        />
        <div className="flex gap-2   ">
          <img
            src="fb.svg"
            className="w-[110px] h-[20px] md:w-full md:h-[40px] "
          />

          <img
            src="insta.svg"
            className="w-[110px] h-[20px]  md:w-full md:h-[40px]"
          />

          <img
            src="LinkedIn.svg"
            className="w-[110px] h-[20px] md:w-full md:h-[40px]"
          />

          <img
            src="X.svg"
            className="w-[110px] h-[20px] md:w-full md:h-[40px]"
          />
        </div>
      </div>
      <div className="hidden w-full h-full lg:flex flex-col text-base xl:text-2xl gap-2 pt-2 text-[#FDFDFF]">
        <h1 className="font-bold">Recent Projects</h1>
        <div className="flex flex-col">
          <Link
            to={`/projectDetails?name=RESORT AND WATERPARK PROJECT`}
            className="flex"
          >
            <h1 className="border-b-2 border-[#FDFDFF]">
              Resort and Waterpark Project
            </h1>
          </Link>
          <h1 className="italic text-gray-300 text-xs">
            Environmental Compliance Certificate - EIS
          </h1>
        </div>
        <div className="flex flex-col ">
          <Link
             to={`/projectDetails?name=MINI HYDROPOWER PROJECT`}
            className="flex"
          >
            <h1 className="border-b-2 border-[#FDFDFF]">
            Hydropower Plant Project
            </h1>
          </Link>
          <h1 className="italic text-gray-300 text-xs">
            Environmental Compliance Certificate - EIS
          </h1>
        </div>
        <div className="flex flex-col">
          <Link
             to={`/projectDetails?name=RESIDENTIAL BUILDING PROJECT`}
            className="flex"
          >
            <h1 className="border-b-2 border-[#FDFDFF]">
            Residential Building Project
            </h1>
          </Link>
          <h1 className="italic text-gray-300 text-xs">
          Environmental Performance Report and Management Plan
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full h-full pt-2 text-[10px] md:text-[15px] xl:text-[24px] ">
        <div className="flex flex-col gap-1 ">
          <h1 className="   italic text-gray-300">Location</h1>
          <h1 className="text-[#FDFDFF] text-justify text-[10px] lg:text-base">
            2nd Floor, Aboitiz Corporate Center, Gov. M. Cuenco Ave, Cebu,
            Philippines, 6000 Cebu City
          </h1>
        </div>
        <div className="flex flex-col gap-1 ">
          <h1 className="   italic text-gray-300">Email Us</h1>
          <h1 className="text-[#FDFDFF] text-justify">official@envicomm.org</h1>
        </div>
        <div className="flex flex-col gap-1 ">
          <h1 className="   italic text-gray-300">Phone Us</h1>
          <h1 className="text-[#FDFDFF] text-justify">(+63) 917 177 3171</h1>
          <h1 className="text-[#FDFDFF] text-justify">(+032) 401-0827</h1>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-3 text-[#FDFDFF] flex items-center justify-center">
        <h1 className="text-[10px] lg:text-base xl:text-2xl items-center  ">
          Copyright © ENVI-COMM Corporation - All Rights Reserved.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
