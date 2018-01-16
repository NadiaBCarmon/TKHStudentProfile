import React, { Component } from 'react';
import './App.css';
import TKHLogo from './TKHLogo.jpg';
import Josh from './josh.png';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="StudentProfile">

        <div className="User-Header">
          <a href=""><img className="TKHLogo" src={TKHLogo}></img></a>
          <div className="Username"><h1>@Username</h1></div>
        </div>


        <div className="Links">
           <div className="ProfileImage"><img src={Josh}></img></div>
           <div className="FullName"><h1>Joshua Moye</h1></div>
          
          <div className="ProfSites">
              <div className="Linkedin"><center><a href="https://www.linkedin.com/in/joshua-moye-39179a144/">Linkedin</a></center></div>
              <div><center><a href="https://github.com/joshuamoye">Github</a></center></div>
              <div><center><a href="www.yahoo.com">Portfolio</a></center></div>
          </div>

         <div className="Contact"><center><button>Contact</button></center></div>
        </div>


        <div className="Badges">
        </div>

        <center>
        <div className="CourseTitle">
        <center><p1><b>React JS-17</b></p1></center>
        <center><p1>A career readiness program providing TKH alumni with full stack development skills, creation of a work portfolio, job matching and professional development</p1></center>
        </div>
        </center>

        <br />

        <div className="PastDue">
        <center><p1>Put this.state() information</p1></center>
        <center><p1>Netflix Binge - 12/15/17</p1></center>
        </div>

        <div className="Upcoming">
        <center><p1>Put this.state()</p1></center>
        <center><p1>Tyler McGinnis 1 - 01/01/18</p1></center>
        <center><p1>Address book - 01/03/18</p1></center>
        </div>

          <br />


        <div className="Attendance">
        <center><p1>Put this.state()</p1></center>
        <center><p1>6 Latenesses</p1></center>
        <center><p1>1 Unexcused Absence</p1></center>
        </div>

        <div className="ExtraCredit">
        <center><p1>Put this.state()</p1></center>
        <center><p1>Tech Convention at Town Hall</p1></center>
        <center><p1>Wash My Car</p1></center>
        </div>

          <br />

          <div className="AddGrade1">
        <center><p1>Put this.state()</p1></center>
        </div>

        <div className="FirstReact">
        <center><p1>First React Assignment</p1></center>
        </div>

         <br />

        <div className="AddGrade2">
        <center><p1>Put this.state()</p1></center>
        <center><p1>   </p1></center>
        </div>

        <div className="SecondReact">
        <center><p1>Second React Assignment</p1></center>
        </div>

        <br/>

        
      

      </div>
    );
  }
}

export default App;
