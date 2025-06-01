require("dotenv").config("../.env");

// Import necessary modules
const express = require("express");
 const { notFoundHandler, errorHandler } = require("./error");


const app = express();

//config morgan
app.use(require("./middleware"));
app.use(require("./route"));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
