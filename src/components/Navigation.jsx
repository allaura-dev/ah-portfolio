
import React from "react";
import './Navigation.css';
import { Link, withRouter } from "react-router-dom";
// imports logo???


function Navigation() {
 return (
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
 );
}

export default withRouter(Navigation);