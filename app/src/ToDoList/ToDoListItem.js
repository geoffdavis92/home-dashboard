import React, { Component } from 'react';

class ToDoListItem extends Component {
	render() {
		return (
			<li className="collection-item" id={`todo-list-item-${this.props.nth}`}>{this.props.itemTitle}</li>
		)
	}
}

export default ToDoListItem
