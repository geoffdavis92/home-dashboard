import React, { Component } from 'react';

class GroceryListForm extends Component {
	constructor(props,context) {
		super(props,context);
	}
	handleFormSubmit(e) {
		e.preventDefault();
		let sendObject = {
			title: this.gliTitle.value,
			count: this.gliCount.value,
			unit: this.gliUnit.value,
			isOpen: true
		};
		this.props.formSubmitCallback(sendObject);
		this.glForm.reset()
	}
	render() {
		return (
			<form id="grocery-list-form" onSubmit={this.handleFormSubmit.bind(this)} ref={ref=>this.glForm=ref}>
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