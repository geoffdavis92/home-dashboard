import React, { Component } from 'react'

export default class GroceryListTrash extends Component {
	constructor(props) {
		super(props);
		this.emptyTrash = this.emptyTrash.bind(this)
		this.reopenItem = this.reopenItem.bind(this)
		this.state = { 
			trashedItems: this.props.trashedItems
		}
	}
	emptyTrash() {
		this.props.emptyTrashCallback();
	}
	reopenItem(e) {
		let itemID = e.target.parentElement.parentElement.parentElement.id.replace(/\-trash/g,''),
			  reopenedItem;
		console.log(itemID)
		this.state.trashedItems.forEach((el,i,arr) => {
			if (el.id === itemID) {
				reopenedItem = el;
			}
		})
		this.props.reopenCallback(reopenedItem,'trashed');
	}
	render() {
		const GLT = this,
			  TrashedItems = this.props.trashedItems.map(function(item,i,arr) {
				return (
					<li key={i} className='collection-item' id={`${item.title.toLowerCase()}-${item.count}-${item.unit.toLowerCase()}`}>
						{`${item.title} – ${item.count} ${item.unit}`}
						<span className='secondary-content'>
							<a onClick={GLT.reopenItem} className='reopen-button'>
								<i className='material-icons'>replay</i>
							</a>	
						</span>
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