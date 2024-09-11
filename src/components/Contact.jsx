import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col text-center justify-center pb-36">
      <div className="bg-services lg:h-[600px] h-[300px] bg-cover bg-center flex flex-col items-start justify-center">
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
                to="/Contact"
                className={`text-white hover:text-slate-500 ${
                  location.pathname === "/contact" ? "underline" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ol>
        </nav>
        <h1 className="lg:mx-40 mx-5 drop-shadow-lg text-extrabold text-white font-sans text-5xl md:text-7xl lg:text-9xl ">
          Contact Us
        </h1>
      </div>

      <div className="p-6 mx-auto max-w-full lg:max-w-[1600px]">
        <div className="sm:p-6 mx-auto text-black shadow-lg">
          <div className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-24 sm:h-full">
            <a href="https://www.google.com/maps/place/Aboitiz+Land+Inc./@10.3320347,123.9093798,17.6z/data=!4m6!3m5!1s0x33a998c300a60d89:0x7abc932ba7aebe08!8m2!3d10.331843!4d123.910668!16s%2Fg%2F1tyt2x4t?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D">
              {/* Google Maps iframe */}
              <img
                src="loc-map.png"
                className="object-contain  hover:opacity-75"
              />
            </a>

            {/* Contact Information */}
            <div className="sm:justify-start text-sm sm:text-base items-center text-center sm:text-left p-4">
              <h2 className="text-lg sm:text-xl lg:text-2xl text-[#547326] mb-2 font-normal">
                We're ready to serve.
              </h2>
              <h3 className="text-xl sm:text-2xl lg:text-4xl text-[#547326] sm:mb-8 font-medium">
                Get in Touch
              </h3>

              <p className="lg:mb-2 flex items-center p-2 sm:p-4">
                <MapPin className="mr-2 stroke-[#547326]" /> LOCATION
              </p>
              <p className="lg:mb-2 flex items-center p-2 sm:p-4">
                2nd Floor Aboitiz Corporate Center, Gov. M. Cuenco Ave., Brgy.
                Kasambagan, Cebu, Philippines, 6000 Cebu City
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center justify-center sm:justify-start p-2 sm:p-4">
                  <Phone className="mr-2 stroke-[#547326]" />
                  <p>CALL US</p>
                </div>
                <div className="flex items-center justify-center sm:justify-start p-2 sm:p-4">
                  <Mail className="mr-2 stroke-[#547326]" />
                  <p>EMAIL US</p>
                </div>
                <div className="flex items-center justify-center sm:justify-start p-2 sm:p-4">
                  <p>0917-177-3171 or +032 401-0827</p>
                </div>
                <div className="flex items-center justify-center sm:justify-start p-2 sm:p-4">
                  <p>official@envicomm.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-4xl w-full mx-auto p-8 rounded-lg shadow-md pt-[150px] ">
        <h1 className="text-normal font-normal mb-4 text-center text-black">
          Contact us now!
        </h1>
        <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-center text-black">
          Write a Message
        </h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4 text-black">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded border border-gray-300 bg-gray-100"
            />
          </div>
          <div className="mb-4 text-black">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded border border-gray-300 bg-gray-100"
            />
          </div>
          <div className="mb-4 text-black">
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 rounded border border-gray-300 bg-gray-100"
            />
          </div>
          <div className="mb-4 text-black col-span-1 md:col-span-2">
            <textarea
              placeholder="Your message"
              className="w-full p-3 rounded border border-gray-300 bg-gray-100 h-32"
            ></textarea>
          </div>
          <div className="mb-4 col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="p-3 rounded bg-[#547326] text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
