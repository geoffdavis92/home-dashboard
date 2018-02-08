// Node modules
import fs from "fs";

// npm modules
import bodyParser from "body-parser";
import express from "express";
import ejs from "ejs";

// Local modules
import settings from "./server/settings";
import BaseRouter, { v1APIRouter } from "./server/routes";
import database from "./server/middleware/database";
import { green, bold } from "./server/utilities/functions";

// Init express
const server = express();

// Setup server
server.engine("html", ejs.renderFile);
server.set("view engine", "html");
server.set("views", "server/views");

// Setup middleware
server.use("/static", express.static("server/assets"));
server.use("/api/v1", v1APIRouter);
server.use("/", BaseRouter);
server.use(bodyParser.json());

// Start server
console.log(
	`\nServer running at ${green(bold(process.env.PORT || settings.PORT))}\n`
);

server.listen(process.env.PORT || settings.PORT);
