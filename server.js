const express = require("express");

const app = express();

app.use(express.json());

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

const sipleLogger = (req, res, next) => {
  console.log(`${req.method} -- ${req.url} -- ${new Date().toISOString()}`);
  if (req.query.name === "ontor"){
    return res.json({
      message: "Hello Ontor!",
    });
  }
 
  next();
};

app.get("/hello",sipleLogger, (req, res, next) => {
  
  res.json({
    message: "Hello, World!",
  });
});
