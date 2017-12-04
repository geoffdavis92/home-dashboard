import styled from "styled-components";

import { modes, colors, measurements } from "./themes";

/**
 * CSS Prop helpers
 */
const grid: Function = (name, defaultValue): Function => props => {
	let value = props[name];
	if (!value && typeof defaultValue === "undefined") return "";
	if (!value) value = defaultValue;
	/**
	 * Grid has many grid-*-* properties; underscores should be used in props
	 * and string keys to keep this syntax uniform and terse.
	 *
	 * Underscores should be replaced with dashes when style string literal
	 * is returned.
	 */
	return `grid-${name.replace(/\_/g, "-")}: ${value};`;
};

/**
 * Theming helpers
 */
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

/**
 * Style-setting higher-order-functions
 */
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

export { grid, getThemeStyles, withGlobalStyles, withTypography };
