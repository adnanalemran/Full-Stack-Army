const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// Middleware to log request details and respond to a specific query parameter
const sipleLogger = (req, res, next) => {
  console.log(`${req.method} -- ${req.url} -- ${new Date().toISOString()}`);
  if (req.query.name === "ontor") {
    return res.json({
      message: "Hello Ontor!",
    });
  }
  next();
};
// Use the middleware globally
app.use(sipleLogger);

// Route that uses the middleware
app.get("/hello", sipleLogger, (req, res, next) => {
  return res.json({
    message: "Hello, World!",
  });
});

// Route that does not use the middleware
app.get("/goodbye", (req, res) => {
  return res.json({
    message: "Goodbye, World!",
  });
});