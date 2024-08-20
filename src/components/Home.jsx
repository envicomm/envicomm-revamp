import React from "react";

import Cards from "../components/Cards";
import Feedback from "../components/Feedback"
import Leaf from "../assets/Leaf.png";
import Hero from "./Hero"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="overflow-x-hidden w-full">
            <Hero className="sticky"/>
            <Cards />
            <Feedback />

        
        </div>
    );
}

export default Home;
