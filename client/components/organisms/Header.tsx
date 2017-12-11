import * as React from "react";
import styled from "styled-components";

import { colors } from "utilities/themes";

const Header = styled("header")`
	/* display: grid; */
	/* grid-template-columns: calc(70% - 1em) calc(30% - 1em); */
	/* grid-column-gap: 1em; */
	background-color: ${colors.whiteLight};
	box-shadow: 0 1px 1px ${colors.grayLight};
	padding: 1em;
	text-align: center;
`;

export default props => (
	<Header {...props}>
		<h1>Home Dashboard</h1>
	</Header>
);
