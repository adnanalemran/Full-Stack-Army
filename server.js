const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello, World!");
    res.statusCode = 200;
    res.end("Hello, World!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.statusCode = 404;
    res.write("404 Not Found");
    res.end("404 Not Found");
  }
});
server.listen(8000, () => {
  console.log("Server is running on port 8000");
  console.log("Visit http://localhost:8000");
});
