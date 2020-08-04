
import React from "react";
import './Carousel.css';
import './Logos.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//Logo Images
import AHDev from './Logos/AHDevStudio.png';
import AHDevO from './Logos/AHDevStudioCircle.png';
import AHSimple from './Logos/AHSimple.png';
import HSSO from './Logos/HanleySolidSolutions.png';
import HSSHex from './Logos/HanleySolidSolutions2.png';
import MovieMaven from './Logos/MovieMaven.png';
import BillGuru from './Logos/BillGuru.png';
import SkellyFly from './Logos/SkellyFly.png';
import SkellyFlyO from './Logos/SkellyFlyCircle.png';



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
      <h4>AH! Dev Studio</h4>
     </div>
     <div class="Logos">
      <img src={ AHSimple } alt="AH Simple logo" />
      <h4>AH! Dev Studio</h4>
     </div>
     <div class="Logos">
      <img src={ HSSO } alt="Hanley Solid Solutions O logo" />
      <h4>Hanley Solid Solutions</h4>
     </div>
     <div class="Logos">
      <img src={ HSSHex } alt="Hanley Solid Solutions Hexagon logo" />
      <h4>Hanley Solid Solutions</h4>
     </div>
     <div class="Logos">
      <img src={ MovieMaven } alt="Movie Maven Logo" />
      <h4>Logo for Movie Maven Site</h4>
     </div>
     <div class="Logos">
      <img id="borderIt" src={ BillGuru } alt="Bill Guru logo" />
      <h4>Logo for Bill Guru project</h4>
     </div>
     <div class="Logos">
      <img src={ SkellyFly } alt="Skelly Fly " />
      <h4>Skelly Fly for Chaos Shop</h4>
     </div>
     <div class="Logos">
      <img src={ SkellyFlyO } alt="Skelly Fly in Cirlcle" />
      <h4>Skelly Fly for Chaos Shop Alt Version</h4>
     </div>
    </Carousel>
   </div>
  );
 }
}

export default Logos;