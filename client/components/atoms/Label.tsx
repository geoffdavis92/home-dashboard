import * as React from "react";
import styled from "styled-components";

const Label = styled("label")`
	display: block;
	${({ align }) => `text-align: ${align ? align : "left"}`};
`;

const LabelTextWrapper = styled("span")`
	display: block;
	margin: 0 auto 0.5em;
`;

export default ({ children, htmlFor, text, ...rest }) => (
	<Label htmlFor={htmlFor} {...rest}>
		<LabelTextWrapper>{text}</LabelTextWrapper>
		{children}
	</Label>
);
