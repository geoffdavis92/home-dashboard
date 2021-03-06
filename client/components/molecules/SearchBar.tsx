import * as React from "react";
import styled from "styled-components";

const StyledTextInput = styled("input")`
	display: block;
	width: 100%;
`;

export default class SearchBar extends React.Component<{}, {}> {
	Input: Object;
	constructor(props, context) {
		super(props, context);
		this.updateSearch = this.updateSearch.bind(this);
	}
	private updateSearch(event: Object): void {}
	render() {
		return (
			<form>
				<StyledTextInput
					id="q"
					name="q"
					rel={n => (this.Input = n)}
					onInput={this.updateSearch}
				/>
			</form>
		);
	}
}
