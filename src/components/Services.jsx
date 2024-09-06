import React from "react";
import homebg from "../assets/homebg.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Animate from "./Animate";
function Services() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col text-center justify-center pb-36 ">
      <div className="bg-services lg:h-[600px] h-[300px] bg-cover bg-center flex flex-col items-start justify-center">
        <Animate>
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="lg:mx-40 mx-5 ">
            <ol className="flex space-x-2 text-gray-500">
              <li>
                <Link to="/" className="text-white hover:text-slate-500">
                  Home
                </Link>
              </li>
              <li>-</li>
              <li>
                <Link
                  to="/Services"
                  className={`text-white hover:text-slate-500 ${
                    location.pathname === "/Services" ? "underline" : ""
                  }`}
                >
                  Services
                </Link>
              </li>
            </ol>
          </nav>
          {/* End of Breadcrumbs */}

          <h1 className="lg:mx-40 mx-5 drop-shadow-lg text-extrabold text-white font-sans text-5xl md:text-7xl lg:text-9xl ">
            SERVICES
          </h1>
        </Animate>
      </div>
      <Animate>
        <div className="h-[200px] flex items-center justify-center px-8 my-20 lg:my-4 md:px-16 ">
          <div className="relative max-w-2xl flex flex-col text-center space-y-5">
            <h1 className="font-serif   text-midgreen text-6xl font-bold">
              Services We Offer
            </h1>
          
          </div>
        </div>
      </Animate>

      <Animate>
        <div className="flex items-center justify-center px-8  md:px-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-4">
            <div className="flex flex-col md:flex-row items-center lg:gap-4">
              <div className="max-w-prose md:w-[400px] space-y-5 text-center md:text-left ">
                <h1 className="text-4xl text-midgreen">Application</h1>
                <p>
                  Streamlining the environmental application process for our
                  clients to ensure compliance and expedite project approvals.
                </p>
                <Link
                  to="/services/application"
                  className="bg-midgreen hover:bg-lightgreen rounded-2xl p-4 text-white shadow-lg inline-block text-center"
                >
                  Click Here
                </Link>
              </div>
              <img
                className="hidden md:block h-[300px] w-[300px] rounded-tl-full md:rounded-tl-full lg:rounded-tl-full"
                src={homebg}
                alt="Logo"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center lg:gap-4">
              <img
                className="hidden md:block h-[300px] w-[300px] rounded-tr-full md:rounded-tr-none lg:rounded-tr-full"
                src={homebg}
                alt="Logo"
              />
              <div className="max-w-prose w-full md:w-[400px] space-y-5 text-center md:text-left">
                <h1 className="text-4xl text-midgreen">Planning</h1>
                <p>
                  Delivering comprehensive environmental assessments backed by
                  data-driven insights for informed decision-making
                </p>
                <Link
                  to="/services/planning"
                  className="bg-midgreen hover:bg-lightgreen rounded-2xl p-4 text-white shadow-lg inline-block text-center"
                >
                  Click Here
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center lg:gap-4">
              <div className="max-w-prose w-full md:w-[400px] space-y-5 text-center md:text-left">
              <h1 className="text-4xl text-midgreen">Reporting</h1>
                <p>
                  Navigating complex environmental regulations and processes to
                  ensure your projects meet all compliance standards.
                </p>
                <Link
                  to="/services/reporting"
                  className="bg-midgreen hover:bg-lightgreen rounded-2xl p-4 text-white shadow-lg inline-block text-center"
                >
                  Click Here
                </Link>
              </div>
              <img
                className="hidden md:block h-[300px] w-[300px] rounded-bl-full md:rounded-bl-none lg:rounded-bl-full"
                src={homebg}
                alt="Logo"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <img
                className="hidden md:block h-[300px] w-[300px] rounded-br-full md:rounded-br-none lg:rounded-br-full"
                src={homebg}
                alt="Logo"
              />
              <div className="max-w-prose w-full md:w-[400px] space-y-5 text-center md:text-left">
              <h1 className="text-4xl text-midgreen">Consultancy</h1>
                <p>
                  Leveraging expertise to provide sustainable environmental
                  solutions tailored to your unique needs.
                </p>
                <Link
                  to="/services/consultancy"
                  className="bg-midgreen hover:bg-lightgreen rounded-2xl p-4 text-white shadow-lg inline-block text-center"
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute bg-white w-[200px] h-[200px] rounded-full items-center " />
        </div>
      </Animate>
    </div>
  );
}

export default Services;
