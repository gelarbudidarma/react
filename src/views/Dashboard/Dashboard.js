import React, { Component } from 'react';

class Dashboard extends Component {



 constructor(){
		 super()
		 this.state = {
			 submits: ['']
		 }
	 }

addSubmit(){
	let currentSubmit = this.state.submits
	currentSubmit.push(this.state.currentSubmittName)
	this.setState({
		submits: currentSubmit
	})
}	

  render() {
    return (
      <div className="animated fadeIn">
       <span> { this.state.currentSubmittName } </span><br/>
			<input type="text" 
			name="submit_name"
			onChange={(e) =>  this.setState({ currentSubmittName: e.target.value }) }/>
			<br/>
			<input
			type="submit" 
			value="Add Submit"
			onClick={ () => this.addSubmit()}
			/>
			<h2>Test Submit</h2>
			{ this.state.submits.map
			( sub => {return <h3> { sub } </h3>})
			}
			
      </div>
    )
  }
}

export default Dashboard;
