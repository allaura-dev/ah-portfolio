
import React from "react";
import './Socials.css';
import CodePen from './SocialIcons/codepen-48.png';
import GitHub from './SocialIcons/github-48.png';
import LinkedIn from './SocialIcons/linkedin-48.png';


function Socials() {
 return (
  <div id="socials">
   <div id="Icons">
    <a href="https://codepen.io/allaura-dev">
     <img src={ CodePen } alt="Main Logo" class="socialIcons" />
    </a>
    <a href="https://github.com/allaura-dev" alt>
     <img src={ GitHub } alt="Main Logo" class="socialIcons"/>
    </a>
    <a href="https://www.linkedin.com/in/allaurahanley" alt="Allaura Hanley On LinkedIn">
     <img src={ LinkedIn } alt="Main Logo" class="socialIcons" />
    </a>
    </div>
   </div>
 );
}


export default Socials;