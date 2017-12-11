import * as React from "react";
import styled from "styled-components";

import GlobalContainer, { Section, GridWrapper } from "atoms/Container";
import Header from "organisms/Header";
import Sidebar from "organisms/Sidebar";
import { withGlobalStyles } from "utilities/helpers";

const DefaultGrid = GridWrapper("section");

const Default = ({ children, pageID }) => (
	<DefaultGrid
		id={`page_${pageID}`}
		template_areas={{
			0: `"sidebar" "mainBody"`,
			768: `none`
		}}
		template_columns={{ 0: `none`, 768: `minmax(25%,300px) calc(75% - 1em)` }}
		column_gap={{ 0: 0, 768: `1em` }}
		row_gap={{ 0: `1.5em`, 768: 0 }}
	>
		<Sidebar
			className="default_sidebar"
			style={{ gridArea: { 0: "sidebar", 768: "unset" } }}
		/>
		<Section
			className="default_section"
			style={{ gridArea: { 0: "mainBody", 768: "unset" }, padding: "1em" }}
			{...{ children }}
		/>
	</DefaultGrid>
);

export default Default;
