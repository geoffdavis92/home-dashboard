import * as React from "react";
import * as ReactRouter from "react-router-dom";

import Home from "./home";

const { BrowserRouter: Router, Route, Link } = ReactRouter;

export default () => (
	<Router>
		<Route path="/" render={Home} exact />
	</Router>
);
