import * as React from "react";
import styled from "styled-components";

import { grid, withGlobalStyles } from "../../utilities/helpers";

/**
 * Main element with styles for the top-level container element
 */
const GlobalContainer = withGlobalStyles("main");

/**
 * Semantic HTML containers with typographic styles, forwarded props
 */
const Aside = props => <aside {...props} />;
const Main = props => <main {...props} />;
const Section = props => <section {...props} />;

/**
 * Styled containers
 */
const Grid = styled("div")`
	display: grid;
	${grid("template_areas")};
	${grid("template_columns")};
	${grid("template_rows")};
	${grid("gap")};
	${grid("row_gap")};
	${grid("column_gap")};
	${({ alignContent }) =>
		alignContent ? `align-content: ${alignContent}` : ""};
	${({ alignItems }) => (alignItems ? `align-items: ${alignItems}` : "")};
	${({ justifyContent }) =>
		justifyContent ? `justify-content: ${justifyContent}` : ""};
	${({ justifyItems }) =>
		justifyItems ? `justify-items: ${justifyItems}` : ""};
`;

const GridWrapper = c => styled(c)`
	display: grid;
	${grid("template_areas")};
	${grid("template_columns")};
	${grid("template_rows")};
	${grid("gap")};
	${grid("row_gap")};
	${grid("column_gap")};
	${({ alignContent }) =>
		alignContent ? `align-content: ${alignContent}` : ""};
	${({ alignItems }) => (alignItems ? `align-items: ${alignItems}` : "")};
	${({ justifyContent }) =>
		justifyContent ? `justify-content: ${justifyContent}` : ""};
	${({ justifyItems }) =>
		justifyItems ? `justify-items: ${justifyItems}` : ""};
`;

export default GlobalContainer;

export { Aside, Main, Section, Grid, GridWrapper };
