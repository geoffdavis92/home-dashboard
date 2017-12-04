import * as React from "react";
import styled from "styled-components";

import { getThemeStyles, withTypography } from "../../utilities/helpers";
import { colors, modes, measurements } from "../../utilities/themes";

const StyledPanel = withTypography(styled("div")`
	${getThemeStyles};
	background-color: ${colors.white};
	border-radius: ${measurements.radius}px;
	border-style: solid;
	border-width: 1px;
	color: ${colors.black};
	padding: 1em;
`);

const StyledCard = styled(StyledPanel)`
	width: 100%;
	max-width: 400px;
`;

export default StyledPanel;

export { StyledCard as Card };
