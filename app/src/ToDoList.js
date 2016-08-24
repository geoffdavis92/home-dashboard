import React, { Component } from 'react';
import ToDoListForm from './ToDoList/ToDoListForm';
import ToDoListItem from './ToDoList/ToDoListItem';
import './css/components/ToDoList.css';

const sampleData = [
	{
		title: 'Get milk'
	},
	{
		title: 'Pick up Timmy'
	},
	{
		title: 'Register for soccer'
	}
]

class ToDoList extends Component {
	constructor() {
		super()
		this.state = {
			todoItems: sampleData,
			deleted: []
		}
	}
	formSubmitCallback(newTodoItemValue) {
		// console.log('ToDoList, formSubmitCallback',newTodoItemValue)
		var updatedTodoItems = this.state.todoItems;
		updatedTodoItems.push({title:newTodoItemValue});
		this.setState({
			todoItems: updatedTodoItems
		})
		this.props.ToDoListFormSubmitCallback(newTodoItemValue)
	}
	todoItemDeleteCallback(deletedItemID) {
		let deletedTodoItems = this.state.deleted,
			todoItems = this.state.todoItems,
			todoItemArr = [],
			deletedItemTitle,
			deletedItem;

		deletedTodoItems.push({id:deletedItemID});
		deletedItem = todoItems.forEach(function(el,i,arr) {
			if ( el.id == deletedItemID ) {
				deletedItemTitle = el;
				return i;
			}
		})

		todoItems.splice(deletedItem,1);

		this.setState({
			deleted: deletedTodoItems,
			todoItems: todoItems
		});

		console.log(this.state.todoItems)

		if ( this.todoList.length > 0 ) {
			todoItemArr = [].slice.call(this.todoList.children);

			todoItemArr.forEach(function(el,i) {
				if ( el.id == deletedItemID ) {
					console.log('deleting %s',deletedItemID);
					el.remove();
				} 
			});
		}

		this.props.ToDoListItemDeleteCallback({title:deletedItemTitle,id:deletedItemID})

	}
	render() {
		const _this = this, 
			  ToDoItems = this.state.todoItems.map(function(el,i,arr) {
			  	return (
					<ToDoListItem
						itemTitle={el.title}
						key={i}
						nth={i}
						handleItemDelete={_this.todoItemDeleteCallback.bind(_this)}
					/>
				)
			  });
		return (
			<ul id="todo-list" className="collection" ref={ref=>this.todoList=ref}>
				<li className="collection-item light-blue white-text"><h5>To Do</h5></li>
				{ToDoItems}
				<li className="collection-item" id="todo-list-dummy"/>
				<li id="todo-list-form-wrapper"><ToDoListForm formSubmitCallback={this.formSubmitCallback.bind(this)}/></li>
			</ul>
		)
	}
}

export default ToDoList;