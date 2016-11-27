// Libraries
import React, { Component } from 'react';
// Components
import ResourceTableForm from './ResourceTable/ResourceTableForm'
import RunoutModule from './ResourceTable/RunoutModule'
import { randomDates } from './utilities/random'
// CSS
import './css/components/ResourceTable.css';

export default class ResourceTable extends Component {
	constructor() {
		super()
		this.handleFormSubmission = this.handleFormSubmission.bind(this)
		this.state = {
			resources: []
		}
	}
	componentDidMount() {
		this.setState({
			resources: this.props.data
		})
		this.props.resourceTableCallback(this.props.data)
	}
	handleFormSubmission(addedResourceItem) {
		this.setState({
			resources: this.state.resources.concat(addedResourceItem)
		})
		this.props.resourceTableCallback(this.state)
	}
	render() {
		const dates = randomDates(),
			  ItemRows = this.state.resources.map((item,i) => {
				const { title, count, unit, timestamp, durations } = item;
				return (
					<tr key={i}>
						<td>{title}</td>
						<td>{count}</td>
						<td>{unit}</td>
						<td>{`${timestamp.getDate()} ${timestamp.getMonth()} ${timestamp.getFullYear()}`}</td>
						<td><RunoutModule dateSet={durations ? durations : []}/></td>
					</tr>
				)
			})
		return (
			<table id='resource-table' className='bordered striped'>
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
    				<ResourceTableForm formUpdateCallback={this.handleFormSubmission}/>
    			</tbody>
    		</table>
		)
	}
}