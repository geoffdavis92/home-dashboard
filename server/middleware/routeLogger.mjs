import { notify, bold } from "../utilities/functions";

export default ({ route }, res, next) => {
	console.log(notify(bold(route.path)));
	next();
};
