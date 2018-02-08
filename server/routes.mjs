import express from "express";
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

v1APIRouter.get("/categories", routeLogger, async (req, res) => {
	const { results } = await database.query(`SELECT * FROM categories WHERE 1;`);
	console.log(results);
	res.json(results.map(({ title }) => title));
});

export default BaseRouter;

export { v1APIRouter };
