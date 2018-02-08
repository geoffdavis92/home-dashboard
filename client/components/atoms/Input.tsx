import * as React from "react";
import styled from "styled-components";

import { getThemeStyles } from "../../utilities/helpers";
import { colors, measurements } from "../../utilities/themes";

const StyledInputWrapper = styled("div")`
	background-color: ${({ disabled }) => (disabled ? "#ddd" : colors.white)};
	border: 1px solid ${colors.black};
	border-radius: ${measurements.radius}px;
	color: ${({ disabled }) => (disabled ? colors.gray : colors.black)};
	font-size: 1em;
	padding: 0.25em 0.5em;
	position: relative;
	${getThemeStyles};
`;

const InputWrapper = ({
	children,
	default: defaultTheme,
	disabled,
	danger,
	warn,
	success,
	...restInputWrapperProps
}: {
	children;
	default?: boolean;
	disabled?: boolean;
	danger?: boolean;
	warn?: boolean;
	success?: boolean;
	restInputWrapperProps?: Object;
}) => (
	<StyledInputWrapper
		{...{
			default: defaultTheme,
			disabled,
			danger,
			warn,
			success
		}}
	>
		{React.Children.map(children, child =>
			React.cloneElement(child as React.ReactElement<any>, {
				...restInputWrapperProps
			})
		)}
	</StyledInputWrapper>
);

const StandardInput = styled("input")`
	background-color: ${({ disabled }) => (disabled ? "#ddd" : colors.white)};
	border: ${({ inset }) => (!inset ? `1px solid ${colors.black}` : "none")};
	border-radius: ${measurements.radius}px;
	color: ${({ disabled }) => (disabled ? colors.gray : colors.black)};
	font-size: 1em;
	${({ inset }) => !inset && "padding: 0.25em 0.5em"};
	outline: none;
	${({ inset }) => (!inset ? "width: calc(100% - 1em - 2px)" : "width: 100%")};
	${getThemeStyles};
`;

export default class Input extends React.Component<any, {}> {
	render() {
		const { type = "text", ...restInputProps } = this.props;
		switch (type) {
			case "select": {
				const { children, ...restSelectProps } = restInputProps;
				return <select {...restSelectProps}>children}</select>;
			}
			case "textarea": {
				return <textarea {...restInputProps} />;
			}
			default: {
				return <StandardInput {...this.props} />;
			}
		}
	}
}

export { InputWrapper };
