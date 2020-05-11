
import React from "react";
import './Resume.css';

function Resume() {
 return (
  
   <div id="resumeDiv">
    <h1>OBJECTIVE</h1>
    <p>Pursuing a Front End Web Developer Position at Northern Commerce, using my skills I have learned either on my own or through my 14 month course to help continue the success of the company.</p>
    <h1>PROFESSIONAL SUMMARY</h1>
    <ul class="Resume">
      <li>-Detail oriented and timely on tasks.</li>
      <li>-Able to make responsive web designs.</li>
      <li>-Knowledge of multiple libraries available and their uses.</li>
      <li>-Efficient at communication and planning with peers.</li>
      <li>-Able to give and receive constructive criticism for the better.</li>
      <li>-Created a personal project of an eCommerce site.</li>
      <li>-Built a ASP.NET page using Bootstrap that uses an API.</li>
    </ul>
    <h1>SKILLS</h1>
    <div id="Skills">
    <ul class="Resume">
     <div id="SkillsLeft">
      <li>-HTML</li>
      <li>-CSS</li>
      <li>-Grunt</li>
      <li>-React</li>
      <li>-Bootstrap</li>
      <li>-Razor ASP.net</li>
      <li>-OOP</li>
      <li>-JavaScript</li>
     </div>
      <div id="SkillsRight">
       <li>-Java</li>
       <li>-SQL</li>
       <li>-C#</li>
       <li>-C++</li>
       <li>-git</li>
       <li>-GitHub</li>
       <li>-Illustrator</li>
       <li>-Photoshop</li>
       <li>-APIs</li>
      </div>
     </ul>
    </div>
    <h1>EDUCATION</h1>
    <p>Enterprise Web and Mobile Development + Internship<br />
         triOS College Business Technology Healthcare
    </p>
    <p class="ital">Currently attending</p>
    <p class="ital">College Diploma</p>
    <h1>VOLUNTEER</h1>
    <p>PAL(Peer Assisted Learning) Tutor<br />
        triOS College Business Technology Healthcare
    </p>
    <p class="ital">February 2020 – April 2021</p>
    <p>Student Ambassador<br />
     triOS College Business Technology Healthcare
    </p>
    <p class="ital">March 2020 – April 2021</p>
    <p>Toronto Zoo</p>
    <p class="ital">September 2019</p>
    <p class="ital"><br />Please reach out to my on my LinkedIn for my email and phone contacts.<br /></p>
   </div>

 );
}

export default Resume;