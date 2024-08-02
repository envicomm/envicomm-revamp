import React from 'react';
import footerImage from '../assets/footer.png'; // Import the footer image

function Footer() {
  return (
    <footer
      className="text-white py-6"
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: 'cover', // Adjust background size
        backgroundPosition: 'center', // Adjust background position
        backgroundRepeat: 'no-repeat', // Ensure background does not repeat
        height: '500px', // Adjust the height of the footer
        filter: 'hue-rotate(-20deg)' // Adjust the hue as needed
      }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">ENVI-COMM CORPORATION</h2>
        <p className="text-sm">© 2024 ENVI-COMM CORPORATION. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-white hover:text-lightgreen mx-2">Privacy Policy</a>
          <a href="#" className="text-white hover:text-lightgreen mx-2">About Us</a>
          <a href="#" className="text-white hover:text-lightgreen mx-2">Home</a>
          
          <a href="#" className="text-white hover:text-lightgreen mx-2">Terms of Service</a>
          <a href="#" className="text-white hover:text-lightgreen mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
