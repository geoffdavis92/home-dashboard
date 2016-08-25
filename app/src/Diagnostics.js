// React
import React, { Component } from 'react';
// Placeholder data
import { diagnostics } from './placeholder'
// CSS
import './css/components/Diagnostics.css';

class Diagnostics extends Component {
	constructor() {
		super();
		this.state = {
			categories: [
				{
					title: 'Test',
					open: '6',
					completed: '2'
				}
			]
		};
	}
	componentDidMount() {
		
	}
	render() {
		// console.log(this.props.categories)
		const appCategories = this.props.categories.map(function(category,i) {
			if ( category && category.title && category.open && category.completed ) {
				return (
					<tr key={i}>
						<td>{category.title}</td>
						<td className="text-right red-text">{category.open.length}</td>
						<td className="text-right green-text">{category.completed.length}</td>
					</tr>
				)
			} else {
				return (
					<tr key={i}>
						<td colSpan="3">Loading...</td>
					</tr>
				)
			}
		})
		return (
			<table className="bordered">
				<thead>
					<tr>
						<th>Category</th>
						<th className="text-right">Open</th>
						<th className="text-right">Completed</th>
					</tr>
				</thead>
				<tbody>
					{appCategories}
				</tbody>
			</table>
		)
	}
}

export default Diagnostics;