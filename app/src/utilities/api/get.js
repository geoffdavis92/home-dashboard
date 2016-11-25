import AJAX from 'ajax.js'
import Params from '../params'

export default function get(url='/api/get.php',options={query:''},callback=()=>false) {
	let queryString;
	if (typeof options.query !== 'string') {
		const params = new Params(options.query);
		queryString = params.setup(options.query);
	} else {
		queryString = options.query;
	}
	AJAX.get(`${url}${queryString}`,null,function(res) {
		if (callback) {
			return callback(res)
		} else {
			return false;
		}
	})
}