require("dotenv").config();
const http = require("http");

const server = http.createServer();

const port = process.env.SERVER_LOCAL_PORT || 8000;

server.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});

server.on("request", (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.write("<h1>Ya se Kung Fu!!!</h1>");
  response.end();
});
