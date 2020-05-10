
import React from "react";
import './Nav.css';
import { Link, withRouter } from "react-router-dom";
// imports logo???
import logo from './AHDevStudio.png';

function Navigation() {
 return (
  <div className="myNav">
   <nav>
     <ul class="navList">
      <li class="myNavLinks">
       <Link to="/"> Portfolio </Link>
      </li>
      <li class="myNavLinks">
       <Link to="/resume"> Resume </Link>
      </li>
     </ul>      
    </nav>
  </div>
  );
}

export default withRouter(Navigation);