import React, { Component } from 'react';
import './css/components/ToDoList.css';

const sampleData = [
	{
		title: 'Get milk'
	},
	{
		title: 'Pick up Timmy'
	},
	{
		title: 'Register for soccer'
	}
]

class ToDoList extends Component {
	render() {
		const ToDoItems = sampleData.map(function(el,i,arr) {
			return (
				<tr>
					<td className="bb1 border-silver text-left">{el.title}</td>
				</tr>
			)
		})
		return (
			<table id="to-do-list" className="table max-w25">
				<thead>
					<th className="bb3 border-grey">Title</th>
				</thead>
				<tbody>
					{ToDoItems}
				</tbody>
			</table>
		)
	}
}

export default ToDoList;