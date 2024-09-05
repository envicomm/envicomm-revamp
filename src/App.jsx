import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

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
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="h-screen">
          <div className=" w-full">
            <Nav />
          </div>
          <ScrollArea className="h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/application" element={<Application />} />
              <Route path="/services/consultancy" element={<Consultancy />} />
              <Route path="/services/planning" element={<Planning />} />
              <Route path="/services/reporting" element={<Reporting />} />
              <Route path="/contact" element={<Contact />} /> */}
            </Routes>
            <div>
              <Footer />
            </div>
          </ScrollArea>
        </div>
      </Router>
    </>
  );
}

export default App;
