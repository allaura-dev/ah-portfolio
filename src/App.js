
import React from "react"
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Socials, Navigation, Portfolio, Resume } from "./components";

function App() {
    return (
      <div className="App">
        <Router>
          <Socials />
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Portfolio/>} />
            <Route path="/resume" exact component={() => <Resume />} />
          </Switch>
        </Router>
      </div>
    );
  }
  
 export default App;