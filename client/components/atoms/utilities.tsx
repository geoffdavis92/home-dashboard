import * as React from "react";

const withUnmountAction: Function = (
	WrappedComponent,
	unmountAction: Function
) =>
	class extends React.Component {
		constructor(props, context) {
			super(props, context);
		}
		componentWillUnmount() {
			unmountAction();
		}
		render() {
			return <WrappedComponent {...this.props} />;
		}
	};

export { withUnmountAction };
