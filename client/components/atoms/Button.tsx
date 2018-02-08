import * as React from "react";
import styled from "styled-components";

import { getThemeStyles } from "../../utilities/helpers";
import { colors, measurements } from "../../utilities/themes";
import { Button } from "../../utilities/types";

const Button: Function = ({ children, ...restProps }): JSX.Element => (
	<button {...restProps}>{children}</button>
);

const StyledButton = styled(Button)`
	appearance: none;
	background-color: ${colors.black};
	border-color: ${colors.black};
	border-style: solid;
	border-width: 1px;
	border-radius: ${measurements.radius}px;
	color: ${colors.white};
	cursor: pointer;
	line-height: 1;
	padding: 0.5em;
	${getThemeStyles};
`;

export default StyledButton;
