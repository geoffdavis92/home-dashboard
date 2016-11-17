// React
import React, { Component } from 'react';
// Components
import GroceryListForm from './GroceryList/GroceryListForm';
import GroceryListItem from './GroceryList/GroceryListItem';
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
			  GLTrashedItems = this.state.trashedItems, //remove from this, add to handleTrashChange
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
		console.log(itemID,itemIsOpen)
		if ( !itemIsOpen ) {
			GLCompletedItems.push(changedItem);
			GLTrashedItems.push(changedItem); // remove this, add to handleTrashChange
			GLOpenItems.splice(changedItem.stateIndex,1);
			this.setState({
				completedItems: GLCompletedItems,
				trashedItems: GLTrashedItems, // remove ... etc
				openItems: GLOpenItems
			});
		}

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
	showCompletedItems(e) {}
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
	render() {
		const _this = this,
			  GroceryListItems = this.state.openItems.map(function(el,i,arr) {
				if ( el ) {
					return (
						<GroceryListItem key={i} id={`grocery-list-item-${i}`} checkboxChangeCallback={_this.handleCheckboxChange.bind(_this)} content={el}/>
					)
				}
			  });
		let GroceryView, 
			GroceryViewProps;
		switch (this.state.view) {
			case 'list':
				GroceryView = GroceryListItems;
				break;
			case 'trash':
				GroceryView = GroceryListTrash;
				GroceryViewProps = {
					trashedItems: this.state.trashedItems
				}
				break;
		}
		return (
			<ul className={`collection${this.state.view === 'trash' ? ' view_trash' : ''}`} id="grocery-list">
				<li className="collection-item light-green white-text">
					<h5>Groceries</h5>
					<aside>
						<a onClick={this.showCompletedItems.bind(this)}>completed</a>
						<a onClick={this.state.view === 'list' ? this.showTrashedItems.bind(this) : this.showGroceryList.bind(this)}>{this.state.view === 'list' ? 'trash' : 'list'}</a>
					</aside>
					{/*<i id="save-grocery-list" className="material-icons" onClick={this.saveGroceryList.bind(this)}>play_for_work</i>*/}
				</li>
				{this.state.view === 'list' ? GroceryView : <GroceryView {...GroceryViewProps} />}
				{this.state.view !== 'trash' ? <li id="grocery-list-form-wrapper" className="collection-item">
					<GroceryListForm formSubmitCallback={this.formSubmitCallback.bind(this)}/>
				</li> : ''}
			</ul>
		)
	}
}

export default GroceryList;