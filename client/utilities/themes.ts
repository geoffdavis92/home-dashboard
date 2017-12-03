import styled from "styled-components";

const colors = {
	black: "#343434",
	white: "#f7f6f5",
	gray: "#aaa",
	grayDark: "#666",
	grayLight: "#ccc",
	red: "#ca1211",
	green: "#11ca12",
	yellow: "#f7c200"
};

/**
 * Note: leave semicolon on last property,
 * in order for Prettier to properly format
 * the call to getThemeStyles in the JSX
 * template literal.
 */
const modes = {
	standard: {
		default: `
	background-color: ${colors.black};
	border-color: ${colors.black};
	color: ${colors.white}`,
		disabled: `
	background-color: ${colors.grayLight};
	border-color: ${colors.grayLight};
	color: ${colors.gray};
	cursor: not-allowed`,
		danger: `
	background-color: ${colors.red};
	border-color: ${colors.red};
	color: ${colors.white}`,
		warn: `
	background-color: ${colors.yellow};
	border-color: ${colors.yellow};
	color: ${colors.white}`,
		success: `
	background-color: ${colors.green};
	border-color: ${colors.green};
	color: ${colors.white}`
	},
	link: {
		default: `
	background-color: ${colors.white};
	border-color: ${colors.white};
	color: ${colors.black}`,
		disabled: `
	background-color: ${colors.white};
	border-color: ${colors.white};
	color: ${colors.grayLight};
	cursor: not-allowed`,
		danger: `
	background-color: ${colors.white};
	border-color: ${colors.white};
	color: ${colors.red}`,
		warn: `
	background-color: ${colors.white};
	border-color: ${colors.white};
	color: ${colors.yellow}`,
		success: `
	background-color: ${colors.white};
	border-color: ${colors.white};
	color: ${colors.green}`
	}
};

const measurements = {
	fontSize: 18,
	padding: 1.25,
	radius: 2
};

const units = {
	em: "em",
	px: "px"
};

export { colors, measurements, modes, units };
