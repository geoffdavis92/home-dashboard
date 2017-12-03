import * as React from "react";
import Header from "molecules/Header";
import Container from "atoms/Container";

export default props => <>
	<Header />
	<Container {...props} />
</>;
