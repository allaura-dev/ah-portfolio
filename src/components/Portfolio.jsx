
import React from "react";
import './Portfolio.css';
import Welcome from "./Welcome.jsx";
import Projects from "./Projects.jsx";
import Designs from "./Designs.jsx";
import AboutMe from "./AboutMe.jsx";

function Portfolio() {
 return (
  <div >
   <Welcome />
   <Projects />
   <AboutMe />
   <Designs />
  </div>
 );
}

export default Portfolio;