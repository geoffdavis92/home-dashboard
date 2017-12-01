import * as React from "react";
import * as ReactRouter from "react-router-dom";

const { BrowserRouter: Router, Route, Link } = ReactRouter;

export default () => (
	<Router>
		<Route path="/" render={() => <p>Home</p>} exact />
	</Router>
);
