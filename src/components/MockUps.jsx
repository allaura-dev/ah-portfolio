
import React from "react";
import './MockUps.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//Mock-up Images
import Nixon from './MockUps/AllauraNixon.png';
import MobileMock from './MockUps/MobileMockUp.png';
import SiteMock from './MockUps/SiteMockUp.png';
import FinalMock from './MockUps/MockUp.png';
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
      <img src={ SiteMock } alt="Hanley Solid Solutions Mock Up" />
     </div>
     <div id="Mobile">
      <img src={ MobileMock } alt="Hanley Solid Solutions Mobile Mock Up" />
     </div>
     <div class="SiteMock">
      <img src={ ChaosChoice } alt="Chaos Store Mock Up" />
     </div>
     <div class="SiteMock">
      <img src={ Chaos1 } alt="Chaos Store Mock Up Alt 1" />
     </div>
     <div class="SiteMock">
      <img src={ Chaos2 } alt="Chaos Store Mock Up Alt 2" />
     </div>
     <div class="SiteMock">
      <img src={ Chaos3 } alt="Chaos Store Mock Up Alt 3" />
     </div>
    </Carousel>
   </div>
  );
 }
}

export default MockUps;