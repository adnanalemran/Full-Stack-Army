const notFoundHandler = (req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
}

const errorHandler = (err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : {},
  });
}

module.exports = {
  notFoundHandler,
  errorHandler
};