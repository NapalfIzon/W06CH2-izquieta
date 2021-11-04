require("dotenv").config();
const http = require("http");
const url = require("url");
const program = require("commander");
const { htmlResults, htmlError } = require("./htmlCode");
const {
  sumatory,
  substract,
  multiplication,
  division,
} = require("./operations");

let finalHtml;
let status;
let port;

const server = http.createServer();

program.option("-p, --port <port>");
program.parse(process.argv);
const [consolePort] = process.argv.slice(3);

if (consolePort === undefined) {
  port = process.env.SERVER_LOCAL_PORT || 8000;
} else {
  port = consolePort;
}

server.listen(port);

server.on("request", (request, response) => {
  const myURL = new URL(request.url, `http://${request.headers.host}`);
  const { firstNumber, secondNumber } = url.parse(request.url, true).query;
  const sumatoryResult = sumatory(firstNumber, secondNumber);
  const substractResult = substract(firstNumber, secondNumber);
  const multiplicationResult = multiplication(firstNumber, secondNumber);
  const divisionResult = division(firstNumber, secondNumber);

  if (
    Number.isNaN(+firstNumber) ||
    Number.isNaN(+secondNumber) ||
    myURL.pathname !== "/calculator/" ||
    firstNumber.length === 0 ||
    secondNumber.length === 0
  ) {
    status = 404;
    finalHtml = htmlError();
  } else {
    status = 200;
    finalHtml = htmlResults(
      firstNumber,
      secondNumber,
      sumatoryResult,
      substractResult,
      multiplicationResult,
      divisionResult.toFixed(2)
    );
  }
  response.statusCode = status;
  response.setHeader("Content-Type", "text/html");
  response.write(finalHtml);
  response.end();
});
