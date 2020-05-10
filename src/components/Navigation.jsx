
import React from "react";
import './Navigation.css';
import { Link, withRouter } from "react-router-dom";
// imports logo???


function Navigation() {
 return (
  <div id="myNav">
   <nav>
    <ul class="navList">
     <li class="myNavLinks">
       <Link to="/portfolio">Portfolio</Link>
     </li>
     <li class="myNavLinks">
       <Link to="/resume">Resume</Link>
     </li>
    </ul>      
   </nav>
  </div>
 );
}

export default withRouter(Navigation);