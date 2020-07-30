
import React from "react";
import './Logos.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//Logo Images
import AHDev from './Logos/AHDevStudio.png';
import AHDevO from './Logos/AHDevStudioCircle.png';
import AHSimple from './Logos/AHSimple.png';
import HSSO from './Logos/HanleySolidSolutions.png';
import HSSHex from './Logos/HanleySolidSolutions2.png';
import Strick from './Logos/Strick.png';
import HShield from './Logos/HShield.png';



class Logos extends React.Component {
 render() {
  return (
   <div id="OutterLogos">   
    <h2>Logos</h2>
    <Carousel>
     <div class="Logos">
      <img src={ AHDev } alt="AH ! logo" />
      <h4>AH! Dev Studio</h4>
     </div>
     <div class="Logos">
      <img src={ AHDevO } alt="AH O logo" />
      <h3>AH! Dev Studio</h3>
     </div>
     <div class="Logos">
      <img src={ AHSimple } alt="AH Simple logo" />
      <h3>AH! Dev Studio</h3>
     </div>
     <div class="Logos">
      <img src={ HSSO } alt="Hanley Solid Solutions O logo" />
      <h3>Hanley Solid Solutions</h3>
     </div>
     <div class="Logos">
      <img src={ HSSHex } alt="Hanley Solid Solutions Hexagon logo" />
      <h3>Hanley Solid Solutions</h3>
     </div>
     <div class="Logos">
      <img src={ Strick } alt="Strick Athletics logo" />
      <h3>Practice- Strick Athletics</h3>
      <h6>not a real company</h6>
     </div>
     <div class="Logos">
      <img src={ HShield } alt="Hudson's Shield logo" />
      <h3>Practice- Hudson's Shields</h3>
      <h6>not a real company</h6>
     </div>
    </Carousel>
   </div>
  );
 }
}

export default Logos;