import * as React from "react";
import { withGlobalStyles, withTypography } from "utilities/themes";

const Container = withGlobalStyles(({ children, ...rest }) => (
	<main {...rest}>{children}</main>
));

const Aside = withTypography(props => <aside {...props} />);
const Main = withTypography(props => <main {...props} />);
const Section = withTypography(props => <section {...props} />);

export default Container;

export { Aside, Main, Section };
