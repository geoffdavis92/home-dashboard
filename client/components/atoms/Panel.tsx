import * as React from "react";
import styled from "styled-components";

import { getThemeStyles } from "../../utilities/helpers";
import { addons, colors, modes, measurements } from "../../utilities/themes";

const StyledPanel = styled("article")`
	${getThemeStyles};
	background-color: ${colors.white};
	border-color: ${colors.grayLight};
	border-radius: ${measurements.radius}px;
	border-style: solid;
	border-width: 1px;
	color: ${colors.black};
	padding: 1em;
`;

const StyledCard = styled(StyledPanel)`
	${getThemeStyles};
	${({ shadow }) => (shadow ? addons.boxShadow : "")};
	/* width: 100%; */
	/* max-width: 400px; */
`;

export default StyledPanel;

export { StyledCard as Card };
