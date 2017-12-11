import * as React from "react";
import styled from "styled-components";

import GlobalContainer, { Section, GridWrapper } from "atoms/Container";
import Header from "organisms/Header";
import { withGlobalStyles } from "utilities/helpers";

const Site = ({ children }) => (
	<GlobalContainer>
		<Header className="default_header" />
		{children}
	</GlobalContainer>
);

export default Site;
