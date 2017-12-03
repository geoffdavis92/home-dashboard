import * as React from "react";
import styled from "styled-components";

import { Aside } from "atoms/Container";
import { AppLinks } from "molecules/Nav";

const AppNav = styled("nav")`
	a {
		color: #ca1211;
		text-decoration: none;
	}
	display: grid;
	grid-template-columns: repeat(1, 66%);
	grid-row-gap: 0.5em;
`;

const Sidebar = styled(Aside)`
	padding: 1em;
`;

export default props => (
	<Sidebar {...props}>
		<AppNav>
			<AppLinks
				routes={[
					{ path: "/", label: "Home" },
					{ path: "/dashboard", label: "Dashboard" }
				]}
			/>
		</AppNav>
	</Sidebar>
);
