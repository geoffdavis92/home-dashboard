import React, { Component } from 'react'

export default class GroceryListCompleted extends Component {
	constructor(props) {
		super(props);
		this.reopen = this.reopen.bind(this)
		this.state = {
			completedItems: this.props.completedItems
		}
	}
	reopen(e) {
		let itemID = e.target.parentElement.parentElement.id.replace(/\-completed/g,''),
			reopenedItem;
		this.state.completedItems.forEach((el,i,arr) => {
			if (el.id === itemID) {
				reopenedItem = el;
			}
		})
		this.props.reopenCallback(reopenedItem);
	}
	render() {
		const GLC = this,
			  CompletedItems = this.props.completedItems.map(function(el,i,arr) {
			  	console.log(el)
				let item = el.content;
				return (
					<li key={i} className='collection-item' id={`grocery-list-completed-item-${i}`}>
						{`${item.title} – ${item.count} ${item.unit}`}
						<span className='secondary-content'>
							<a onClick={GLC.reopen} className='reopen-button'>reopen</a>
							<a className="red-text">
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