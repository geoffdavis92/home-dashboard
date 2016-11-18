// React
import React, { Component } from 'react';
// Components
import GroceryListForm from './GroceryList/GroceryListForm';
import GroceryListItem from './GroceryList/GroceryListItem';
import GroceryListCompleted from './GroceryList/GroceryListCompleted';
import GroceryListTrash from './GroceryList/GroceryListTrash';
// Placeholder data
import { groceries } from './placeholder'
// CSS
import './css/components/GroceryList.css';

class GroceryList extends Component {
	constructor() {
		super();
		this.state = {
			openItems: groceries,
			completedItems: [],
			trashedItems: [],
			view: 'list'
		};
	};
	componentDidMount() {
		// let mountedOpenItems = [];
		// this.state.openItems.forEach(function(el,i,arr) {
		// 	if ( el.isOpen ) {
		// 		el['id'] = `grocery-list-item-${i}`;
		// 		mountedOpenItems.push(el);
		// 	}
		// });
		// this.setState({
		// 	openItems: mountedOpenItems
		// });
		// this.props.GroceryListUpdateCallback({
		// 	completedGroceryItems: this.state.completedItems,
		// 	openGroceryItems: mountedOpenItems
		// });
	}
	saveGroceryList(e) {
		this.props.saveGroceryListCallback('test')
	}
	showCompletedItems(e) {
		this.setState({
			view: 'completed'
		})
	}
	showGroceryList(e) {
		this.setState({
			view: 'list'
		})
	}
	showTrashedItems(e) {
		this.setState({
			view: 'trash'
		});
	}
	handleCheckboxChange(itemIsOpen,itemID) {
		const GLCompletedItems = this.state.completedItems,
			  GLTrashedItems = this.state.trashedItems, //remove from this, add to handleTrashChange
			  GLOpenItems = this.state.openItems;
		let changedItem;
		GLOpenItems.forEach((openItem,index,openItemArray) => {
			console.log('=============')
			console.log('openItemArray',openItemArray)
			console.log('openItem',openItem)
			console.log('itemID',itemID)
			console.log('=============')
			if ( openItem.id === itemID ) {
				changedItem = {
					id: itemID,
					count: openItem.count,
					title: openItem.title,
					unit: openItem.unit
				}
				// changedItem['id'] = itemID;
				// changedItem['stateIndex'] = index;
				// changedItem['content'] = {
				// 	count: openItem.count,
				// 	title: openItem.title,
				// 	unit: openItem.unit
				// };
			}
		});
		if ( !itemIsOpen ) {
			GLCompletedItems.push(changedItem);
			//GLTrashedItems.push(changedItem); // remove this, add to handleTrashChange
			// FIX THIS: GLOpenItems.splice(changedItem.stateIndex,1);
			this.setState({
				completedItems: GLCompletedItems,
				//trashedItems: GLTrashedItems, // remove ... etc
				openItems: GLOpenItems
			});
		}
		this.props.GroceryListUpdateCallback({
			completedGroceryItems: this.state.completedItems,
			openGroceryItems: this.state.openItems
		});
	}
	handleEmptyTrash() {
		this.setState({
			trashedItems: [],
			view: 'list'
		});
	}
	handleFormSubmit(addedGroceryItem) {
		const updatedOpenItems = this.state.openItems;
		// addedGroceryItem['id'] = `grocery-list-item-${updatedOpenItems.length-1}`
		console.log('addedGroceryItem',addedGroceryItem)
		updatedOpenItems.push(addedGroceryItem);
		this.setState({
			openItems: updatedOpenItems
		})
		console.log(this.state)
		this.props.GroceryListUpdateCallback({
			completedGroceryItems: this.state.completedItems,
			openGroceryItems: this.state.openItems
		});
	}
	handleReopen(reopenedItem,location) {
		console.log(reopenedItem)
		const updatedComputedItems = this.state[`${location}Items`],
			  updatedOpenItems = this.state.openItems,
			  { count, title, unit } = reopenedItem.content;
		// FIX THIS: updatedComputedItems.splice(reopenedItem.stateIndex,1);
		updatedOpenItems.push({
			count: count,
			isOpen: true,
			title: title,
			unit: unit,
			id: reopenedItem.id
		});
		
		if (updatedComputedItems.length > 0) {
			this.setState({
				openItems: updatedOpenItems,
				[`${location}Items`]: updatedComputedItems
			});
		} else {
			this.setState({
				openItems: updatedOpenItems,
				[`${location}Items`]: updatedComputedItems,
				view: 'list'
			});
		}

		
	}
	handleTrash(trashedItem,location) {
		const updatedComputedItems = this.state[`${location}Items`], 
			  updatedTrashedItems = this.state.trashedItems;
		updatedTrashedItems.push(trashedItem);
		// FIX THIS: updatedComputedItems.splice(trashedItem.stateIndex,1)
		if (updatedComputedItems.length > 0) {
			this.setState({
				[`${location}Items`]: updatedComputedItems,
				trashedItems: updatedTrashedItems
			});
		} else {
			this.setState({
				[`${location}Items`]: updatedComputedItems,
				trashedItems: updatedTrashedItems,
				view: 'list'
			});
		}
	}
	render() {
		const _this = this,
			  GroceryListItems = this.state.openItems.map(function(el,i,arr) {
				if ( el ) {
					return (
						<GroceryListItem 
							key={i} 
							id={`grocery-list-item-${i}`} 
							nth={i} 
							checkboxChangeCallback={_this.handleCheckboxChange.bind(_this)} 
							trashCallback={_this.handleTrash.bind(_this)} content={el}
						/>
					)
				}
			  });
		let GroceryView, 
			GroceryViewProps;
		switch (this.state.view) {
			case 'list':
				GroceryView = GroceryListItems;
				break;
			case 'completed':
				GroceryView = GroceryListCompleted;
				GroceryViewProps = {
					completedItems: this.state.completedItems,
					reopenCallback: this.handleReopen.bind(this),
					trashCallback: this.handleTrash.bind(this)
				}
				break;
			case 'trash':
				GroceryView = GroceryListTrash;
				GroceryViewProps = {
					trashedItems: this.state.trashedItems,
					emptyTrashCallback: this.handleEmptyTrash.bind(this),
					reopenCallback: this.handleReopen.bind(this)
				}
				break;
		}
		return (
			<ul className={`collection${this.state.view === 'trash' ? ' view_trash' : this.state.view === 'completed' ? ' view_completed' : ''}`} id="grocery-list">
				<li className="header collection-item light-green white-text">
					<h5>Groceries</h5>
					<aside>
						<a 
							onClick={this.state.completedItems.length <= 0 && this.state.view !== 'completed' ? false : this.state.view !== 'completed' ? this.showCompletedItems.bind(this) : this.showGroceryList.bind(this)}
							className={this.state.completedItems.length <= 0 && this.state.view !== 'completed' ? 'view-disabled' : ''}
						>{this.state.view !== 'completed' ? 'completed' : 'list'}</a>
						<a 
							onClick={this.state.trashedItems.length <= 0 && this.state.view !== 'trash' ? false : this.state.view !== 'trash' ? this.showTrashedItems.bind(this) : this.showGroceryList.bind(this)}
							className={this.state.trashedItems.length <= 0 && this.state.view !== 'trash' ? 'view-disabled' : ''}
						>{this.state.view !== 'trash' ? 'trash' : 'list'}</a>
					</aside>
					{/*<i id="save-grocery-list" className="material-icons" onClick={this.saveGroceryList.bind(this)}>play_for_work</i>*/}
				</li>
				{this.state.view === 'list' ? GroceryView : <GroceryView {...GroceryViewProps} />}
				{this.state.view === 'list' ? <li id="grocery-list-form-wrapper" className="collection-item">
					<GroceryListForm formSubmitCallback={this.handleFormSubmit.bind(this)}/>
				</li> : ''}
			</ul>
		)
	}
}

export default GroceryList;