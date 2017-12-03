import React, { Component, Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

import Button from "atoms/Button";
import GlobalContainer, { Aside, Main, Section } from "atoms/Container";

storiesOf("Welcome", module).add("to Storybook", () => (
	<Welcome showApp={linkTo("Button")} />
));

storiesOf("atoms/Button/standard", module)
	.add("default", () => (
		<GlobalContainer style={{ padding: "1em" }}>
			<Button>Default Button</Button>
		</GlobalContainer>
	))
	.add("success", () => (
		<GlobalContainer style={{ padding: "1em" }}>
			<Button success>success Button</Button>
		</GlobalContainer>
	))
	.add("warn", () => (
		<GlobalContainer style={{ padding: "1em" }}>
			<Button warn>warn Button</Button>
		</GlobalContainer>
	))
	.add("danger", () => (
		<GlobalContainer style={{ padding: "1em" }}>
			<Button danger>danger Button</Button>
		</GlobalContainer>
	))
	.add("disabled", () => (
		<GlobalContainer style={{ padding: "1em" }}>
			<Button disabled>disabled Button</Button>
		</GlobalContainer>
	));

storiesOf("atoms/Button/link", module)
	.add("default", () => (
		<GlobalContainer style={{ padding: "1em" }}>
			<Button link>Default Button</Button>
		</GlobalContainer>
	))
	.add("success", () => (
		<GlobalContainer style={{ padding: "1em" }}>
			<Button link success>
				Link success Button
			</Button>
		</GlobalContainer>
	))
	.add("warn", () => (
		<GlobalContainer style={{ padding: "1em" }}>
			<Button link warn>
				Link warn Button
			</Button>
		</GlobalContainer>
	))
	.add("danger", () => (
		<GlobalContainer style={{ padding: "1em" }}>
			<Button link danger>
				Link danger Button
			</Button>
		</GlobalContainer>
	))
	.add("disabled", () => (
		<GlobalContainer style={{ padding: "1em" }}>
			<Button link disabled>
				Link disabled Button
			</Button>
		</GlobalContainer>
	));

storiesOf("atoms/Container", module)
	.add("GlobalContainer", () => (
		<GlobalContainer>
			<p style={{ margin: 0, padding: "1em" }}>
				<h2>
					<code>GlobalContainer</code>
				</h2>
				<br />
				<Fragment>
					A <code>{"<main>"}</code> element wrapped with the app's global styles
					via <code>styled-components</code>.
				</Fragment>
			</p>
		</GlobalContainer>
	))
	.add("Main/Section/Aside", () => (
		<GlobalContainer
			style={{ display: "grid", "grid-template-columns": "60% 40%" }}
		>
			<Section
				style={{
					backgroundColor: "rebeccapurple",
					color: "cyan",
					padding: "1em"
				}}
			>
				<Main>
					<p style={{ margin: 0 }}>Main inside a Section</p>
					<p>
						Styles may be applied on a later basis, but probably just for
						Section and Article containers, since Main elements can semantically
						go inside any container element.
					</p>
				</Main>
			</Section>
			<Aside
				style={{ backgroundColor: "tomato", color: "#fdfdfc", padding: "1em" }}
			>
				<p style={{ margin: 0 }}>Aside</p>
				<p>May deprecate</p>
			</Aside>
		</GlobalContainer>
	));
