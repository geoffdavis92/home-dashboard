// React
import React, { Component } from 'react';
// import GroceryListForm from './GroceryList/GroceryListForm';
import GroceryListItem from './GroceryList/GroceryListItem';
// Placeholder data
import { groceries } from './placeholder'
// CSS
import './css/components/GroceryList.css';

class GroceryList extends Component {
	constructor() {
		super();
		this.state = {
			openItems: [],
			completedItems: [],
			groceryItems: groceries
		};
	};
	componentDidMount() {
		let mountedOpenItems = [];
		this.state.groceryItems.forEach(function(el,i,arr) {
			if ( el.isOpen ) {
				el['id'] = `grocery-list-item-${i}`;
				mountedOpenItems.push(el);
			}
		});
		this.setState({
			openItems: mountedOpenItems
		});
	}
	handleCheckboxChange(itemIsOpen,itemID) {
		console.log(itemIsOpen,itemID)
		let updatedCompletedItems = this.state.completedItems,
			updatedOpenItems = this.state.openItems;

		if ( itemIsOpen ) {
			let itemToOpen = updatedCompletedItems.filter( completedItem => completedItem.id == itemID )[0];
			updatedCompletedItems.splice(updatedCompletedItems.indexOf(itemToOpen),1);
			updatedOpenItems.push(itemToOpen);
		} else if ( !itemIsOpen ) {
			let itemToComplete = updatedOpenItems.filter( openItem => openItem.id == itemID )[0];
			updatedOpenItems.splice(updatedOpenItems.indexOf(itemToComplete),1);
			updatedCompletedItems.push(itemToComplete);
		} else {
			console.error('itemIsOpen is undefined or null');
			console.log('=====')
			console.log(itemIsOpen,itemID)
			console.log('=====')
		}
		// Push state
		this.setState({
			completedItems: updatedCompletedItems,
			openItems: updatedOpenItems
		});
	}
	render() {
		const _this = this,
			  GroceryListItems = this.state.groceryItems.map(function(el,i,arr) {
				return (
					<GroceryListItem key={i} id={`grocery-list-item-${i}`} checkboxChangeCallback={_this.handleCheckboxChange.bind(_this)} content={el}/>
				)
			  });
		return (
			<ul className="collection" id="grocery-list">
				{GroceryListItems}
			</ul>
		)
	}
}

export default GroceryList;