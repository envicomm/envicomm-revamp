import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Footer from '../components/Footer';

function About() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {}, []);

  return (
    <main ref={container} className="relative h-[300vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
      <Section3 scrollYProgress={scrollYProgress} />
      <Section4 />
      <Footer />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.6]);
  const rotate = useTransform(scrollYProgress, [0, 0.25], [0, -10]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="bg-homebg bg-cover bg-center bg-fixed h-screen flex items-center sticky top-0"
    >
      {/* breadcrumbs */}
      <nav
        aria-label="breadcrumb"
        className="absolute top-[200px] left-[20px] md:left-[50px] lg:left-[210px] z-10"
      >
        <ol className="flex space-x-2 text-gray-500">
          <li>
            <Link to="/" className="text-white hover:text-slate-500">
              Home
            </Link>
          </li>
          <li>-</li>
          <li>
            <Link
              to="/About"
              className={`text-white hover:text-slate-500 ${
                location.pathname === '/About' ? 'underline' : ''
              }`}
            >
              About
            </Link>
          </li>
        </ol>
      </nav>
      {/* end of breadcrumbs */}
      <div className="flex flex-col items-start ml-[20px] md:ml-[50px] lg:ml-[210px] max-w-prose space-y-6">
        <h1 className="flex drop-shadow-lg text-extrabold text-lightgreen text-2xl md:text-3xl font-serif">
          COMPLIANCE, COMMUNITY, COMMITMENT
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
          consectetur, numquam soluta distinctio perspiciatis amet dolorem
          eveniet neque reprehenderit sapiente, dignissimos magnam quos
          recusandae molestiae ipsum asperiores adipisci minima quia.
        </p>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const rotate = useTransform(scrollYProgress, [0.25, 0.35, 0.65, 0.8, 1], [0, 0, 0, 0, 0]);
  const scale = useTransform(scrollYProgress, [0.35, 0.5, 0.65, 0.8, 1], [0.8, 1, 1, 0.8, 0.6]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky bg-project1 h-screen bg-cover bg-center flex items-center top-0"
    >
      <div className="text-center text-lg md:text-2xl lg:text-4xl font-bold text-white">
        MISSION
      </div>
    </motion.div>
  );
};

const Section3 = ({ scrollYProgress }) => {
  const rotate = useTransform(scrollYProgress, [0.25, 0.35, 0.65, 0.8, 1], [20, 0, 0, 0, 0]);
  const scale = useTransform(scrollYProgress, [0.35, 0.5, 0.65, 0.8, 1], [0.8, 0.8, 1, 1, 1]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky bg-services h-screen bg-cover bg-center flex items-center"
    >
      <div className="text-center text-lg md:text-2xl lg:text-4xl font-bold text-white">
        VISION
      </div>
    </motion.div>
  );
};

const Section4 = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-center text-lg md:text-2xl lg:text-4xl font-bold">
        SERVICES
      </h1>
    </div>
  );
};

export default About;
