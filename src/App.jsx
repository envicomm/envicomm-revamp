<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import Contact from './components/Contact'
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
>>>>>>> dev

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
<<<<<<< HEAD
   
          <Contact/>

=======
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
>>>>>>> dev
      </div>
    </Router>
  );
}

export default App;
