
import React from "react";
import './MockUps.css';
import './Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//Mock-up Images
import MobileMock from './MockUps/MobileMockUp.png';
import SiteMock from './MockUps/SiteMockUp.png';
import ChaosChoice from './MockUps/ChaosChoice.png';
import Chaos1 from './MockUps/Chaos1.png';
import Chaos2 from './MockUps/Chaos2.png';
import Chaos3 from './MockUps/Chaos3.png';




class MockUps extends React.Component {
 render() {
  return (
   <div id="OutterMockUps">
    <h2>Mock Ups</h2>  
    <Carousel>     
    <div class="SiteMock">
      <img id="borderIt" src={ SiteMock } alt="Hanley Solid Solutions Mock Up" />
      <h4>Hanley Solid Solutions Web Mock Up</h4>
     </div>
     <div id="Mobile">
      <img id="borderIt" src={ MobileMock } alt="Hanley Solid Solutions Mobile Mock Up" />
      <h4>Hanley Solid Solutions Mobile Mock Up</h4>
     </div>
     <div class="SiteMock">
      <img id="borderIt" src={ ChaosChoice } alt="Chaos Store Mock Up" />
      <h4>Chaos Store Mock Up</h4>
     </div>
     <div class="SiteMock">
      <img id="borderIt" src={ Chaos1 } alt="Chaos Store Mock Up Alt 1" />
      <h4>Chaos Store Mock Up Alternative Option 1</h4>
     </div>
     <div class="SiteMock">
      <img id="borderIt" src={ Chaos2 } alt="Chaos Store Mock Up Alt 2" />
      <h4>Chaos Store Mock Up Alternative Option 3</h4>
     </div>
     <div class="SiteMock">
      <img id="borderIt" src={ Chaos3 } alt="Chaos Store Mock Up Alt 3" />
      <h4>Chaos Store Mock Up Alternative Option 3</h4>
     </div>
    </Carousel>
   </div>
  );
 }
}

export default MockUps;