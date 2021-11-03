require("dotenv").config();
const http = require("http");
const { htmlResults } = require("./htmlCode");

const server = http.createServer();

const port = process.env.SERVER_LOCAL_PORT || 8000;

server.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

server.on("request", (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.write(htmlResults(1, 2, 3, 4, 5, 6));
  response.end();
});
