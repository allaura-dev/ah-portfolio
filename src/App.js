
import React from "react"
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Socials, Navigation, Portfolio, Resume } from "./components";

function App() {
 return (
  <div className="App">
   <Router>
    
   <Navigation />

   <Switch>
    <Route path="/portfolio" exact component={() => <Portfolio/>} />
    <Route path="/resume" exact component={() => <Resume />} />
   </Switch>

   <Socials />
   
   </Router>
  </div>
 );
}
  
 export default App;