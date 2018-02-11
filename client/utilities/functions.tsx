import { RequestOptions, RequestResponse } from "types";

const parseInputValue = (v: string) =>
	!isNaN(parseFloat(v)) ? parseFloat(v) : v;

const request = (
	endpoint: string,
	options: RequestOptions = { method: "get" }
): Promise<RequestResponse> => fetch(endpoint, options).then(res => res.json());

const get = (endpoint: string): Promise<RequestResponse> => request(endpoint);

const post = (endpoint: string, data: object): Promise<RequestResponse> =>
	request(endpoint, {
		method: "POST",
		headers: new Headers({ "Content-Type": "application/json" }),
		body: JSON.stringify(data)
	});

export { get, parseInputValue, post, request };
