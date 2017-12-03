import * as React from "react";
import styled from "styled-components";

import GlobalContainer, { Section } from "atoms/Container";
import Header from "organisms/Header";
import Sidebar from "organisms/Sidebar";
import { withGlobalStyles } from "utilities/helpers";

const Default = withGlobalStyles(({ children, pageID, ...restProps }) => (
	<GlobalContainer
		id={`page_${pageID}`}
		className="default_container"
		{...restProps}
	>
		<Header className="default_header" />
		<Section className="default_section" {...{ children }} />
		<Sidebar className="default_sidebar" />
	</GlobalContainer>
));

export default Default;
