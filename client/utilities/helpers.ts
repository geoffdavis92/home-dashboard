import styled from "styled-components";

import { modes, colors, measurements } from "./themes";

/**
 * CSS Prop helpers
 */
const mapResponsiveValues: Function = (
	mediaQueryObject: Object,
	propertyName: string
): string =>
	Object.keys(mediaQueryObject)
		.map(
			(key: string) =>
				key !== "0"
					? `@media only screen and (min-width: ${key}px) { 	
						${propertyName}: ${mediaQueryObject[key]};
					}`
					: `${propertyName}: ${mediaQueryObject[key]};`
		)
		.join("\n");

const grid: Function = (name, defaultValue): Function => props => {
	let value: string | Object = props[name];
	const valueHasResponsiveStyles: boolean = typeof value === "object";
	/**
	 * Grid has many grid-*-* properties; underscores should be used in props
	 * and string keys to keep this syntax uniform and terse.
	 *
	 * Underscores should be replaced with dashes when style string literal
	 * is returned.
	 */
	const computedCSSProperty = `grid-${name.replace(/\_/g, "-")}`;

	if (!value && typeof defaultValue === "undefined") return "";
	if (!value) value = defaultValue;

	if (valueHasResponsiveStyles) {
		// const mappedResponsiveValues = Object.keys(value)
		// 	.map(
		// 		(key: string) =>
		// 			key !== "0"
		// 				? `@media only screen and (min-width: ${key}px) {
		// 				${computedCSSProperty}: ${value[key]};
		// 			}`
		// 				: `${computedCSSProperty}: ${value[key]};`
		// 	)
		// 	.join("\n");
		return mapResponsiveValues(value, computedCSSProperty);
	} else {
		return `${computedCSSProperty}: ${value};`;
	}
};

/**
 * Theming helpers
 */
const getThemeStyles: Function = (props: Object): string => {
	const propKeys: string[] = [...Object.keys(props)];
	const [themeStyle]: string[] = propKeys
		.filter(key => key !== "link" && key !== "outline")
		.map(
			key =>
				propKeys.includes("link")
					? modes.link[key]
					: propKeys.includes("outline")
						? modes.outline[key]
						: modes.standard[key]
		);
	if (propKeys.length === 0 || !themeStyle) {
		return propKeys.includes("link")
			? modes.link.default
			: propKeys.includes("outline")
				? modes.outline.default
				: modes.standard.default;
	}
	return themeStyle;
};

/**
 * Style-setting higher-order-functions
 */
const withGlobalStyles = (componentType: string) => styled(componentType)`
	* {
		font-family: "Roboto", sans-serif;
		font-size: ${measurements.fontSize}px;
	}
	background-color: ${colors.white};
	color: ${colors.black};
	margin: 0;
	padding: 0;
`;

export { grid, getThemeStyles, withGlobalStyles };
