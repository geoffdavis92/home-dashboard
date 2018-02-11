import * as React from "react";
import styled from "styled-components";
import Downshift from "downshift";

import Button from "atoms/Button";
import Input, { InputWrapper } from "atoms/Input";
import FormField from "molecules/FormField";
import Typeahead from "molecules/Typeahead";
import { parseInputValue, post } from "utilities/functions";

export default class SubmissionForm extends React.Component<
	{ categories; units },
	{ hasError: boolean }
> {
	// prop typing
	Form: HTMLFormElement;
	CategoryTypeahead: any;
	UnitTypeahead: any;
	formID: string;

	constructor(props, context) {
		super(props, context);
		this.formID = "SubmissionForm";
		this.state = { hasError: false };
	}
	handleError = (): void => {};
	handleSuccess = (): void => {};
	submit = async (e): Promise<void> => {
		e.preventDefault();
		const {
			inputValue: categoryInputValue
		} = this.CategoryTypeahead.Downshift.state;
		const { inputValue: unitInputValue } = this.UnitTypeahead.Downshift.state;
		const formValues = Array.from(
			document.querySelectorAll(`#${this.formID} [name]`)
		)
			.map(
				(el: HTMLInputElement) =>
					el.name && el.name !== "submit"
						? { [el.name]: parseInputValue(el.value) }
						: false
			)
			.filter(val => val);
		const categoryTypeaheadValue = { category: categoryInputValue };
		const unitTypeaheadValue = { unit: unitInputValue };

		if (!this.props.categories.includes(categoryInputValue)) {
			Object.assign(categoryTypeaheadValue, {
				categoryCreated: new Date(Date.now())
			});
		}
		if (!this.props.units.includes(unitTypeaheadValue)) {
			Object.assign(unitTypeaheadValue, {
				unitCreated: new Date(Date.now())
			});
		}

		formValues.push(categoryTypeaheadValue);
		formValues.push(unitTypeaheadValue);

		const reducedFormValues = formValues
			.map(v => {
				const pairs = Object.keys(v).map(key => ({
					key,
					value: v[key]
				}));
				return pairs;
			})
			.reduce((acc, pairs) => {
				pairs.forEach(({ key, value }) => {
					acc[key] = value;
				});
				return acc;
			}, {});

		const postResponse = await post(
			"/api/v1/categories/create",
			reducedFormValues
		);

		if (postResponse.error) {
			this.setState(
				prevState => ({ hasError: true }),
				() => this.handleError()
			);
		} else {
			this.CategoryTypeahead.Downshift.clearSelection();
			this.UnitTypeahead.Downshift.clearSelection();
			this.Form.reset();
			this.setState(
				prevState => ({ hasSuccess: true }),
				() => this.handleSuccess()
			);
		}
	};
	render() {
		return (
			<form id={this.formID} onSubmit={this.submit} ref={n => (this.Form = n)}>
				<FormField id="category" text="Category">
					<Typeahead
						options={this.props.categories}
						ref={n => (this.CategoryTypeahead = n)}
					/>
				</FormField>
				<FormField id="unit" text="Unit">
					<Typeahead
						options={this.props.units}
						ref={n => (this.UnitTypeahead = n)}
					/>
				</FormField>
				<FormField id="count" text="Count">
					<Input type="number" min={0} />
				</FormField>
				<FormField id="price" text="Price">
					<InputWrapper>
						<Input type="number" step="any" inset />
					</InputWrapper>
				</FormField>
				<FormField id="submit" align="right">
					<Button type="submit">Submit</Button>
				</FormField>
			</form>
		);
	}
}
