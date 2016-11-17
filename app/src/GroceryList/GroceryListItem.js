import React, { Component } from 'react';

class GroceryListItem extends Component {
	constructor() {
		super();
		this.state = {
			id: '',
			title: '',
			count: '',
			unit: '',
			isOpen: ''
		};
	}
	componentDidMount() {
		this.setState({
			id: this.props.id,
			title: this.props.content.title,
			count: this.props.content.count,
			unit: this.props.content.unit,
			priority: this.props.content.priority,
			isOpen: true
		});
	}
	handleCheckboxChange(e) {
		const changedListItem = e.target.parentNode.parentNode;
		console.log(changedListItem,this.Checkbox.checked)
		// if ( this.Checkbox !== null && this.CollectionItem !== null) {
		// 	if ( this.Checkbox.checked ) {
		// 		e.target.parentNode.parentNode.setAttribute('class',`${e.target.parentNode.parentNode.getAttribute('class')} completed`);
		// 	} else {
		// 		e.target.parentNode.parentNode.setAttribute('class',`${e.target.parentNode.parentNode.getAttribute('class').replace(/\scompleted/g,'')}`);
		// 	}
		// 	this.setState({
		// 		isOpen: !this.Checkbox.checked
		// 	});
		// 	e.target.checked = false;
		this.props.checkboxChangeCallback(!this.Checkbox.checked,this.state.id);
		// } else {
		// 	console.error('this.Checkbox or this.CollectionItem are not defined.')
		// }
	}
	render() {
		// console.log(this.props)
		return (
			<li id={this.props.id} className="collection-item" ref={ref=>this.CollectionItem=ref}>
				{`${this.props.content.title} – ${this.props.content.count} ${this.props.content.unit}`}
				<span className="secondary-content">
					<input
						name={`is-complete-${this.props.id}`}
						type="checkbox"
						id={`is-complete-${this.props.id}`}
						onChange={this.handleCheckboxChange.bind(this)}
						ref={ref=>this.Checkbox=ref}
					/>
					<label htmlFor={`is-complete-${this.props.id}`}>{' '}</label>
				</span>
			</li>
		)
	}
}

export default GroceryListItem;