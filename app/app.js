require("dotenv").config("../.env");

// Import necessary modules
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

//config morgan
app.use([
  morgan("dev"),
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
  express.json(),
]);

app.get("/heath", (_res, res) => {
  throw new Error();
  res.status(200).json({
    message: "success",
  });
});

//error frist design

app.use((_req, _res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : {},
  });
});

module.exports = app;
