import React, { Component } from 'react';
import ToDoList from './ToDoList.js';
import './css/components/App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			trash: {
				ToDoItems: []
			}
		}
	}
	handleTDLFormSubmission(newTodoItemValue) {
	}
	handleTDLItemDeletion(deletedItemTitle,deletedItemID) {
		console.log(deletedItemTitle,deletedItemID)
		this.setState({
			trash: {
				ToDoItems: [...this.state.trash.ToDoItems,{title:deletedItemTitle,id:deletedItemID}]
			}
		})
	}
    render() {
        return ( 
        	<main className="row" >
        		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            	<div className="col s4" >
            		<ToDoList
            			ToDoListFormSubmitCallback={this.handleTDLFormSubmission.bind(this)}
            			ToDoListItemDeleteCallback={this.handleTDLItemDeletion.bind(this)}
            		/>
            	</div>
            </main>
        );
    }
}

export default App;
