import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Container1 from "./component/Container1";
import About from "./component/About";
import Projects from "./component/Projects";
import Internship from "./component/Internship";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import AboutUs from "./component/AboutUs";
function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/container1" element={<Container1 />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
