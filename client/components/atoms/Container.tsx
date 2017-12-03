import * as React from "react";
import { withGlobalStyles, withTypography } from "../../utilities/helpers";

const GlobalContainer = withGlobalStyles(props => <main {...props} />);
const Aside = withTypography(props => <aside {...props} />);
const Main = withTypography(props => <main {...props} />);
const Section = withTypography(props => <section {...props} />);

export default GlobalContainer;

export { Aside, Main, Section };
