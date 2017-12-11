import * as React from "react";

import Default from "layouts/Default";
import Button from "atoms/Button";
import { GridWrapper } from "atoms/Container";
import { Card } from "atoms/Panel";

const HomeGrid = GridWrapper("main");

export default ({ appState }) => {
	return (
		<Default pageID={"home"}>
			<HomeGrid
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
		</Default>
	);
};
