import * as React from "react";
import styled from "styled-components";

import Header from "organisms/Header";
import Container, { Aside, Section } from "atoms/Container";
import { withGlobalStyles } from "utilities/themes";

const Default = withGlobalStyles(({ children, pageID, ...rest }) => (
	<Container id={`page_${pageID}`} {...rest}>
		<Header id="view_header" />
		<Section id="view_section" {...{ children }} />
		<Aside id="view_sidebar">
			<p>Lorem</p>
		</Aside>
	</Container>
));

// const StyledDefault = styled(Default)`
// 	#view_header {
// 		grid-area: header;
// 	}
// 	#view_section {
// 		grid-area: section;
// 		padding: 1em;
// 	}
// 	#view_sidebar {
// 		grid-area: sidebar;
// 		padding: 1em;
// 	}
// 	display: grid;
// 	grid-template-areas: "header header header" "section section sidebar";
// 	grid-column-gap: 0.5em;
// `;

export default Default;
