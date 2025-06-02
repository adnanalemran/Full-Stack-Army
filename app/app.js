require("dotenv").config("../.env");

// Import necessary modules
const express = require("express");
 const { notFoundHandler, errorHandler } = require("./error");

// Import middleware and routes
const app = express();

// Middleware setup
app.use(require("./middleware"));
app.use(require("./route"));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
