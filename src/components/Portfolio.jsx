
import React from "react";
import './Portfolio.css';
import Welcome from "./Welcome.jsx";
import Projects from "./Projects.jsx";
import Designs from "./Designs.jsx";
import Skills from "./Skills.jsx";

function Portfolio() {
 return (
  <div >
   <Welcome />
   <h1>Home On the range</h1>
   <Projects />
   <Designs />
   <Skills />
  </div>
  );
}

export default Portfolio;