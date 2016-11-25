import React, { Component } from 'react'
import { Link } from 'react-router'
import { randomDates } from '../utilities/random'

export default class Resources extends Component {
	constructor(props) {
		super(props)
		this.state = {
			resources: []
		}
	}
	componentDidMount() {
		this.setState({
			resources: this.props.route.appData
		})
		this.props.route.resourcesUpdateCallback(this.state)
	}
	render() {
		const dates = randomDates(),
			  ItemRows = this.state.resources.map((item,i) => {
			const { title, count, unit, timestamp } = item;
			console.log(dates[i])
			return (
				<tr key={i}>
					<td>{title}</td>
					<td>{count}</td>
					<td>{unit}</td>
					<td>{`${dates[i].getDate()} ${dates[i].getMonth()} ${dates[i].getFullYear()}`}</td>
					<td>{`${timestamp.getDate()} ${timestamp.getMonth()} ${timestamp.getFullYear()}`}</td>
				</tr>
			)
		})
		return (
        	<section id='view_resources' className="row">
        		<table className='bordered striped'>
        			<thead>
        				<tr>
	        				<th>Item</th>
	        				<th>Count</th>
	        				<th>Unit</th>
	        				<th>Date Start</th>
	        				<th>Est. Runout</th>
	        			</tr>
        			</thead>
        			<tbody>
        				{ItemRows}
        			</tbody>
        		</table>
			</section>
		)
	}
}