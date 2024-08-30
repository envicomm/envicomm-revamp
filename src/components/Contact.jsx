import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

function ContactUs() {
    return (
        <div className="w-full overflow-x-hidden flex flex-col text-center justify-center pb-36">
            <div className="bg-services lg:h-[600px] h-[300px] bg-cover bg-center flex flex-col items-start justify-center">
                <nav aria-label="breadcrumb" className='lg:mx-40 mx-5 '>
                    <ol className="flex space-x-2 text-gray-500">
                        <li>
                            <Link to="/" className='text-white hover:text-slate-500'>Home</Link>
                        </li>
                        <li>-</li>
                        <li>
                            <Link to="/Contact" className={`text-white hover:text-slate-500 ${location.pathname === '/contact' ? 'underline' : ""}`}>Contact</Link>
                        </li>
                    </ol>
                </nav>
                <h1 className='lg:mx-40 mx-5 drop-shadow-lg text-extrabold text-white font-sans text-5xl md:text-7xl lg:text-9xl '>
                    Contact Us
                </h1>
            </div>

            <div className="p-6 mx-auto max-w-full lg:max-w-[1600px]">
                <div className="sm:p-6 mx-auto text-black shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:space-x-8 lg:space-x-24 sm:h-full">

                        {/* Google Maps iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3478823166267!2d123.89909731526492!3d10.325251992617169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99e6d322e3a3d%3A0x2d6a84a3d080bd55!2sAdlawon%20Corporate%20Center!5e0!3m2!1sen!2sph!4v1603681302381!5m2!1sen!2sph"
                            className="w-full h-64 sm:w-[400px] lg:w-[595px] sm:h-[300px] lg:h-[660px] border-0 rounded-lg shadow-lg mb-6 sm:mb hidden md:block"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>

                        {/* Contact Information */}
                        <div className="sm:justify-start text-sm sm:text-base items-center text-center sm:text-left">
                            <h2 className="text-lg sm:text-xl lg:text-2xl text-[#547326] mb-2 font-normal">
                                We're ready to serve.
                            </h2>
                            <h3 className="text-xl sm:text-2xl lg:text-4xl text-[#547326] sm:mb-8 font-medium">
                                Get in Touch
                            </h3>
                            <p className="lg:mb-8 text-justify leading-5 sm:leading-7 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="lg:mb-2 flex items-center p-2 sm:p-4">
                                <MapPin className="mr-2 stroke-[#547326]" /> LOCATION
                            </p>
                            <p className="lg:mb-2 flex items-center p-2 sm:p-4">
                                2nd Floor Adlawon Corporate Center, Gov. M. Cuenco Ave., Cebu, Philippines, 6000 Cebu City
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
                                    <p>+63 917 777 7777 or +632 654 3022</p>
                                </div>
                                <div className="flex items-center justify-center sm:justify-start p-2 sm:p-4">
                                    <p>office@sampleemail.org</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='  max-w-4xl mx-auto p-4 rounded-lg shadow-md pt-[150px] '>
                <h1 className='text-normal font-normal mb-4 text-center text-black'>Contact us now!</h1>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-center text-black">Write a Message</h3>
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
                        <button type="submit" className="p-3 rounded bg-[#547326] text-white">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ContactUs;
