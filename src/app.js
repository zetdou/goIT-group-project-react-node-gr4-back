//apka express rauty middleware

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(errorHandler);

module.exports = app;
