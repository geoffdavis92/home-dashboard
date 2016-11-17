// React
import React, { Component } from 'react';
// Components
import GroceryListForm from './GroceryList/GroceryListForm';
import GroceryListItem from './GroceryList/GroceryListItem';
// Placeholder data
import { groceries } from './placeholder'
// CSS
import './css/components/GroceryList.css';

class GroceryList extends Component {
	constructor() {
		super();
		this.state = {
			openItems: groceries,
			completedItems: []
		};
	};
	componentDidMount() {
		let mountedOpenItems = [];
		this.state.openItems.forEach(function(el,i,arr) {
			if ( el.isOpen ) {
				el['id'] = `grocery-list-item-${i}`;
				mountedOpenItems.push(el);
			}
		});
		this.setState({
			openItems: mountedOpenItems
		});
		this.props.GroceryListUpdateCallback({
			completedGroceryItems: this.state.completedItems,
			openGroceryItems: mountedOpenItems
		});
	}
	handleCheckboxChange(itemIsOpen,itemID) {
		const GLCompletedItems = this.state.completedItems,
			  GLOpenItems = this.state.openItems,
			  changedItem = {};
		GLOpenItems.forEach((openItem,index,openItemArray) => {
			if ( openItem.id === itemID ) {
				changedItem['id'] = itemID;
				changedItem['stateIndex'] = index;
				changedItem['content'] = {
					count: openItem.count,
					title: openItem.title,
					unit: openItem.unit
				};
			}
		});
		// let updatedCompletedItems = this.state.completedItems,
		// 	updatedOpenItems = this.state.openItems;
		// if ( itemIsOpen ) {
		console.log(itemID,itemIsOpen)
		if ( !itemIsOpen ) {
			GLCompletedItems.push(changedItem);
			GLOpenItems.splice(changedItem.stateIndex,1);
			this.setState({
				completedItems: GLCompletedItems,
				openItems: GLOpenItems
			});
		}
		// 	let itemToOpen = updatedCompletedItems.filter( completedItem => completedItem.id === itemID )[0];

		// 	updatedCompletedItems.splice(updatedCompletedItems.indexOf(itemToOpen),1);
		// 	updatedOpenItems.push(itemToOpen);

		// } else if ( !itemIsOpen ) {
		// 	console.log(itemID,!itemIsOpen)
		// 	let itemToComplete = updatedOpenItems.filter( openItem => openItem.id === itemID )[0];

		// 	updatedOpenItems.splice(updatedOpenItems.indexOf(itemToComplete),1);
		// 	updatedCompletedItems.push(itemToComplete);

		// } else {
		// 	console.error('itemIsOpen is undefined or null');
		// 	console.log('=====')
		// 	console.log(itemIsOpen,itemID)
		// 	console.log('=====')
		// }
		// // Push state
		// /**
		//  * ToDo: adjust state so next item does not auto-check
		//  */
		// this.setState({
		// 	completedItems: updatedCompletedItems,
		// 	openItems: updatedOpenItems
		// });

		this.props.GroceryListUpdateCallback({
			completedGroceryItems: this.state.completedItems,
			openGroceryItems: this.state.openItems
		});
	}
	formSubmitCallback(updatedGroceryListItem) {
		let updatedOpenItems = this.state.openItems;

		updatedOpenItems.push(updatedGroceryListItem);

		this.setState({
			openItems: updatedOpenItems
		})

		this.props.GroceryListUpdateCallback({
			completedGroceryItems: this.state.completedItems,
			openGroceryItems: this.state.openItems
		});
	}
	saveGroceryList(e) {
		this.props.saveGroceryListCallback('test')
	}
	render() {
		const _this = this,
			  GroceryListItems = this.state.openItems.map(function(el,i,arr) {
				if ( el ) {
					return (
						<GroceryListItem key={i} id={`grocery-list-item-${i}`} checkboxChangeCallback={_this.handleCheckboxChange.bind(_this)} content={el}/>
					)
				}
			  });
		return (
			<ul className="collection" id="grocery-list">
				<li className="collection-item light-green white-text">
					<h5>Groceries</h5>
					<i id="save-grocery-list" className="material-icons" onClick={this.saveGroceryList.bind(this)}>play_for_work</i>
				</li>
				{GroceryListItems}
				<li id="grocery-list-form-wrapper" className="collection-item">
					<GroceryListForm formSubmitCallback={this.formSubmitCallback.bind(this)}/>
				</li>
			</ul>
		)
	}
}

export default GroceryList;