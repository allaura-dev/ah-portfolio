
import React from "react";
import './Navigation.css';
import { Link, withRouter } from "react-router-dom";
import logo from './Logos/AHDevStudio.png';

// imports logo???


function Navigation() {
 return (
  <div class="NavBarFull">
   <div id="myNav">
    <nav>
     <ul id="navList">
     <li id="resumeNav">
        <Link to="/resume" class="NavLinks">Resume</Link>
      </li>
      <li id="logoNav">
        <Link to="/portfolio"><img src={ logo } alt="Main Logo" id="Logo"/></Link>
      </li>

     </ul>      
    </nav>
   </div>
  </div>
 );
}

export default withRouter(Navigation);