import React from 'react';

function Footer() {
    return (
        <footer className="flex bg-footer bg-cover bg-center w-full h-auto">
            <div className="w-full lg:h-[448px] h-[900px] flex flex-col justify-end items-center text-white ">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-10 lg:space-y-0 lg:space-x-[200px] xl:space-x-[400px] mb-28">
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                        <img src="../src/assets/logoWhite.png" alt="Logo" className="lg:h-[100px] lg:border-r-2 lg:pr-20 h-[50px]" />
                        <div className="flex flex-col text-center p-4 pl-10 lg:pl-20">
                            <div className="font-semibold mb-2">Category</div>
                            <a href="/" className="hover:underline">Home</a>
                            <a href="#" className="hover:underline">About</a>
                            <a href="#" className="hover:underline">Services</a>
                            <a href="#" className="hover:underline">Contact</a>
                        </div>
                        <div className="flex flex-col text-center p-4">
                            <div className="font-semibold mb-2">Services</div>
                            <a href="#" className="hover:underline">Applications</a>
                            <a href="#" className="hover:underline">Planning</a>
                            <a href="#" className="hover:underline">Reporting</a>
                            <a href="#" className="hover:underline">Consultancy</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 lg:space-y-6 text-center lg:text-left lg:items-start">
                        <div>2nd Floor, Aboitiz Corporate Center, Brgy. Kasambagan, Cebu City, Cebu, 6000, PH</div>
                        <div>09171773171</div>
                        <div>official@envicomm.org</div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center mb-4 lg:mb-0">
                    <div>2023 All rights reserved</div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:underline">Privacy policy</a>
                        <a href="#" className="hover:underline">Terms of service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
