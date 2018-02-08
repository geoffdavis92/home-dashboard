import { MySQL } from "../utilities/classes";
import { notify, bold } from "../utilities/functions";

const database = new MySQL();

const databaseSetup = (async () => {
	let tablesCreated = 0;

	// Use database
	const useDBQuery = await database.query(`USE home_dashboard;`);

	/**
	 * Check for categories table
	 * Code from http://bit.ly/2BucKak
	 */

	// Check for categories table
	const { results: categoryExistsResults } = await database.query(`
		SELECT count(*)
		FROM information_schema.tables
		WHERE table_schema = 'home_dashboard'
		AND table_name = 'categories'
	`);

	// Log table creation
	if (!categoryExistsResults[0]["count(*)"]) {
		console.log(notify(`Database: Creating TABLE ${bold("categories")}`));
	}

	// Create categories table
	const createCategoriesQuery = await database.query(`CREATE TABLE IF NOT EXISTS categories (
			id INT(5) NOT NULL AUTO_INCREMENT,
			title VARCHAR(500),
			create_date TIMESTAMP,
			PRIMARY KEY(id)
		) AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;
	`);

	// Check for shopping_list table
	const { results: homeDashboardExistsResults } = await database.query(`
		SELECT count(*)
		FROM information_schema.tables
		WHERE table_schema = 'home_dashboard'
		AND table_name = 'shopping_list'
	`);

	// Log table creation
	if (!homeDashboardExistsResults[0]["count(*)"]) {
		console.log(notify(`Database: Creating TABLE ${bold("shopping_list")}`));
	}

	// Create shopping_list table
	const createShoppingListQuery = await database.query(`
		CREATE TABLE IF NOT EXISTS shopping_list (
			id INT(5) NOT NULL AUTO_INCREMENT,
			category INT(5),
			note VARCHAR(10000),
			count TINYINT(2),
			price DECIMAL(6,2),
			create_date TIMESTAMP,
			expire_date DATETIME,
			PRIMARY KEY(id)
		) AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;
	`);
})();

const addItem = async (req, res, next) => {
	next();
};

export default database;

export { addItem };

/**
 * 
		CREATE TABLE IF NOT EXISTS shopping_list (
			id INT(5) NOT NULL AUTO_INCREMENT,
			category INT(5),
			note VARCHAR(10000),
			count TINYINT(2),
			price DECIMAL(6,2),
			create_date TIMESTAMP,
			expire_date DATETIME,
			PRIMARY KEY(id)
		) AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

		CREATE TABLE IF NOT EXISTS categories (
			id INT(5) NOT NULL AUTO_INCREMENT,
			title VARCHAR(500),
			PRIMARY KEY(id)
		) AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;
 */
