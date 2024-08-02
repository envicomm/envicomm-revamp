import React from 'react';

function ContactUs() {
    return (
        <div className="font-sans bg-white">
            <div className="h-[528px] w-full bg-cover bg-center" style={{ backgroundImage: 'url("src/assets/homebg.jpg")' }}>
                <h1 className="text-white pt-[230px] pl-[177px] text-center lg:text-left text-4xl lg:text-5xl">Contact Us</h1>
            </div>
            <div className="p-6 pt-[141px] max-w-screen-lg mx-auto text-black shadow-lg">
                <h2 className="text-2xl font-bold mb-2 text-center">We're ready to serve.</h2>
                <p className="mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
                    <p className="mb-2">Address: 2nd Floor Adlawon Corporate Center, Gov. M. Cuenco Ave., Cebu, Philippines, 6000 Cebu City</p>
                    <p className="mb-2">Call Us: +63 917 777 7777 or +632 654 3022</p>
                    <p className="mb-4">Email Us: office@sampleemail.org</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3478823166267!2d123.89909731526492!3d10.325251992617169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99e6d322e3a3d%3A0x2d6a84a3d080bd55!2sAdlawon%20Corporate%20Center!5e0!3m2!1sen!2sph!4v1603681302381!5m2!1sen!2sph"
                        className="w-full h-64 border-0 rounded-lg"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-center pt-[50px] lg:pt-[169px] text-black">Write a Message</h3>
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
                        <button type="submit" className="p-3 rounded bg-green-600 text-white">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
