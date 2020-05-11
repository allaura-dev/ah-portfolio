
import React from "react";
import './Projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Projects extends React.Component {
 render() {
  return (
   <div id="ProjectsDiv">
   <Carousel>
    <div class="Project">
     <div class="ProjectBlurb">
      <h2 class="noHover">Escape From Orc Grotta</h2>
      <p>In app game created using Java.</p>
     </div>
     <div class="ProjectVideos">
      <h2>Video Here</h2>
     </div>
    </div>
    <div class="Project">
     <div class="ProjectBlurb">
      <h2>Pet Walking Website</h2>
      <p>A website with SQL database for storing customer and employee information as well as appointment management.</p>
     </div>
     <div class="ProjectVideos">
      <h2>Video Coming Soon</h2>
     </div>
    </div>
    <div class="Project">
     <div class="ProjectBlurb">
      <h2>Movie Maven</h2>
      <p>A website designed using Razor and APIs to search actors, actress and movies. On load is shows movies in english with release dates in the next three months.</p>
     </div>
     <div class="ProjectVideos">
      <h2>Video Coming Soon</h2>
     </div>
    </div>
    <div class="Project">
     <div class="ProjectBlurb">
      <h2>Lord's Mobile Website</h2>
      <p>A website created to help my guild with different aspects of the Lord's Mobile mobile phone game done in purely html and CSS.</p>
     </div>
     <div class="ProjectVideos">
      <h2>Video Coming Soon</h2>
     </div>
    </div>
    <div class="Project">
     <div class="ProjectBlurb">
      <h2>Lord's Mobile Website version 2</h2>
      <p>An update to the previous site using Reactjs and an API created by myself in Firebase.</p>
     </div>
     <div class="ProjectVideos">
      <h2>Video Coming Soon</h2>
     </div>
    </div>
   </Carousel>
   </div>
  );
 }
}

export default Projects;