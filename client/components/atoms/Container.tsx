import * as React from "react";
import { withGlobalStyles } from "utilities/themes";

export default withGlobalStyles(({ children, ...rest }) => (
	<main {...rest}>{children}</main>
));
