import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./containers/home";
import About from "./containers/about";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";

function App() {
  return ( 
    <div className="App">
      {/* particles js */}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
