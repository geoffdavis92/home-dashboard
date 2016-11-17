import React, { Component } from 'react'

export default class GroceryListTrash extends Component {
	constructor(props) {
		super(props);
		this.emptyTrash = this.emptyTrash.bind(this)
	}
	render() {
		const TrashedItems = this.props.trashedItems.map(function(el,i,arr) {
			let item = el.content;
			return (
				<li className='collection-item' id={`grocery-list-trash-item-${i}`}>
					{`${item.title} – ${item.count} ${item.unit}`}
				</li>
			)
		}),
		hasItems = TrashedItems.length > 0 ? true : false;
		return (
			<span className={hasItems ? false : 'trash-message'}>
				{hasItems ? TrashedItems : 'No items in trash.'}
			</span>
		)
	}
}