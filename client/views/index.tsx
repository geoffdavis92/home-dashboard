import * as React from "react";
import * as ReactRouter from "react-router-dom";

import Site from "layouts/Site";
import Default from "layouts/Default";
import Home from "./Home";
import Dashboard from "./Dashboard";

const { BrowserRouter: Router, Route, Link } = ReactRouter;

const routes = [
	{
		path: "/",
		render: () => <Home id="home" appState={this.state} />,
		exact: true
	},
	{
		path: "/dashboard",
		render: () => <Dashboard id="dashboard" appState={this.state} />
	}
];

export default class App extends React.Component {
	state: { home: object; dashboard: object } = { home: {}, dashboard: {} };
	render() {
		return (
			<Router>
				<Site>
					<Default>
						{routes.map(routeProps => (
							<Route key={routeProps.path} {...routeProps} />
						))}
					</Default>
				</Site>
			</Router>
		);
	}
}
