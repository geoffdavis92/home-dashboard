import React, { Component } from 'react';
import ToDoList from './ToDoList.js';
import './css/components/App.css';

class App extends Component {
	handleTDLFormSubmission(newTodoItemValue) {
		console.log('App, handleTDLFormSubmission',newTodoItemValue)
	}
    render() {
        return ( 
        	<main className="row" >
            	<div className="col s4" >
            		<ToDoList ToDoListFormSubmitCallback={this.handleTDLFormSubmission.bind(this)}/>
            	</div>
            </main>
        );
    }
}

export default App;
