const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const middleware = [
  morgan("dev"),
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
  express.json(),
];

module.exports = middleware;