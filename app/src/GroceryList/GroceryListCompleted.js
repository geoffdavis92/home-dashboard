import React, { Component } from 'react'

export default class GroceryListCompleted extends Component {
	constructor(props) {
		super(props);
		this.reopen = this.reopen.bind(this)
	}
	reopen() {
		this.props.emptyTrashCallback();
	}
	render() {
		const CompletedItems = this.props.completedItems.map(function(el,i,arr) {
			let item = el.content;
			return (
				<li key={i} className='collection-item' id={`grocery-list-completed-item-${i}`}>
					{`${item.title} – ${item.count} ${item.unit}`}
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