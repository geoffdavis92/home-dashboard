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
			title: this.props.content.title.toLowerCase(),
			count: this.props.content.count,
			unit: this.props.content.unit.toLowerCase(),
			priority: this.props.content.priority,
			isOpen: true
		});
		// Prevent checkboxes from re-rendering checked
		this.CollectionItem.children[0].children[0].checked=false;
	}
	handleCheckboxChange(e) {
		const changedListItem = e.target.parentNode.parentNode,
			  computedID = `${this.props.content.title.toLowerCase()}-${this.props.content.count}-${this.props.content.unit.toLowerCase()}`;
		console.log(computedID)
		this.props.checkboxChangeCallback(false,computedID);
		// } else {
		// 	console.error('this.Checkbox or this.CollectionItem are not defined.')
		// }
	}
	trashItem(e) {
		const { count, title, unit } = this.props.content;
		this.props.trashCallback({
			id: `${title.toLowerCase()}-${count}-${unit.toLowerCase()}`,
			stateIndex: this.props.nth,
			count,
			title,
			unit
		},'open')
	}
	render() {
		// console.log(this.props)
		return (
			<li id={this.props.id/*`${this.props.content.title}-${this.props.content.count}-${this.props.content.unit}`*/} className="collection-item" ref={ref=>this.CollectionItem=ref}>
				{`${this.props.content.title} – ${this.props.content.count} ${this.props.content.unit}`}
				<span className="secondary-content">
					<input
						name={`is-complete-${this.props.id}`}
						type="checkbox"
						id={`is-complete-${this.props.id}`}
						onChange={this.handleCheckboxChange.bind(this)}
						ref={ref=>this.Checkbox=ref}
						checked={false}
					/>
					<label htmlFor={`is-complete-${this.props.id}`}>{' '}</label>
					<a onClick={this.trashItem.bind(this)} className='delete-button'>
						<i className='material-icons'>delete</i>
					</a>
				</span>
			</li>
		)
	}
}

export default GroceryListItem;