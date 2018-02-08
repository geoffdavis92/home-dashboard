import * as React from "react";
import styled from "styled-components";

import Label from "atoms/Label";
import { getThemeStyles } from "utilities/helpers";

const FormField = styled("fieldset")`
	border: none;
	line-height: 1;
	${getThemeStyles};
`;

export default ({
	children,
	id,
	text,
	align
}: {
	children: any;
	id: string;
	text?: string;
	align?: string;
}) => (
	<FormField>
		<Label htmlFor={id} {...{ align, text }}>
			{React.Children.map(children, child =>
				React.cloneElement(child as React.ReactElement<any>, {
					id,
					name: id
				})
			)}
		</Label>
	</FormField>
);
