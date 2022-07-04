import converter from "./converter.mjs";

export const extrairDados = (moeda1, moeda2, resultadoJSON) => {
  let resultado;

  if ((moeda1 == "BRL") && (moeda2 == "USD")) {
    resultado = converter.converterRealDolar(resultadoJSON);
  }

  if ((moeda1 == "BRL") && (moeda2 == "EUR")) {
    resultado = converter.conventerRealEuro(resultadoJSON);
  }
  if (moeda1 == moeda2) {
    resultado = "Moedas iguais não podem ser convertidas";
  }
  if ((moeda1 == "USD") && (moeda2 == "EUR")) {
    resultado = converter.conventerDolarEuro(resultadoJSON);
  }
  if ((moeda1 == "USD") && (moeda2 == "BRL")) {
    resultado = converter.conventerDolarReal(resultadoJSON);
  }
  if ((moeda1 == "EUR") && (moeda2 == "USD")) {
    resultado = converter.conventerEuroDolar(resultadoJSON)
  }
  if ((moeda1 == "EUR") && (moeda2 == "BRL")) {
    resultado = converter.conventerEuroReal(resultadoJSON)
  }

  return resultado;

}
