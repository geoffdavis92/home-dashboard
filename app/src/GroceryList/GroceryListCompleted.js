import React, { Component } from 'react'

export default class GroceryListCompleted extends Component {
	constructor(props) {
		super(props);
		this.reopenItem = this.reopenItem.bind(this)
		this.trashItem = this.trashItem.bind(this)
		this.state = {
			completedItems: this.props.completedItems
		}
	}
	reopenItem(e) {
		let itemID = e.target.parentElement.parentElement.parentElement.id.replace(/\-completed/g,''),
			reopenedItem;
		this.state.completedItems.forEach((el,i,arr) => {
			console.log(el.id,itemID,el.id === itemID)
			if (el.id === itemID) {
				reopenedItem = el;
			}
		})
		console.log(reopenedItem)
		this.props.reopenCallback(reopenedItem,'completed');
	}
	trashItem(e) {
		const itemID = e.target.parentElement.parentElement.parentElement.id.replace(/\-completed/g,''),
			  updatedCompletedItems = this.state.completedItems;
		let trashedItem;
		updatedCompletedItems.forEach((el,i,arr) => {
			if (el.id === itemID) {
				trashedItem = el;
			}
		});
		updatedCompletedItems.splice(trashedItem.stateIndex,1)
		this.setState({
			completedItems: updatedCompletedItems
		})
		this.props.trashCallback(trashedItem,'completed')
	}
	render() {
		const GLC = this,
			  CompletedItems = this.props.completedItems.map(function(item,i,arr) {
				return (
					<li key={i} className='collection-item' id={`${item.title.toLowerCase()}-${item.count}-${item.unit.toLowerCase()}`}>
						{`${item.title} – ${item.count} ${item.unit}`}
						<span className='secondary-content'>
							<a onClick={GLC.reopenItem} className='reopen-button'>
								<i className='material-icons'>replay</i>
							</a>
							<a onClick={GLC.trashItem} className="delete-button">
								<i className="material-icons">delete</i>
							</a>
						</span>
					</li>
				)
			}),
			hasItems = CompletedItems.length > 0 ? true : false;
		return (
			<span className={hasItems ? '' : 'view-message'}>
				{hasItems ? CompletedItems : 'No items in completed.'}
			</span>
		)
	}
}