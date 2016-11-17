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
			console.log('ln45 | openItem: ', openItem)
			console.log('ln46 | itemID: ', itemID)
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
		if ( !itemIsOpen ) {
			GLCompletedItems.push(changedItem);
			//GLTrashedItems.push(changedItem); // remove this, add to handleTrashChange
			GLOpenItems.splice(changedItem.stateIndex,1);
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
	formSubmitCallback(updatedGroceryListItem) {
		const updatedOpenItems = this.state.openItems;
		updatedOpenItems.push(updatedGroceryListItem);
		this.setState({
			openItems: updatedOpenItems
		})
		this.props.GroceryListUpdateCallback({
			completedGroceryItems: this.state.completedItems,
			openGroceryItems: this.state.openItems
		});
	}
	handleReopen(reopenedItem) {
		const updatedOpenItems = this.state.openItems,
			  updatedCompletedItems = this.state.completedItems,
			  { count, title, unit } = reopenedItem.content;
		console.log('index of reopenedItem in CompletedItems: ',reopenedItem.stateIndex)
		updatedCompletedItems.splice(reopenedItem.stateIndex,1);
		updatedOpenItems.push({
			count: count,
			isOpen: true,
			title: title,
			unit: unit,
			id: reopenedItem.id
		});
		console.log('updated completed: ',updatedCompletedItems)
		console.log('updated open: ',updatedOpenItems)
		console.log('reopened: ',reopenedItem)
		this.setState({
			openItems: updatedOpenItems,
			completedItems: updatedCompletedItems
		});
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
			case 'completed':
				console.log('updating Completed props:',this.state.completedItems)
				GroceryView = GroceryListCompleted;
				GroceryViewProps = {
					completedItems: this.state.completedItems,
					reopenCallback: this.handleReopen.bind(this)
				}
				break;
			case 'trash':
				GroceryView = GroceryListTrash;
				GroceryViewProps = {
					trashedItems: this.state.trashedItems,
					emptyTrashCallback: this.handleEmptyTrash.bind(this)
				}
				break;
		}
		console.log(GroceryViewProps)
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
							onClick={this.state.trashedItems.length <= 0 ? false : this.state.view !== 'trash' ? this.showTrashedItems.bind(this) : this.showGroceryList.bind(this)}
							className={this.state.trashedItems.length > 0 ? '' : 'view-disabled'}
						>{this.state.view !== 'trash' ? 'trash' : 'list'}</a>
					</aside>
					{/*<i id="save-grocery-list" className="material-icons" onClick={this.saveGroceryList.bind(this)}>play_for_work</i>*/}
				</li>
				{this.state.view === 'list' ? GroceryView : <GroceryView {...GroceryViewProps} />}
				{this.state.view === 'list' ? <li id="grocery-list-form-wrapper" className="collection-item">
					<GroceryListForm formSubmitCallback={this.formSubmitCallback.bind(this)}/>
				</li> : ''}
			</ul>
		)
	}
}

export default GroceryList;