import { APIOptions } from "./types.d";

class API {
	baseAPIRoute: string;
	version: number;
	constructor({ version }) {
		this.version = version;
		this.baseAPIRoute = `/api/v${this.version}`;
	}
	get = async (endpoint: string = "/"): Promise<Object> =>
		await fetch(`${this.baseAPIRoute}${endpoint}`).then(res => res.json());
	post = async (endpoint: string = "/", options: APIOptions): Promise<Object> =>
		await fetch(`${this.baseAPIRoute}${endpoint}`, options).then(res =>
			res.json()
		);
}

export { API };
