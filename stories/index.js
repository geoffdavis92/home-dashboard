import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Container from "../client/components/atoms/Container";

storiesOf("Welcome", module).add("to Storybook", () => (
	<Welcome showApp={linkTo("Button")} />
));

storiesOf("atoms/Button", module).add("default", () => <button />);
storiesOf("atoms/Container", module).add("default", () => <button />);
