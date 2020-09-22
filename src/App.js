  
import React from 'react';
import './App.css';
import './W3.css';
class About extends React.Component {
  render() {
    return (
      <div className="w3-container ">
        <React.Fragment>
       <h1 className="w3-center">
         About me</h1>
         <img className="w3-image w3-center" src="designer_.svg" alt="img"></img>

        <h3 className="w3-center">Irene Kilonzo</h3>
              <h5 className="w3-center">Front-end developer</h5>

<p className="w3-text w3-center">I am a Creative, visionary and responsible frontend developer with 5+ years’ experience in the IT domain. Self-taught and extremely knowledgeable of various web development technologies. Fast learner and flexible.
</p>
<h3 className="w3-text w3-center">TECHNICAL SKILLS</h3>
<img className="w3-image w3-center" src="code.svg" alt="img"></img>

<ul className="w3-ul">
  <li className="w3-list">
  Create-react-app, R.T.L, jest, custom react set-ups, react-redux, github, API intergration</li>





<li className="w3-list w3-center">Strong experience in working with w3-CSS Backgrounds, w3-CSS Layouts, w3-CSS Positioning, w3-CSS Animations, w3-CSS Text, w3-CSS Borders, w3-CSS Margin, w3-CSS Padding, w3-CSS Table and Pseudo Classes.
</li>

 <li className="w3-list w3-center">Experience on working with CSS Backgrounds, CSS Layouts, CSS Positioning, CSS Animations, CSS Text, CSS Borders, CSS Margin, CSS Padding, CSS Table and Pseudo Classes.</li>

<li>Expertise in Client Side designing and validations using HTML, JSX and Java Script.</li>

<li className="w3-list w3-center">Thorough researcher and learner.</li>
</ul>

<h3 className="w3-center">EXPERIENCE</h3>
<img className="w3-image w3-center" src="coworking.svg" alt="img"></img>

<ul className="w3-ul">
  <li className="w3-list">2018-present:<b>Front-end development</b> 


Using react.JS, JavaScript, HTML, and CSS for developing single page application and achieving two-way data binding between HTML and JavaScript objects.

Using JavaScript, Dom manipulation and JavaScript event to generate the data result in UI.

API integrations and implementation in the front end using axios and fetch</li>
      Using React-Router to turn application into Single Page Application


<li>2013-2018:<b> Muthusi creatives</b>

Helped build client websites with wordpress</li>
</ul>





<h3 className="w3-center">EDUCATION</h3>

     I.T history, Html, css, w3css, bootstrap, javascript, jsx, React, react-redux, github: Self taught

     <h3>Contacts</h3>

     mobile : 254 10 226 1491
     Email : kilonzohosting@gmail.com
   
</React.Fragment>




      </div>
    );
  }
}

export default About;
