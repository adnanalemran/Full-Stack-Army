const express = require("express");
const app = express();

app.get("/heath", (_res, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

module.exports = app;
