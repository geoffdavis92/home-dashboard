import React, { Component } from 'react';

class ToDoListItem extends Component {
	constructor() {
		super()
		this.state = {}
	}
	componentDidMount() {
		this.setState({
			title: this.tdlItem.innerText.replace(/delete$/g,''),
			id: this.tdlItem.id
		})
	}
	handleItemDelete(e) {
		this.props.handleItemDelete(this.state.title,this.state.id)
	}
	render() {
		return (
			<li className="collection-item" 
				id={`todo-list-item-${this.props.nth}`}
				ref={ref=>this.tdlItem=ref}
			>
				{this.props.itemTitle}
				<a className="secondary-content red-text" onClick={this.handleItemDelete.bind(this)}>
					<i className="material-icons">delete</i>
				</a>
			</li>
		)
	}
}

export default ToDoListItem
