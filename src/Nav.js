
import React from "react"
import './Nav.css';
// imports logo???
import logo from './AHDevStudio.png';


class Nav extends React.Component {
    render() {
      return (
       <div>
        <div>
         <a href="index.html" alt="Portfolio">Portfolio</a>
        </div>
        <div>
         <img src={logo}/>
        </div>
        <div>
         <a href="resume.html" alt="Resume">Resume</a>
        </div>
       </div>
      );
    }
  }

export default Nav;