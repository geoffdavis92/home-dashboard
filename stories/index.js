import React, { Component, Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

import Button from "atoms/Button.tsx";
import GlobalContainer, { Aside, Main, Section, Grid } from "atoms/Container";
import Panel, { Card } from "atoms/Panel";

import TypeAhead from "molecules/TypeAhead";

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
	))
	.add("Grid", () => (
		<GlobalContainer>
			<Grid template_columns="repeat(4,calc(25% - .5em))" column_gap=".5em">
				<p style={{ textAlign: "center" }}>Grid Item 1</p>
				<p style={{ textAlign: "center" }}>Grid Item 2</p>
				<p style={{ textAlign: "center" }}>Grid Item 3</p>
				<p style={{ textAlign: "center" }}>Grid Item 4</p>
				<p style={{ textAlign: "center" }}>Grid Item 5</p>
				<p style={{ textAlign: "center" }}>Grid Item 6</p>
				<p style={{ textAlign: "center" }}>Grid Item 7</p>
				<p style={{ textAlign: "center" }}>Grid Item 8</p>
				<p style={{ textAlign: "center" }}>Grid Item 9</p>
				<p style={{ textAlign: "center" }}>Grid Item 10</p>
				<p style={{ textAlign: "center" }}>Grid Item 11</p>
				<p style={{ textAlign: "center" }}>Grid Item 12</p>
			</Grid>
		</GlobalContainer>
	));

storiesOf("atoms/Panel", module)
	.add("default", () => (
		<Panel>
			<p>Inside a panel</p>
		</Panel>
	))
	.add("card", () => (
		<Card>
			<p>Inside a card</p>
		</Card>
	));

storiesOf("molecules/TypeAhead", module).add("default", () => (
	<GlobalContainer>
		<TypeAhead
			options={[
				"alpha",
				"bravo",
				"charlie",
				"delta",
				"echo",
				"foxtrot",
				"gulf",
				"hotel",
				"india",
				"juliet",
				"kilo",
				"lima",
				"mike"
			]}
		/>
	</GlobalContainer>
));
