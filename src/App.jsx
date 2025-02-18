import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Container1 from "./component/Container1";
import About from "./component/About";
import Projects from "./component/Projects";
import Internship from "./component/Internship";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Container1/>
      <About/>
      <Internship/>
      {/* <Projects/> */}
    </Router>
  );
}

export default App;
