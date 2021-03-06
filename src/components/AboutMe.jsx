
import React from "react";
import './AboutMe.css';
import Me from './Allaura.png';

function AboutMe() {
 return (
  <div id="OutterAbout">
   <div id="AboutDiv">
    <h2>About Me</h2>
    <hr />
    <div id="aboutPic"><img src={ Me } alt="Allaura" id="Me"/></div>
    <div id="aboutText"><p id="innerText">My name is Allaura Hanley. Tired of being a front line retail worker I decided to make a huge change in my life. I started with teaching myself about best code practices and Swift moving on to learn even more at triOS College in the Enterprise Web and Mobile Development course. Being creative and logic oriented, as others can attest I love picking apart plot holes in films and books, I have found my calling in code. Having done backend and frontend work I find that I enjoy both equally. I do my best to teach myself the new technologies and I am always open to learning the latest and greatest of the coder’s world.</p></div>
   </div>
 </div>

 );
}

export default AboutMe;