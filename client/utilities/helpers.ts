import styled from "styled-components";

import { modes, colors, measurements } from "./themes";

const getThemeStyles: Function = (props: Object): string => {
	const propKeys: string[] = [...Object.keys(props)];
	const [themeStyle]: string[] = propKeys
		.filter(key => key !== "link")
		.map(
			key => (propKeys.includes("link") ? modes.link[key] : modes.standard[key])
		);
	if (propKeys.length === 0 || !themeStyle) {
		return propKeys.includes("link")
			? modes.link.default
			: modes.standard.default;
	}
	return themeStyle;
};

const withTypography = (component: Function) => styled(component)`
	* {
		font-family: "Roboto", sans-serif;
		font-size: ${measurements.fontSize}px;
	}
`;

const withGlobalStyles = (component: Function) => styled(
	withTypography(component)
)`
	background-color: ${colors.white};
	color: ${colors.black};
	margin: 0;
	padding: 0;
`;

export { getThemeStyles, withGlobalStyles, withTypography };
