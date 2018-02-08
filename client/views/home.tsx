import * as React from "react";

import Button from "atoms/Button";
import { GridWrapper } from "atoms/Container";
import { Card } from "atoms/Panel";
import { PageState } from "../utilities/types.d";

const HomeGrid = GridWrapper("main");

export default ({ id, appState }: PageState) => {
	return (
		<HomeGrid
			id={id}
			template_columns={{
				0: `repeat(1,100%)`,
				768: `repeat(2,calc(50% - 1em))`,
				1100: `repeat(3,calc(33% - 1em))`
			}}
			gap={{ 0: `1em 0`, 768: `1em` }}
			justify_content="center"
		>
			<Card shadow>
				<p>Standard card</p>
			</Card>
			<Card danger outline shadow>
				<p>Themed card: danger</p>
			</Card>
		</HomeGrid>
	);
};
