
import React from "react";
import './Socials.css';
import CodePen from './SocialIcons/codepen-48.png';
import GitHub from './SocialIcons/github-48.png';
import Gmail from './SocialIcons/gmail-48.png';
import LinkedIn from './SocialIcons/linkedin-48.png';
import EmailCopy from './EmailCopy.jsx';

function Socials() {
 return (
  <div id="socials">
   <div id="codepen">
    <a href="https://codepen.io/allaura-dev">
     <img src={ CodePen } alt="Main Logo" class="socialIcons" />
    </a>
   </div>
   <div id="github">
    <a href="https://github.com/allaura-dev">
     <img src={ GitHub } alt="Main Logo" class="socialIcons"/>
    </a>
   </div>
   <div id="gmail">
   <div>
    {
     document.queryCommandSupported('copy') &&
     <div>
      <button onClick={this.emailToClipboard}><img src={ Gmail } alt="Gmail" class="socialIcons" /></button> 
      {this.state.copySuccess}
     </div>
    }
    <form>
     <textarea ref={(textarea) => this.textArea = textarea} value='allauradev@gmail.com'/>
    </form>
   </div>
   </div>
   <div id="linkedin">
    <a href="">
     <img src={ LinkedIn } alt="Main Logo" class="socialIcons" />
    </a>
   </div>
  </div>
 );
}


export default Socials;