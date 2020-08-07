
import React from "react";
import './Resume.css';

function Resume() {
 return (
  
   <div id="resumeDiv">
    <h1>OBJECTIVE</h1>
    <p>Pursuing a Front End and/or Back Web Developer Position using my skills I have learned either on my own or through my 14 month course to help continue the success of the company.</p>
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
     <div id="SkillsList"> {/* goes left then right stack by offsetting */}
      <li>-HTML</li>
      <li>-CSS</li>
      <li>-Grunt</li>
      <li>-React</li>
      <li>-Bootstrap</li>
      <li>-React Native</li>
      <li>-Razor ASP.net</li>
      <li>-Expo Client and Snack</li>
      <li>-OOP</li>
      <li>-Android Studio</li>
      <li>-JavaScript</li>
      <li>-Android App Development</li>
      <li>-Java</li>
      <li>-SQL</li>
      <li>-C#</li>
      <li>-MySQL</li>
      <li>-C++</li>
      <li>-SQLite</li>
      <li>-GitHub</li>
      <li>-Illustrator</li>
      <li>-git</li>
      <li>-Photoshop</li>
      <li>-APIs</li>
     </div>
     </ul>
    </div>
    <h1>EDUCATION</h1>
    <h3>Enterprise Web and Mobile Development + Internship</h3>
    <p> triOS College Business Technology Healthcare</p>
    <p class="ital">Currently attending</p>
    <p class="ital">College Diploma</p>
    <h1>VOLUNTEER</h1>
    <h3>PAL(Peer Assisted Learning) Tutor</h3>
        <p>triOS College Business Technology Healthcare
    </p>
    <p class="ital">February 2020 – April 2021</p><br />
    <h3>Student Ambassador</h3>
     <p>triOS College Business Technology Healthcare
    </p>
    <p class="ital">March 2020 – April 2021</p><br />
    <h3>Clean Up Crew</h3>
    <p>Toronto Zoo</p>
    <p class="ital">September 2019</p><br />
    <p class="ital"><br />Please reach out to me on my LinkedIn for my email and phone contacts.<br /></p>
   </div>

 );
}

export default Resume;