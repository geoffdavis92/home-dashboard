import { notify, bold } from "../utilities/functions";

export default async ({ method, originalUrl }, res, next) => {
	const date = new Date(Date.now());
	const timestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}/${date.getMonth() +
		1}/${date.getFullYear()}`;
	console.log(`${timestamp} ${notify(`${bold(method)} ${originalUrl}`)}`);
	next();
};
