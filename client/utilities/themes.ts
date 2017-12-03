import styled from "styled-components";

const colors = {
	black: "#343434",
	white: "#f7f6f5",
	gray: "#aaa"
};

const measurements = {
	fontSize: 20,
	padding: 1.25,
	radius: 2
};

const units = {
	em: "em",
	px: "px"
};

const globalStyles = {
	backgroundColor: colors.white,
	color: colors.black,
	fontSize: measurements.fontSize + units.px,
	margin: 0,
	padding: 0
};

const withGlobalStyles = (component: Function) => styled(component)`
	background-color: ${colors.white};
	color: ${colors.black};
	font-family: "Roboto", sans-serif;
	font-size: ${measurements.fontSize}px;
	margin: 0;
	padding: 0;
`;

const withTypography = (component: Function) => styled(component)`
	font-family: "Roboto", sans-serif;
	font-size: ${measurements.fontSize}px;
`;

export {
	colors,
	measurements,
	units,
	globalStyles,
	withGlobalStyles,
	withTypography
};
