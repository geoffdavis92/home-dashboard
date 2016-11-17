import React, { Component } from 'react'

export default class GroceryListTrash extends Component {
	constructor(props) {
		super(props);
		this.emptyTrash = this.emptyTrash.bind(this)
	}
	emptyTrash() {
		this.props.emptyTrashCallback();
	}
	render() {
		const TrashedItems = this.props.trashedItems.map(function(el,i,arr) {
			let item = el.content;
			return (
				<li key={i} className='collection-item' id={`grocery-list-trash-item-${i}`}>
					{`${item.title} – ${item.count} ${item.unit}`}
				</li>
			)
		}),
		EmptyTrashButton = (props) => (
				<a {...props}>Empty Trash</a>
			),
		hasItems = TrashedItems.length > 0 ? true : false;
		return (
			<span className={hasItems ? false : 'view-message'}>
				{hasItems ? TrashedItems : 'No items in trash.'}
				{hasItems ? EmptyTrashButton({
					onClick: this.emptyTrash,
					className: 'trash-empty red' 
				}) : ''}
			</span>
		)
	}
}