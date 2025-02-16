import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
