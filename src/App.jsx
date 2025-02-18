import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Container1 from "./component/Container1";
import About from "./component/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Container1/>
      <About/>
    </Router>
  );
}

export default App;
