import React, { Component } from 'react';

class GroceryListForm extends Component {
	constructor(props,context) {
		super();
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}
	handleFormSubmit(e) {
		e.preventDefault();
		let sendObject = {
			title: this.gliTitle.value,
			count: this.gliCount.value,
			unit: this.gliUnit.value,
			id: `${this.gliTitle.value.replace(/\s/g,'-').toLowerCase()}-${this.gliCount.value}-${this.gliUnit.value.toLowerCase()}`,
			isOpen: true,
			timestamp: new Date(Date.now())
		};
		this.props.formSubmitCallback(sendObject);
		this.glForm.reset();
		this.gliTitle.focus();
	}
	render() {
		return (
			<form id="grocery-list-form" onSubmit={this.handleFormSubmit} ref={ref=>this.glForm=ref}>
				<div className="input-field col s12">
		          <input id="grocery_item_title" type="text" className="validate" placeholder="Grocery item" ref={ref=>this.gliTitle=ref}/>
		          <input id="grocery_item_count" type="number" className="validate" placeholder="count" ref={ref=>this.gliCount=ref}/>
		          <input id="grocery_item_unit" type="text" className="validate" placeholder="unit" ref={ref=>this.gliUnit=ref}/>
		        </div>
		        <input type="submit" className="hide"/>
			</form>
		)
	}
}

export default GroceryListForm;