
import React from "react";
import './MockUps.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//Mock-up Images
import Nixon from './MockUps/AllauraNixon.png';
import MobileMock from './MockUps/MobileMockUp.png';
import SiteMock from './MockUps/SiteMockUp.png';
import FinalMock from './MockUps/MockUp.png';




class MockUps extends React.Component {
 render() {
  return (
   <div id="OutterMockUps">
    <h2>Mock Ups</h2>  
    <Carousel>
     <div class="SiteMock">
      <img src={ Nixon } alt="Nixon Mock Up" />
     </div>
     <div id="Mobile">
      <img src={ MobileMock } alt="Hanley Solid Solutions Mobile Mock Up" />
     </div>
     <div class="SiteMock">
      <img src={ SiteMock } alt="Hanley Solid Solutions Mock Up" />
     </div>
     <div class="SiteMock">
      <img src={ FinalMock } alt="Website Mock Up" />
     </div>
    </Carousel>
   </div>
  );
 }
}

export default MockUps;