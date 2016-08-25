import React, { Component } from 'react';

class ToDoListForm extends Component {
	constructor(props,context) {
		super(props,context);
	}
	handleFormSubmit(e) {
		e.preventDefault();
		// console.log(this.newTodo)
		this.props.formSubmitCallback(this.newTodo.value,null);
		if (this.tdlForm !== null) {
			this.tdlForm.reset();
		}
	}
	render() {
		return (
			<form id="todo-list-form" onSubmit={this.handleFormSubmit.bind(this)} ref={ref=>this.tdlForm=ref}>
				<div className="input-field col s12">
		          <input id="todo_item" type="text" className="validate" placeholder="Item Title" ref={ref=>this.newTodo=ref}/>
		        </div>
			</form>
		)
	}
}

export default ToDoListForm