import * as React from "react";
import styled from "styled-components";

import { GridWrapper } from "atoms/Container";
import { AppLinks } from "molecules/Nav";

const AppNav = styled(GridWrapper("nav"))`
	a {
		color: #ca1211;
		display: block;
		text-decoration: none;
		&:focus {
			color: blue;
			outline: 2px dashed blue;
		}
	}
`;

const StyledAside = styled("aside")`
	padding: 1em;
`;

const Sidebar = props => (
	<StyledAside {...props}>
		<AppNav
			template_columns={{
				0: `repeat(4,calc(25% - .5em))`,
				768: `repeat(1,100%)`
			}}
			column_gap={{ 0: `.5em`, 768: 0 }}
			row_gap={{ 0: `1em`, 768: `.5em` }}
			justifyContent="center"
			style={{ textAlign: "center" }}
		>
			<AppLinks
				routes={[
					{ path: "/", label: "Home" },
					{ path: "/dashboard", label: "Dashboard" },
					{ path: "/profile", label: "Profile" },
					{ path: "/settings", label: "Settings" }
					// { path: "/careers", label: "Careers" },
					// { path: "/About", label: "About" }
				]}
			/>
		</AppNav>
	</StyledAside>
);

export default Sidebar;
