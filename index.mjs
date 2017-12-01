// Node modules
import fs from "fs";

// npm modules
import bodyParser from "body-parser";
import express from "express";
import ejs from "ejs";

// Local modules
import routes from "./server/routes";
import settings from "./server/settings";

// Init express
const server = express();

// Setup server
server.engine("html", ejs.renderFile);
server.set("view engine", "html");
server.set("views", "server/views");

// Setup middleware
server.use("/static", express.static("server/assets"));
server.use(bodyParser.json());

// Setup routes
server.get("/", (req, res) => {
	res.render("index", {});
});

// Start server
console.log(`\nServer running at ${process.env.PORT || settings.PORT}\n`);
server.listen(process.env.PORT || settings.PORT);
