import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./W3.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import Users from "./users";
import Notfound from "./notfound";


const routing = (

  
  
  <Router>
  
  
    <div className="">
      <React.Fragment>
    
      <h1 className="w3-bar-item w3-black w3-center">Irene Kilonzo</h1>
      <p className="w3-center w3-text-pink">Front-end developer</p>
      
      <ul className="w3-bar w3-grey">
        <li className="w3-bar-item w3-left w3-button w3-pink">
          <NavLink exact activeClassName="active" to="/">
            <h6 className="w3-text-black">About me</h6>
          </NavLink>
        </li>
        <li className="w3-bar-item w3-left w3-button w3-black">
          <NavLink activeClassName="active" to="/users">
            <h6 className="w3-text-white">Portfolio</h6>
          </NavLink>
        </li>
        
      </ul>
      
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        
        <Route component={Notfound} />
      </Switch>
      </React.Fragment>
      </div>
      
       
      </Router>

      
    


    
  
  
  
);

ReactDOM.render(routing, document.getElementById("root"));
