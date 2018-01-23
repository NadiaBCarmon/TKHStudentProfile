import React, { Component } from 'react';
// import './App.css';
import TKHLogo from './TKHLogo.jpg';
import Josh from './josh.png';
import AddTask from './AddTask.js';


class Assignments extends Component{
  render(){
    var assignments = this.props.assignments.map((item) => <div className="card has-text-centered"><h1 className="card-header">{item}</h1><div className="card-content">random stuff</div><div className="card-footer"><button>Grade</button></div></div>)
    var extraCredit = this.props.extraCredit.map((item) => <div className="card has-text-centered"><h1 className="card-header">{item}</h1><div className="card-content">random stuff</div><div className="card-footer"><button>Grade</button></div></div>)
    return (
        <div className="columns container is-fluid">
          <div className="has-text-centered assignment column">
            <h1>Assignments</h1>
            {assignments}
          </div>
          <div className="has-text-centered assignment column">
            <h1>Extra Credit</h1>
            {extraCredit}
          </div>
          <div className="attendance has-text-centered column">
            <h1>Attendace</h1>
          </div>
        </div>
      )
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = { 
      assignments: true,
      profile: {
        img: Josh,
        name: "Joshua Moye"
      },
      course: {
        title: "React JS-17",
        description: "A career readiness program providing TKH alumni with full stack development skills, creation of a work portfolio, job matching and professional development"
      },
      assignments: ["Tyler McGinnis 1 - 01/01/18", "Address book - 01/03/18", "Tyler McGinnis 1 - 01/01/18", "Netflix Binge - 12/15/17"],
      extraCredit: ["Tech Convention at Town Hall","Wash My Car"]
    };
  }

  render() {
    return (
      <div className="StudentProfile">

        <div className="navbar is-primary" role="navigation">
          <div className="navbar-brand">
            <a href=""><img className="TKHLogo navbar-item image is-96x96" src={TKHLogo} alt=
            ""></img></a>
          <div className="Username navbar-item"><h1>@Username</h1></div>
          </div>
          
        </div>

        <div className="columns container is-fluid">
          <div className="column">
            <div className="Links">
               <div className="ProfileImage"><img src={this.state.profile.img} alt=""></img></div>
               <div className="FullName"><h1>{this.state.profile.name}</h1></div>
              
              <div className="ProfSites">
                  <div className="Linkedin"><center><a href="https://www.linkedin.com/in/joshua-moye-39179a144/">Linkedin</a></center></div>
                  <div><center><a href="https://github.com/joshuamoye">Github</a></center></div>
                  <div><center><a href="www.yahoo.com">Portfolio</a></center></div>
              </div>

             <div className="Contact"><center><button>Contact</button></center></div>
            </div>
          </div>


          <div className="Badges column">
            <h1> BADGES </h1>
          </div>
        </div>

        <center>
        <div className="CourseInfo">
        <center><p1><b>{this.state.course.title}</b></p1></center>
        <center><p1>{this.state.course.description}</p1></center>
        </div>
        </center>

         <br />

          <Assignments extraCredit={this.state.extraCredit} assignments={this.state.assignments} />

         <br/>

        
      

      </div>
    );
  }
}

export default App;
