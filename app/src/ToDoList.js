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
			completed: []
		}
	}
	componentDidMount() {
		let _this = this;
		this.state.todoItems.forEach(function(el,i) {
			_this.props.ToDoListFormSubmitCallback(el.title,null)
		});
	}
	formSubmitCallback(newTodoItemTitle,newTodoItemID) {
		// console.log('ToDoList, formSubmitCallback',newTodoItemValue)
		var updatedTodoItems = this.state.todoItems;
		updatedTodoItems.push({title:newTodoItemTitle,id:newTodoItemID});
		this.setState({
			todoItems: updatedTodoItems
		})
		this.props.ToDoListFormSubmitCallback(newTodoItemTitle,newTodoItemID)
	}
	todoItemDeleteCallback(deletedItemTitle,deletedItemID) {
		let completedTodoItems = this.state.completed,
			todoItems = this.state.todoItems,
			completedItem = todoItems.filter(todo => todo.id === deletedItemID)[0];

		completedTodoItems.push({title:deletedItemTitle,id:deletedItemID});

		todoItems.splice(completedItem,1);

		this.setState({
			completed: completedTodoItems,
			todoItems: todoItems
		});

		// console.log(this.state.todoItems)

		if ( this.todoList.length > 0 ) {
			todoItemArr = [].slice.call(this.todoList.children);

			todoItemArr.forEach(function(el,i) {
				if ( el.id === deletedItemID ) {
					// console.log('deleting %s',deletedItemID);
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
				<li className="collection-item light-blue white-text">
					<h5>To Do</h5>
				</li>
				{ToDoItems}
				<li className="collection-item" id="todo-list-dummy"/>
				<li id="todo-list-form-wrapper"><ToDoListForm formSubmitCallback={this.formSubmitCallback.bind(this)}/></li>
			</ul>
		)
	}
}

export default ToDoList;