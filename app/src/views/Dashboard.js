// Libraries
import React, { Component } from 'react';
// Components
import ToDoList from '../ToDoList.js';
import GroceryList from '../GroceryList.js';
import Diagnostics from '../Diagnostics.js';
// Utilities
import get from '../utilities/api/get'

class Dashboard extends Component {
	constructor() {
		super()
		this.handleTDLFormSubmission = this.handleTDLFormSubmission.bind(this);
		this.handleTDLItemDeletion = this.handleTDLItemDeletion.bind(this);
		this.handleGroceryListUpdate = this.handleGroceryListUpdate.bind(this);
		this.handleGroceryListSave = this.handleGroceryListSave.bind(this);
		this.state = {
			// trash: {
			// ToDoItems: [],
			todoItems: {
				title: 'ToDoItems',
				completed: [],
				open: []
			},
			groceryListItems: {
				title: 'GroceryListItems',
				completed: [],
				open: []
			}
			// }
		}
	}
	componentDidMount() {
		this.props.route.dashboardUpdateCallback(this.state)
	}
	handleTDLFormSubmission(newTodoItemTitle,newTodoItemID) {
		let updatedToDoItemCompleted = this.state.todoItems.completed,
			updatedToDoItemOpen = this.state.todoItems.open;
		updatedToDoItemOpen.push({
			title: newTodoItemTitle,
			id: newTodoItemID
		});
		this.setState({
			todoItems: {
				title: 'ToDoList',
				completed: updatedToDoItemCompleted,
				open: updatedToDoItemOpen
			}
		});
		this.props.route.dashboardUpdateCallback(this.state)
	}
	handleTDLItemDeletion(completedItemTitle,completedItemID) {
		// console.log(completedItemTitle,completedItemID)
		let updatedToDoItemCompleted = this.state.todoItems.completed,
			updatedToDoItemOpen = this.state.todoItems.open,
			completedItem = updatedToDoItemOpen.filter(todo => todo.id === completedItemID)[0];

		updatedToDoItemCompleted.push({title:completedItemTitle,id:completedItemID})
		updatedToDoItemOpen.splice(completedItem,1)

		this.setState({
			todoItems: {
				title: 'ToDoList',
				completed: updatedToDoItemCompleted,
				open: updatedToDoItemOpen
			}
			// trash: {
			// 	ToDoItems: [...this.state.trash.ToDoItems,{title:deletedItemTitle,id:deletedItemID}]
			// }
		})
		this.props.route.dashboardUpdateCallback(this.state)
	}
	handleGroceryListUpdate(updatedGroceryListState) {
		const { completedGroceryItems, openGroceryItems } = updatedGroceryListState;
		this.setState({
			groceryListItems: {
				title: 'GroceryList',
				completed: completedGroceryItems,
				open: openGroceryItems
			}
		});
		this.props.route.dashboardUpdateCallback(this.state)
	}
	handleGroceryListSave() {
		console.log('Save GroceryList')
	}
    render() {
    	const { groceries } = this.props.route.appData
        return ( 
        	<section id='view_dashboard' className="row">
            	<div className="col s12 m6 l4">
	            	<div className="row">
		            	<div id="todo-list-wrapper" className="col s12">
		            		<ToDoList
		            			ToDoListFormSubmitCallback={this.handleTDLFormSubmission}
		            			ToDoListItemDeleteCallback={this.handleTDLItemDeletion}
		            		/>
		            	</div>
	            	</div>
	            	<div className="row">
	            		<div id="grocery-list-wrapper" className="col s12">
							<GroceryList 
								data={groceries}
								GroceryListUpdateCallback={this.handleGroceryListUpdate}
								saveGroceryListCallback={this.handleGroceryListSave}
							/>
						</div>
		            </div>
				</div>
				<div className="col s12 m6 l8">
					<div className="row">
						<div id="diagnostics-wrapper" className="col s12">
							<Diagnostics 
								categories={[this.state.groceryListItems, this.state.todoItems]}
							/>
						</div>
					</div>
				</div>
			</section>
        );
    }
}

export default Dashboard;
