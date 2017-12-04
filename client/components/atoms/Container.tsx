import * as React from "react";
import styled from "styled-components";

import {
	grid,
	withGlobalStyles,
	withTypography
} from "../../utilities/helpers";

/**
 * Main element with styles for the top-level container element
 */
const GlobalContainer = withGlobalStyles(props => <main {...props} />);

/**
 * Semantic HTML containers with typographic styles, forwarded props
 */
const Aside = withTypography(props => <aside {...props} />);
const Main = withTypography(props => <main {...props} />);
const Section = withTypography(props => <section {...props} />);

/**
 * Styled containers
 */
const Grid = withTypography(styled("div")`
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
`);

export default GlobalContainer;

export { Aside, Main, Section, Grid };
