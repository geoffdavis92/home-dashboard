// Libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
// Views
import Dashboard from './views/Dashboard';
import Resources from './views/Resources';
// Global Components
import Nav from './Nav';
import DateSetAnalytics from './analytics/Dates'
import './css/critical.css';

// Placeholder Data
import { groceries, resources, dates } from './placeholder'

window.DSA = DateSetAnalytics;
window._dates = dates;

class AppRouter extends Component {
	constructor(props) {
		super(props)
		this.handleAppUpdate = this.handleAppUpdate.bind(this)
		this.handleDashboardUpdate = this.handleDashboardUpdate.bind(this)
		this.handleResourcesUpdate = this.handleResourcesUpdate.bind(this)
		this.state = {
			dashboardState: {},
			resourcesState: {}
		}
	}
	componentDidMount() {
		this.setState({
			dashboardState: {}
		})
	}
	handleAppUpdate() {}
	handleDashboardUpdate(updatedDashboardState) {
		this.setState({
			dashboardState: updatedDashboardState
		})
	}
	handleResourcesUpdate(updatedResourcesState) {
		console.log('Resources State updated on <AppRouter/>',updatedResourcesState)
		this.setState({
			resourcesState: updatedResourcesState
		})
	}
	render() {
		const resourcesItems = resources.concat(groceries)
		return (
		  	<Router history={browserHistory}>
		  		<Route path='/' component={App}>
		  			<IndexRoute 
		  				component={Dashboard}
		  				appData={{groceries}}
		  				dashboardUpdateCallback={this.handleDashboardUpdate}
		  			/>
		  			<Route 
		  				path='resources'
		  				component={Resources}
		  				appData={resourcesItems}
		  				resourcesUpdateCallback={this.handleResourcesUpdate}
		  			/>
		  		</Route>
		  	</Router>
		)
	}
}

class App extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div id='app'>
				<Nav/>
				<main className="row" >
	        		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
	        		<div className="col s12">
		            	<section className="row">
		            		<div className="col s12">
		            			<h3 className="text-center">{'Homebase'}</h3>
		            		</div>
		            	</section>
						{this.props.children}
					</div>
				</main>
			</div>
		)
	}
}

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);

// ReactDOM.render(
// 	<MobileMenu />,
// 	document.getElementById('mobile-menu')
// );
