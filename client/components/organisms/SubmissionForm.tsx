import * as React from "react";
import styled from "styled-components";
import Downshift from "downshift";

import Button from "atoms/Button";
import Input, { InputWrapper } from "atoms/Input";
import FormField from "molecules/FormField";
import Typeahead from "molecules/Typeahead";

export default class SubmissionForm extends React.Component<
	{ categories },
	{}
> {
	// prop typing
	Form: HTMLFormElement;
	Typeahead: any;
	formID: string;

	constructor(props, context) {
		super(props, context);
		this.formID = "SubmissionForm";
		this.submit = this.submit.bind(this);
	}
	submit(e) {
		e.preventDefault();
		const { inputValue } = this.Typeahead.Downshift.state;
		const formValues = Array.from(
			document.querySelectorAll(`#${this.formID} [name]`)
		)
			.map(
				(el: HTMLInputElement) =>
					el.name && el.name !== "submit" ? { [el.name]: el.value } : false
			)
			.filter(val => val);
		const typeaheadValue = { category: inputValue };

		if (!this.props.categories.includes(inputValue)) {
			Object.assign(typeaheadValue, { categoryCreated: new Date(Date.now()) });
		}
		formValues.push(typeaheadValue);
	}
	render() {
		return (
			<form id={this.formID} onSubmit={this.submit} ref={n => (this.Form = n)}>
				<FormField id="category" text="Category">
					<Typeahead
						options={this.props.categories}
						ref={n => (this.Typeahead = n)}
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
