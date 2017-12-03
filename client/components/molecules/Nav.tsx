import * as React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import Container from "atoms/Container";

class MobileNav extends React.Component<any, { isOpen }> {
	constructor(props, context) {
		super(props, context);
		this.state = { isOpen: false };
	}
	public toggleNav() {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	}
}

// const StyledNav = styled("nav")`
// 	color: red;
// `;

export default class HeaderNav extends React.Component<any, {}> {
	MobileNav: Object;
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<>
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/dashboard">Dashboard</NavLink>
				</nav>
			</>
		);
	}
}
