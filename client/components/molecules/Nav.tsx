import * as React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import Container from "atoms/Container";

const AppLink = styled(NavLink)`
	padding: 0.25em;
	text-align: center;

	@media only screen and (min-width: 768px) {
		padding: 0.33em;
		/* text-align: left; */
	}
`;

const AppLinks = props =>
	props.routes.map(({ path, label, ...restProps }) => (
		<span key={path}>
			<AppLink to={path} {...restProps}>
				{label}
			</AppLink>
		</span>
	));

export { AppLinks };
