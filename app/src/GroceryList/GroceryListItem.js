import React, { Component } from 'react';

class GroceryListItem extends Component {
	constructor() {
		super();
		this.state = {
			id: '',
			title: '',
			count: '',
			unit: '',
			priority: -1,
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
	handleCheckboxChange() {
		if ( this.Checkbox !== null && this.CollectionItem !== null) {
			if ( this.Checkbox.checked ) {
				this.CollectionItem.setAttribute('class',`${this.CollectionItem.getAttribute('class')} completed`);
			} else {
				this.CollectionItem.setAttribute('class',`${this.CollectionItem.getAttribute('class').replace(/\scompleted/g,'')}`);
			}
			this.setState({
				isOpen: !this.Checkbox.checked
			});
			this.props.checkboxChangeCallback(!this.Checkbox.checked,this.state.id);
		} else {
			console.error('this.Checkbox or this.CollectionItem are not defined.')
		}
	}
	render() {
		return (
			<li id={this.props.id} className="collection-item" ref={ref=>this.CollectionItem=ref}>
				{`${this.props.content.title} – ${this.props.content.count} ${this.props.content.unit}`}
				<span className="secondary-content">
					<input
						name="is-complete"
						type="checkbox"
						id="is-complete"
						onChange={this.handleCheckboxChange.bind(this)}
						ref={ref=>this.Checkbox=ref}
					/>
					<label htmlFor="is-complete">{' '}</label>
				</span>
			</li>
		)
	}
}

export default GroceryListItem;