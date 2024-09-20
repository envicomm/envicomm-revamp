import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useRef } from "react";

import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Home from "./components/Home";
import Application from "./components/Application";
import Consultancy from "./components/Consultancy";
import Planning from "./components/Planning";
import Reporting from "./components/Reporting";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollTotop";
import { AnimatePresence } from "framer-motion";
import { AboutPage } from "./components/NewAbout";
import { ScrollArea } from "./components/ui/scroll-area";
import { ProjectDetails } from "./components/project-component";
function App() {
  const [count, setCount] = useState(0);
  const scrollAreaRef = useRef(null);
  return (
    <div className="h-screen w-screen overflow-hidden font-['Poppins']  ">
      <Router>
        <ScrollToTop scrollAreaRef={scrollAreaRef} />
        <div className="h-full">
          <Nav />

          <ScrollArea className="  h-[calc(100%-100px)]">
            <div className="relative" ref={scrollAreaRef}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/application" element={<Application />} />
                <Route path="/services/consultancy" element={<Consultancy />} />
                <Route path="/services/planning" element={<Planning />} />
                <Route path="/services/reporting" element={<Reporting />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projectDetails" element={<ProjectDetails />} />
              </Routes>
              <div className="z-10 absolute bottom-0 w-full h-[231px] md:h-[250px] lg:h-[325px]  xl:h-[380px] flex items-center justify-center">
                {/* Background layer with opacity */}
                <div className="absolute inset-0 bg-[#3B444B] h-full w-full opacity-50"></div>

                <Footer />
              </div>
            </div>
          </ScrollArea>
        </div>
      </Router>
    </div>
  );
}

export default App;
