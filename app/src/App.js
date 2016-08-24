// React
import React, { Component } from 'react';
// Components
import ToDoList from './ToDoList.js';
import GroceryList from './GroceryList.js';
import Diagnostics from './Diagnostics.js';
// CSS
import './css/components/App.css';

class App extends Component {
	/* REMOVE */
	constructor() {
		super();
		this.state = {
			groceryListItems: {}
		}
	}
	/* --REMOVE-- */
	handleTDLFormSubmission(newTodoItemItem) {
		// console.log('App, handleTDLFormSubmission',newTodoItemItem);
	}
	handleGroceryListUpdate(newGroceryListState) {
		this.setState({
			groceryListItems: {
				title: 'GroceryList',
				completed: newGroceryListState.completedGroceryItems,
				open: newGroceryListState.openGroceryItems
			}
		});
	}
    render() {
        return ( 
        	<main className="row" >
        		<div className="col s12">
	            	<section className="row">
	            		<div className="col s12">
	            			<h3 className="text-center">{'Homebase'}</h3>
	            		</div>
	            	</section>
	            	<section className="row">
		            	<div className="col s4">
			            	<div className="row">
				            	<div id="todo-list-wrapper" className="col s12">
				            		<ToDoList ToDoListFormSubmitCallback={this.handleTDLFormSubmission.bind(this)}/>
				            	</div>
			            	</div>
			            	<div className="row">
			            		<div id="grocery-list-wrapper" className="col s12">
									<GroceryList GroceryListUpdateCallback={this.handleGroceryListUpdate.bind(this)}/>
								</div>
				            </div>
						</div>
						<div className="col s8">
							<div className="row">
								<div id="diagnostics-wrapper" className="col s12">
									<Diagnostics categories={[this.state.groceryListItems]} />
								</div>
							</div>
						</div>
					</section>
				</div>
            </main>
        );
    }
}

export default App;
