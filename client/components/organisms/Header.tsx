import * as React from "react";
import styled from "styled-components";

import Nav from "molecules/Nav";
import SearchBar from "molecules/SearchBar";

const Header = styled("header")`
	display: grid;
	grid-template-columns: calc(70% - 1em) calc(30% - 1em);
	grid-column-gap: 1em;
	padding: 1em;
`;

export default props => (
	<Header {...props}>
		<Nav />
		<SearchBar />
	</Header>
);
