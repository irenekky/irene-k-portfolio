import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./W3.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";


const About = lazy(() => import('./App'));
const Home = lazy(() => import('./users'));
const About = lazy(() => import('./notfound'));



const routing = (

  
  
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
    {/*...*/}
    
  
  
    <div className="App-header">
      <React.Fragment>
    <img className="w3-logo w3-left" src="irenelogo.png" alt="img"></img>
      
      
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
      
       </Suspense>
      </Router>

      
    


    
  
  
  
);

ReactDOM.render(routing, document.getElementById("root"));
