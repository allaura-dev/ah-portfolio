
import React from "react"
import './Nav.css';
// imports logo???
import logo from './AHDevStudio.png';


class Nav extends React.Component {
    render() {
      return (
       <div>
        <div>
         <link href="index.html" alt="Portfolio">Portfolio</link>
        </div>
        <div>
         <img src={logo}/>
        </div>
        <div>
         <link href="resume.html" alt="Resume">Resume</link>
        </div>
       </div>
      );
    }
  }

export default Nav;