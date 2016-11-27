// Libraries
import React, { Component } from 'react'
import { Link } from 'react-router'
import { groceries, resources } from '../placeholder.js'
// Components
import ResourceTable from '../ResourceTable.js'

export default class Resources extends Component {
	constructor(props) {
		super(props)
		this.handleResourceTableUpdate = this.handleResourceTableUpdate.bind(this)
		this.state = {
			resources: []
		}
	}
	componentDidMount() {
		this.props.route.resourcesUpdateCallback(this.state)
	}
	handleResourceTableUpdate(updatedResourceTableState) {
		console.log('Resouces from RTableCallback',updatedResourceTableState)
		this.setState({
			resources: updatedResourceTableState
		})
		this.props.route.resourcesUpdateCallback(updatedResourceTableState)
	}
	render() {
		return (
        	<section id='view_resources' className="row">
        		<ResourceTable 
        			resourceTableCallback={this.handleResourceTableUpdate}
        			data={this.props.route.appData}
        		/>
			</section>
		)
	}
}