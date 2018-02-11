import express from "express";
import mysql from "mysql";
import { routeLogger } from "./middleware/";
import database from "./middleware/database";

const BaseRouter = express.Router();
const v1APIRouter = express.Router();

BaseRouter.get("*", routeLogger, (req, res) => {
	res.render("index", {
		fn: {
			addStyles: function addStyles() {
				return `<style>
					body {
						background-color: #f9f7f5;
						color: #343434;
						font-size: 20px;
						margin: 0;
						padding: 0;
					}
				</style>`;
			}
		}
	});
});

v1APIRouter.get("/shoppingList", routeLogger, async (req, res) => {
	const { results } = await database.query(`SHOW DATABASES;`);
	res.json(results.map(r => r.Database));
});

v1APIRouter.post("/shoppingList", routeLogger, async (req, res) => {
	res.json({ error: true, message: "Cannot POST to /shoppingList" });
});

v1APIRouter.post("/shoppingList/:action", routeLogger, async (req, res) => {
	let response;
	const { category, unit, count, price } = req.body;
	const { action } = req.params;
	const ACTION = action.toUpperCase();
	switch (ACTION) {
		case "CREATE": {
			/**
			 * TODO:
			 * - Add query to add category to database if categoryCreated in req.body, return category resultID
			 * - Add query to add unit to database if unitCreated in req.body, return unit resultID
			 * - Adjust category, unit columns in shopping_list table to be foreign keys
			 */

			const { results: categoryMatch } = await database.prepare(
				`SELECT id from categories where title = ?;`,
				[category]
			);
			const { results: unitMatch } = await database.prepare(
				`SELECT id from units where title = ?;`,
				[unit]
			);

			const { id: categoryID } = categoryMatch[0];
			const { id: unitID } = unitMatch[0];

			const addItem = await database.prepare(
				"INSERT INTO shopping_list(`id`,`category`,`unit`,`count`,`price`,`note`,`create_date`,`expire_date`) VALUES (null,?,??,??,?,??,CURRENT_TIMESTAMP,?);",
				[categoryID, unitID, count, price, null, null]
			);

			response = {
				success: true,
				error: false,
				message: `shoppingList item created.`
			};
			break;
		}
		default: {
			response = {};
		}
	}
	res.json(response);
});

v1APIRouter.get("/categories", routeLogger, async (req, res) => {
	const { results } = await database.query(`SELECT * FROM categories WHERE 1;`);
	// console.log(results);
	res.json(results.map(({ title }) => title));
});

v1APIRouter.post("/categories/:action", routeLogger, async (req, res) => {
	let response;
	const { action } = req.params;
	const ACTION = action.toUpperCase();
	switch (ACTION) {
		case "CREATE": {
			console.log(req.body);
			response = {
				error: false,
				success: true,
				message: req.body
			};
			break;
		}
		default: {
			response = {
				error: true,
				success: true,
				message: `Action ${ACTION} is not supported`
			};
		}
	}
	res.json(response);
});

export default BaseRouter;

export { v1APIRouter };
