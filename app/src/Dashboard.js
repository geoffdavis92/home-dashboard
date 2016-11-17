// React
import React, { Component } from 'react';
// Components
import ToDoList from './ToDoList.js';
import GroceryList from './GroceryList.js';
import Diagnostics from './Diagnostics.js';

class Dashboard extends Component {
	constructor() {
		super()
		this.state = {
			// trash: {
			// ToDoItems: [],
			todoItems: {
				title: 'ToDoItems',
				completed: [],
				open: []
			},
			groceryListItems: {}
			// }
		}
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
	}
	handleTDLItemDeletion(completedItemTitle,completedItemID) {
		console.log(completedItemTitle,completedItemID)
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
	}
	handleGroceryListUpdate(updatedGroceryListState) {
		this.setState({
			groceryListItems: {
				title: 'GroceryList',
				completed: updatedGroceryListState.completedGroceryItems,
				open: updatedGroceryListState.openGroceryItems
			}
		});
	}
	handleGroceryListSave() {
		console.log('Save GroceryList')
	}
    render() {
        return ( 
        	<main className="row" >
        		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        		<div className="col s12">
	            	<section className="row">
	            		<div className="col s12">
	            			<h3 className="text-center">{'Homebase'}</h3>
	            		</div>
	            	</section>
	            	<section className="row">
		            	<div className="col s12 m6 l4">
			            	<div className="row">
				            	<div id="todo-list-wrapper" className="col s12">
				            		<ToDoList
				            			ToDoListFormSubmitCallback={this.handleTDLFormSubmission.bind(this)}
				            			ToDoListItemDeleteCallback={this.handleTDLItemDeletion.bind(this)}
				            		/>
				            	</div>
			            	</div>
			            	<div className="row">
			            		<div id="grocery-list-wrapper" className="col s12">
									<GroceryList 
										GroceryListUpdateCallback={this.handleGroceryListUpdate.bind(this)}
										saveGroceryListCallback={this.handleGroceryListSave.bind(this)}
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
				</div>
            </main>
        );
    }
}

export default Dashboard;
