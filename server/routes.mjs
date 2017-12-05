import express from "express";
import { routeLogger } from "./middleware/index";

const BaseRouter = express.Router();

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

export default BaseRouter;
