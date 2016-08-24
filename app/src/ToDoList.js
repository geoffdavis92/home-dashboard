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
			data: sampleData
		}
	}
	formSubmitCallback(newTodoItemValue) {
		console.log('ToDoList, formSubmitCallback',newTodoItemValue)
		var newDataState = this.state.data;
		newDataState.push({title:newTodoItemValue});
		this.setState({
			data: newDataState
		})
		this.props.ToDoListFormSubmitCallback(newTodoItemValue)
	}
	render() {
		const ToDoItems = this.state.data.map(function(el,i,arr) {
			return (
				<ToDoListItem itemTitle={el.title} key={i} nth={i}></ToDoListItem>
			)
		})
		return (
			<ul id="todo-list" className="collection">
				{ToDoItems}
				<li id="todo-list-form-wrapper"><ToDoListForm formSubmitCallback={this.formSubmitCallback.bind(this)}/></li>
			</ul>
		)
	}
}

export default ToDoList;