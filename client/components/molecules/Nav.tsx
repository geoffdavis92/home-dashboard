import * as React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import Container from "atoms/Container";

const AppLinks = props =>
	props.routes.map(({ path, label, ...restProps }) => (
		<NavLink to={path} {...restProps}>
			{label}
		</NavLink>
	));

export { AppLinks };
