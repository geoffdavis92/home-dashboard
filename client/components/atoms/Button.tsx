import * as React from "react";
import styled from "styled-components";

import { colors, measurements } from "../../utilities/themes";
import { getThemeStyles } from "../../utilities/helpers";

const Button = styled("button")`
	appearance: none;
	border-style: solid;
	border-width: 1px;
	border-radius: ${measurements.radius}px;
	cursor: pointer;
	line-height: 1;
	padding: 0.5em;
	${getThemeStyles};
`;

export default Button;
