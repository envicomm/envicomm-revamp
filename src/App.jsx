import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
