import React from 'react';


class AddTask extends React.Component {
	constructor() {

		super();

		this.state= {

		};


	}//End of constructor()//

				render(){
					return(
				<form className="AddTask" onSubmit={this.handleSubmit}>

				<center>
			        <input type="text"></input>
			        <div className="Dropdown">
			        	<div className="DropButton"><button>▽</button></div>
			          		<div className="Dropdown-Content">
			          <a href="">Upcoming Assignments</a>
			          <a href="">Attendance</a>
			          <a href="">Past Due</a>
			          <a href="">Grade</a>
			          		</div>
			        </div>
			        <button>Submit</button>
        		</center>


				</form>
					);//End of return//
			
				}, 

				//Custom functions//
				handleSubmit: function()

				//End of render()//

};//End of AddTask App//

export default AddTask;