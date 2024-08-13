import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hbrLogo from "../assets/hbrhd.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { id: 1, image: hbrLogo },
    { id: 2, image: hbrLogo },
    { id: 3, image: hbrLogo },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  const calculatePosition = (index) => {
    const offset = index - currentIndex;
    if (offset === 0) return { scale: 1.1, zIndex: 10, x: "0%" };
    if (offset === -1 || offset === cards.length - 1)
      return { scale: 0.9, zIndex: 5, x: "-100%" };
    if (offset === 1 || offset === -(cards.length - 1))
      return { scale: 0.9, zIndex: 5, x: "100%" };
    return { scale: 0.7, zIndex: 1, x: offset > 0 ? "150%" : "-150%" };
  };

  return (
    <div className="relative flex flex-col items-center h-screen overflow-hidden bg-gradient-to-b from-midgreen to-white">
      <h1 className="pt-20 text-white font-serif text-4xl text-center">Customer's Feedback</h1>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative flex items-center min-w-96">
          {cards.map((card, index) => {
            const { scale, zIndex, x } = calculatePosition(index);
            return (
              <motion.div
                key={card.id}
                className="absolute flex justify-center items-center"
                style={{
                  zIndex,
                  transform: `translateX(${x}) scale(${scale})`,
                  transition: "transform 0.5s ease-in-out",
                  width: "100%", // Adjust width for responsiveness
                }}
              >
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className=" lg:w-[350px] w-[280px] h-[350px] rounded-lg shadow-lg"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
