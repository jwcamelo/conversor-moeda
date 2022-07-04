export const calcularConversao = (moeda1, moeda2, valorEntrada, taxa) => {
  if (valorEntrada < 0 || !valorEntrada) valorEntrada = 1;
  let valorConvertido = valorEntrada * taxa;
  valorEntrada = parseFloat(valorEntrada)

  var resultado = []
  resultado.push(valorEntrada.toLocaleString("pt-BR", { style: "currency", currency: moeda1 }))
  resultado.push(valorConvertido.toLocaleString("pt-BR", { style: "currency", currency: moeda2 }))

  return resultado;
}

