import mysql from "mysql";

// const _sql =
// 	"INSERT INTO shopping_list(`id`,`category`,`unit`,`count`,`price`,`note`,`create_date`,`expire_date`) VALUES (null,??,??,??,??,??,CURRENT_TIMESTAMP,?);";
// const _inserts = [1, "test", 1, 1.54534543, null, null];
// const _preparedSQL = mysql.format(_sql, _inserts);

// console.log({ _preparedSQL });

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

	async prepare(query, values) {
		console.log({ query, values });

		let preparedQuery = query;
		const preparedSQL = mysql.format(query, values);

		if (preparedSQL.search("VALUES") >= 0) {
			const [insertClause, valuesClause] = preparedSQL.split("VALUES");
			const escapedPreparedSQL = [
				insertClause,
				valuesClause.replace(/\`/g, '"')
			].join("VALUES");

			preparedQuery = escapedPreparedSQL;
		}

		return new Promise((resolve, reject) => {
			this.connection.query(preparedQuery, values, (err, results, fields) => {
				if (err) reject(err);
				return resolve({ results, fields });
			});
		});
	}

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
