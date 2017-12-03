import * as React from "react";
import styled from "styled-components";

import { colors, measurements } from "utilities/themes";

const TextInput = ({ disabled, readOnly, ...rest }) => (
	<input type="text" disabled={disabled} readOnly={readOnly} {...rest} />
);

const StyledTextInput = styled(TextInput)`
	background-color: ${({ disabled }) => (disabled ? "#ddd" : colors.white)};
	border: 1px solid ${colors.black};
	border-radius: ${measurements.radius}px;
	color: ${({ disabled }) => (disabled ? colors.gray : colors.black)};
	font-size: 1em;
`;

export default StyledTextInput;
