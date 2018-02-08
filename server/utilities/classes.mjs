import mysql from "mysql";
// import { asyncAdapter } from "./functions";

class MySQL {
	constructor(NODE_ENV) {
		this.connectionConfig = {
			host: "localhost",
			port: "3306",
			user: "root",
			password: "root",
			socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
			database: "home_dashboard"
		};
		this.connection = mysql.createConnection(this.connectionConfig);
		this.prepare = this.prepare.bind(this);
		this.query = this.query.bind(this);
	}
	async prepare(query) {}
	async query(query) {
		return new Promise((resolve, reject) => {
			this.connection.query(query, (err, results, fields) => {
				if (err) reject(err);
				return resolve({ results, fields });
			});
		});
	}
}

export { MySQL };
