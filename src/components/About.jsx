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
    <main ref={container} className="relative h-[500vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
      <Section3 scrollYProgress={scrollYProgress} />
      <Section4 scrollYProgress={scrollYProgress} />
      <Section5 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <motion.div
      style={{ scale }}
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
        <p className="text-white px-4 text-justify">
          <span className='text-lightgreen'>ENVI-COMM CORPORATION</span> is an environmental consulting corporation composed of individuals passionate about sustainable development through compliance with various environmental regulations andthe institutionalization of in-house environmental conservation and sustainable development programs and systems.
        </p>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  
  const scale = useTransform(scrollYProgress, [0.35, 0.5, 0.65, 0.8, 1], [1, 1, 1, 1, 1]);

  return (
    <motion.div
      style={{ scale }}
      className="sticky bg-project1 h-screen bg-cover bg-center flex flex-col justify-center text-justify px-4 items-center top-0"
    >
      <div className="text-center text-lg md:text-2xl lg:text-4xl font-bold text-white">
       OUR HISTORY
      </div>
      <div>
        <span>ENVI-COMM CORPORATION</span> was established in 2018 under Greenergyst, Envi-comm emerged to promote sustainable practices in the Philippines. After a temporary closure during the 2020 pandemic, we reopened in 2021 with renewed dedication to environmental stewardship.
      </div>
    </motion.div>
  );
};

const Section3 = ({ scrollYProgress }) => {

  const scale = useTransform(scrollYProgress, [0.35, 0.5, 0.65, 0.8, 1], [1, 1, 1, 1, 1]);

  return (
    <motion.div
      style={{ scale}}
      className="sticky bg-services h-screen bg-cover bg-center flex flex-col justify-center text-justify px-4 space-y-4 items-center top-0"
    >
      <div className="text-center text-4xl md:text-2xl lg:text-4xl font-extrabold text-white">
        MISSION
      </div>
      <div className='text-midgreen font-bold'>Green for Tomorrow</div>
      <div className='text-white'>
        We strive to deliver unparalled service across different fields of expertise and provide service reliability that exceeds our Customer's standards and expectations
      </div>
    </motion.div>
  );
};

const Section4 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.35, 0.5, 0.65, 0.8, 1], [1, 1, 1, 1, 1]);

  return (
    <motion.div
      style={{ scale }}
      className="sticky bg-services h-screen bg-cover bg-center flex flex-col justify-center text-justify px-4 items-center top-0"
    >
      <div className="text-center text-4xl md:text-2xl lg:text-4xl font-extrabold text-white">
        VISION
      </div>
      <div className='text-midgreen font-bold'>ECO LEADERSHIP</div>
      <div className='text-white'>
       We aim to be the national leader in providing reliable environmental compliance and consultancy solutions.
      </div>
    </motion.div>
  );
};

const Section5 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.35, 0.5, 0.65, 0.8, 1], [1, 1, 1, 1, 1]);

  return (
    <motion.div
      style={{ scale }}
      className="sticky bg-gradient-to-b from-lightgreen via-white to-white h-screen bg-cover bg-center flex items-center top-0"
    >
      <div className="text-center text-lg md:text-2xl lg:text-4xl font-bold">
        CORE VALUES
      </div>
      <div>
        <ul>
          <li>Unparalled Service</li>
          <li>Professionalism</li>
          <li>Integrity</li>
        </ul>
      </div>
    </motion.div>
  );
};
export default About;
