import * as React from "react";
import * as ReactRouter from "react-router-dom";

import Default from "layouts/Default";
import Home from "./Home";

const { BrowserRouter: Router, Route, Link } = ReactRouter;

export default () => (
	<Router>
		<Default>
			<Route path="/" render={Home} exact />
			<Route path="/dashboard" render={Home} />
		</Default>
	</Router>
);
