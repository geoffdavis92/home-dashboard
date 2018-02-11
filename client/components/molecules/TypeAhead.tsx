import * as React from "react";
import styled from "styled-components";
import Downshift from "downshift";
import * as PropTypes from "prop-types";

import Input from "../atoms/Input";
import { getThemeStyles } from "../../utilities/helpers";
import { addons, colors, measurements } from "../../utilities/themes";

const TypeaheadWrapper = styled("div")`
	${getThemeStyles};
	background-color: ${({ disabled }) => (disabled ? "#ddd" : colors.white)};
	border: 1px solid ${colors.black};
	border-radius: ${measurements.radius}px;
	color: ${({ disabled }) => (disabled ? colors.gray : colors.black)};
	font-size: 1em;
	padding: 0.25em 0.5em;
	position: relative;
`;

const TypeaheadSelection = styled("main")`
	background-color: ${colors.white};
	border: 1px solid #000;
	border-radius: ${measurements.radius}px;
	box-shadow: 0 0.15rem 0.4rem ${colors.gray};
	padding: 0.5em;
	position: absolute;
	top: calc(100% + 0.5em);
	left: -1px;
	width: calc(100% - 1em);
`;

const TypeaheadOption = styled("p")`
	${({ highlighted }) =>
		highlighted && `background-color: ${colors.grayLight};`};
	line-height: 1;
	margin: 0.25em auto;
	padding: 0.25em;
`;

export default class Typeahead extends React.Component<
	{ options: any[]; updateForm?: Function },
	{ categoryCreated: boolean }
> {
	// prop typing
	Downshift: any;

	// static props
	static propTypes = {
		options: PropTypes.arrayOf(PropTypes.string),
		updateForm: PropTypes.func
	};
	static defaultProps = { options: [], updateForm: () => {} };

	constructor(props, context) {
		super(props, context);
		this.state = { categoryCreated: false };
	}
	render() {
		const { options } = this.props;
		return (
			<Downshift
				ref={n => (this.Downshift = n)}
				onStateChange={(changes, { clearSelection }) => {
					const { inputValue, isOpen } = this.Downshift.state;
					if (inputValue === "" && isOpen) {
						clearSelection();
					}
				}}
			>
				{({
					getRootProps,
					getInputProps,
					getItemProps,
					isOpen,
					inputValue,
					selectedItem,
					highlightedIndex
				}) => {
					const AddItemComponent = (
						<TypeaheadOption
							{...getItemProps({
								item: inputValue,
								onChange: e =>
									this.setState(prevState => ({
										categoryCreated: true
									}))
							})}
							highlighted={highlightedIndex === 0}
						>
							<i style={{ color: colors.grayDark }}>Add "{inputValue}"</i>
						</TypeaheadOption>
					);
					return (
						<TypeaheadWrapper
							{...getRootProps({
								refKey: "innerRef"
							})}
						>
							<Input type="text" {...getInputProps()} inset />
							{isOpen ? (
								<TypeaheadSelection>
									{options.length > 0
										? (() => {
												const filteredOptions = options.filter(
													option =>
														inputValue === option ||
														option
															.toLowerCase()
															.includes(inputValue.toLowerCase())
												);
												return filteredOptions.length > 0
													? filteredOptions.map((item, index) => (
															<TypeaheadOption
																key={item}
																{...getItemProps({
																	item
																})}
																highlighted={highlightedIndex === index}
															>
																{item}
															</TypeaheadOption>
														))
													: AddItemComponent;
											})()
										: AddItemComponent}
								</TypeaheadSelection>
							) : null}
						</TypeaheadWrapper>
					);
				}}
			</Downshift>
		);
	}
}
