import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="xl:h-full w-full bg-[#404041] flex flex-col  items-center justify-center xl:pt-12 gap-4">
      <div className="grid grid-cols-1 xl:grid-cols-4  h-full w-full gap-4  place-items-center ">
        <div className="h-full w-full flex justify-center border-r-2 ">
          <Link to="/">
            <img
              src="logover3.png"
              className=" mt-4 xl:mt-0 w-[200px] h-[123.27px] "
            />
          </Link>
        </div>
        <div className="h-full w-full flex flex-col gap-[31px] items-center border-r-2 p-12">
          <div className="flex w-full">
            <h1 className="text-[20px] text-white">Direct Link</h1>
          </div>
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#8CBF3F] text-[20px]">Category</h1>
              <ul className="flex flex-col gap-4 w-full text-white">
                <li>
                  <Link to="/" className="hover:border-b-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="hover:border-b-2">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Services" className="hover:border-b-2">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:border-b-2">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[#8CBF3F] text-[20px]">Services</h1>
              <ul className="flex flex-col gap-4 w-full text-white">
                <li>
                  {" "}
                  <Link to="/services/application" className="hover:border-b-2">
                    Applications
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/services/planning" className="hover:border-b-2">
                    Planning
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/services/reporting" className="hover:border-b-2">
                    Reporting
                  </Link>
                </li>
                <li>
                  <Link to="/services/consultancy" className="hover:border-b-2">
                    Consultancy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-full w-full xl:flex items-center p-12 hidden">
          <div className="flex flex-col h-full w-full gap-12 text-white">
            <h1 className="text-[20px]">Recent Projects</h1>
            <div className="flex flex-col gap-4">
              <div className="">
                <h1 className="">Project Name/Company Name</h1>
                <Link
                  to={`/projectDetails?name=RESORT AND WATERPARK PROJECT`}
                  className=" hover:border-b-2"
                >
                  Resort and Waterpark Project
                </Link>
              </div>
              <h1 className="text-sm text-[#D5D5D5]">
                Environmental Compliance Certificate - EIS
              </h1>
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <h1 className="">Project Name/Company Name</h1>
                <Link
                  to={`/projectDetails?name=MINI HYDROPOWER PROJECT`}
                  className=" hover:border-b-2"
                >
                  Hydropower Plant Project
                </Link>
              </div>
              <h1 className="text-sm text-[#D5D5D5]">
                Environmental Compliance Certificate - EIS
              </h1>
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <h1 className="">Project Name/Company Name</h1>
                <Link
                   to={`/projectDetails?name=RESIDENTIAL BUILDING PROJECT`}
                  className=" hover:border-b-2"
                >
                  Residential Building Project
                </Link>
              </div>
              <h1 className="text-sm text-[#D5D5D5]">
                Environmental Performance Report and Management Plan
              </h1>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex items-center  p-12">
          <div className="flex flex-col gap-12 w-full h-full">
            <div className="flex gap-2">
              <div className="flex gap-2 w-full">
                <MapPin size={36} className="text-[#8CBF3F]" />
                <div className="flex flex-col w-full ">
                  <h1 className="text-[#8CBF3F]">Location</h1>
                  <h1 className="text-[#D5D5D5]">
                    2nd Floor, Aboitiz Corporate Center, Gov. M. Cuenco Ave,
                    Cebu, Philippines, 6000 Cebu City
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Mail size={36} className="text-[#8CBF3F]" />
              <div className="flex flex-col">
                <h1 className="text-[#8CBF3F]">Email Us</h1>
                <h1 className="text-[#D5D5D5]">official@envicomm.org</h1>
              </div>
            </div>
            <div className="flex gap-2">
              <Phone size={36} className="text-[#8CBF3F]" />
              <div className="flex flex-col">
                <h1 className="text-[#8CBF3F]">Phone Us</h1>
                <h1 className="text-[#D5D5D5]">+63 917 177 3171</h1>
                <h1 className="text-[#D5D5D5]"> +032 401-0827</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full text-white px-12">
        <h1>2023 All rights reserved</h1>
      </div>
    </section>
  );
}

export default Footer;
