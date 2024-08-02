import React from 'react';
import footer from '../assets/footer.png'

function Footer() {
    return (
        <footer
            className="w-full  h-[448px] flex flex-col justify-between items-center p-8 text-white pt-[50px] bg-cover bg-center"
            style={{ backgroundImage: "url('src/assets/footer.png')" }}
        >
            <div className="w-full flex flex-col items-center">
                <div className="text-lg font-bold mb-4">ENV-COMM CORPORATION</div>
                <div className="flex justify-center space-x-8">
                    <div className="flex flex-col text-center">
                        <div className="font-semibold mb-2">Category</div>
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">About</a>
                        <a href="#" className="hover:underline">Services</a>
                        <a href="#" className="hover:underline">Contact</a>
                    </div>
                    <div className="flex flex-col text-center">
                        <div className="font-semibold mb-2">Services</div>
                        <a href="#" className="hover:underline">Applications</a>
                        <a href="#" className="hover:underline">Planning</a>
                        <a href="#" className="hover:underline">Reporting</a>
                        <a href="#" className="hover:underline">Consultancy</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center mt-4">
                <div>2023 All rights reserved</div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:underline">Privacy policy</a>
                    <a href="#" className="hover:underline">Terms of service</a>
                </div>
            </div>
        </footer>
    );
}


export default Footer;  