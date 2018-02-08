import * as React from "react";
import styled from "styled-components";

import GlobalContainer, { Section, GridWrapper } from "atoms/Container";
import { withUnmountAction } from "atoms/utilities";
import Header from "organisms/Header";
import Sidebar from "organisms/Sidebar";
import { DynamicString } from "utilities/types";
import { withGlobalStyles } from "utilities/helpers";

const DefaultGrid = GridWrapper("section");

export default class Default extends React.Component<
	{},
	{ componentHasError: boolean; errorMessage: string }
> {
	constructor(props, context) {
		super(props, context);
		this.state = { componentHasError: false, errorMessage: "" };
	}
	componentDidCatch(error, info) {
		this.setState(prevState => ({
			componentHasError: true,
			errorMessage: error
		}));
	}
	render() {
		const { children } = this.props;
		return (
			(!this.state.componentHasError && (
				<DefaultGrid
					template_areas={{
						0: `"sidebar" "mainBody"`,
						768: `none`
					}}
					template_columns={{
						0: `none`,
						768: `minmax(10%,200px) calc(75% - 1em)`
					}}
					column_gap={{ 0: 0, 768: `1em` }}
					row_gap={{ 0: `1.5em`, 768: 0 }}
				>
					<Sidebar
						className="default_sidebar"
						style={{ gridArea: { 0: "sidebar", 768: "unset" } }}
					/>
					<Section
						className="default_section"
						style={{
							gridArea: { 0: "mainBody", 768: "unset" },
							padding: "1em"
						}}
						{...{ children }}
					/>
				</DefaultGrid>
			)) || (
				<div>
					<p>There was an error rendering this component</p>
					<br />
					<pre>
						<code>{this.state.errorMessage}</code>
					</pre>
				</div>
			)
		);
	}
}
