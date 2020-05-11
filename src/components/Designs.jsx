
import React from "react";
import './Designs.css';
import Logos from './Logos.jsx';
import MockUps from './MockUps.jsx'

class Designs extends React.Component {
 render() {
  return (
   <div id="Designs">
       <Logos />
       <MockUps />
   </div> 
  );
 }
}

export default Designs;