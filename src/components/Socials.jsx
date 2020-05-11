
import React from "react";
import './Socials.css';
import CodePen from './SocialIcons/codepen-48.png';
import GitHub from './SocialIcons/github-48.png';
import Gmail from './SocialIcons/gmail-48.png';
import LinkedIn from './SocialIcons/linkedin-48.png';

function Socials() {
 return (
  <div id="socials">
   <div id="codepen">
    <a href="https://codepen.io/allaura-dev">
     <img src={ CodePen } alt="Main Logo" id="Logo" />
    </a>
   </div>
   <div id="github">
    <a href="https://github.com/allaura-dev">
     <img src={ GitHub } alt="Main Logo" id="Logo" />
    </a>
   </div>
   <div id="gmail">
     <img src={ Gmail } alt="Main Logo" id="Logo" onclick="GMailPop()"/>
   </div>
   <div id="linkedin">
    <a href="">
     <img src={ LinkedIn } alt="Main Logo" id="Logo" />
    </a>
   </div>
  </div>
 );
}

function GMailPop() {
    alert("alullaura")
}

export default Socials;