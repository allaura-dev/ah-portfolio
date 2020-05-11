
import React from "react";
import './Navigation.css';
import { Link, withRouter } from "react-router-dom";
import logo from './Logos/AHDevStudio.png';

// imports logo???


function Navigation() {
 return (
  <div class="NavBarFull">
   <div id="NavLogo">
    <img src={ logo } alt="Main Logo" id="Logo" />
   </div>
   <div id="myNav">
    <nav>
     <ul id="navList">
      <li id="leftNav">
        <Link to="/portfolio" class="NavLinks">Portfolio</Link>
      </li>
      <li id="rightNav">
        <Link to="/resume" class="NavLinks">Resume</Link>
      </li>
     </ul>      
    </nav>
   </div>
  </div>
 );
}

export default withRouter(Navigation);