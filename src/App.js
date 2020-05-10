
import React from "react"
import ReactDOM from "react-dom"
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Portfolio , Resume, Projects, Designs} from "./components";

function App() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={() => <Portfolio/>} />
            <Route path="/resume" exact component={() => <Resume />} />
          </Switch>
        </Router>
      </div>
    );
  }
  
  export default App;