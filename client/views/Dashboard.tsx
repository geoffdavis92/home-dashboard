import * as React from "react";

import { GridWrapper } from "atoms/Container";
import { Card } from "atoms/Panel";
import SubmissionForm from "organisms/SubmissionForm";
import { API } from "utilities/constants";
import { withGlobalStyles } from "utilities/helpers";
import { PageState, LocalItem } from "utilities/types";

const DashboardGrid = GridWrapper("main");

export default class Dashboard extends React.Component<
	PageState,
	{ categories: string[]; localItems: LocalItem[] }
> {
	constructor(props, context) {
		super(props, context);
		this.state = { categories: [], localItems: [] };
	}
	async componentDidMount() {
		const categories = await API.get("/categories");
		this.setState(prevState => ({ categories }));
	}
	render() {
		const { id, appState } = this.props;
		return (
			<DashboardGrid
				id={id}
				template_columns={{
					0: `repeat(1,100%)`,
					768: `repeat(2,calc(50% - 1em))`,
					1100: `repeat(3,calc(33% - 1em))`
				}}
				gap={{ 0: `1em 0`, 768: `1em` }}
				justify_content="center"
			>
				<Card outline>
					<SubmissionForm categories={this.state.categories} />
				</Card>
			</DashboardGrid>
		);
	}
}
