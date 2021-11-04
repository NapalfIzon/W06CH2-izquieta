const htmlError = () => `
<!DOCTYPE html>
<html lang="es-ES">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>W06CH2 - Calculator</title>
    <link
      rel="shortcut icon"
      href="https://i.ibb.co/t8wTKmj/calculator.png"
      type="image/x-icon"
    />
  </head>
  <body>
    <main class="main-error">
      <img
        src="https://www.latercera.com/resizer/Aa2fe7T8VHIxm4mxTMJTFBZYG1E=/380x570/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/NLPFC53TTBF4LOOLVWNSRXFIME.gif"
        alt="Dennis Nedry Error"
      />
      <h2 class="main-error__title">
        Ah ah ah, te has equivocado de página... Vuelve a intentarlo
      </h2>
    </main>
    <footer class="footer">
      <p class="copyright">
        Designed for <a href="https://isdicoders.com/es">ISDI Coders</a> by
        <a href="https://github.com/NapalfIzon/"> Napoleón Izquieta</a>.
      </p>
    </footer>
  </body>
</html>
`;

const htmlResults = (
  firstNumber,
  secondNumber,
  sumatoryResult,
  substractResult,
  multiplicationResult,
  divisionResult
) => `
<!DOCTYPE html>
<html lang="es-ES">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>W06CH2 - Calculator</title>
    <link
      rel="shortcut icon"
      href="https://i.ibb.co/t8wTKmj/calculator.png"
      type="image/x-icon"
    />
  </head>
  <body>
    <header class="header">
      <h1 class="title">Calculadora Webservice</h1>
    </header>
    <main class="main">
      <h2 class="main__title">Resultados:</h2>
      <ul class="main__container">
        <li class="main__operation">${firstNumber} + ${secondNumber} = ${sumatoryResult}</li>
        <li class="main__operation">${firstNumber} - ${secondNumber} = ${substractResult}</li>
        <li class="main__operation">${firstNumber} * ${secondNumber} = ${multiplicationResult}</li>
        <li class="main__operation">${firstNumber} / ${secondNumber} = ${divisionResult}</li>
      </ul>
    </main>
    <footer class="footer">
      <p class="copyright">
        Designed for <a href="https://isdicoders.com/es">ISDI Coders</a> by
        <a href="https://github.com/NapalfIzon/"> Napoleón Izquieta</a>.
      </p>
    </footer>
  </body>
</html>
`;

module.exports = {
  htmlResults,
  htmlError,
};
