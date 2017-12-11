import * as React from "react";
import * as ReactRouter from "react-router-dom";

import Site from "layouts/Site";
import Home from "./Home";

const { BrowserRouter: Router, Route, Link } = ReactRouter;
const routes = [
	{
		path: "/",
		render: () => <Home appState={this.state} />,
		exact: true
	},
	{
		path: "/dashboard",
		render: () => <Home appState={this.state} />
	}
];

export default class App extends React.Component {
	state: { Home: object } = { Home: {} };
	render() {
		return (
			<Router>
				<Site>
					{routes.map(routeProps => (
						<Route key={routeProps.path} {...routeProps} />
					))}
				</Site>
			</Router>
		);
	}
}

/*<Route
						path="/"
						render={() => <Home appState={this.state} />}
						exact
					/>
					<Route
						path="/dashboard"
						render={() => <Home appState={this.state} />}
					/>*/
