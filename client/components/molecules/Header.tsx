import * as React from "react";
import * as styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import Container from "atoms/Container";

export default props => (
	<Container>
		<nav>
			<Link to="/">Home</Link>
		</nav>
	</Container>
);
