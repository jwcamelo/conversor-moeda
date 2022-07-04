const converterRealDolar = (resultadoJSON) => {
  var nome = resultadoJSON.BRLUSD.name;
  var valor = resultadoJSON.BRLUSD.bid;
  var dataCotacao = resultadoJSON.BRLUSD.create_date;
  var informacoesMoeda = [nome, valor, dataCotacao]
  return informacoesMoeda;
}

const conventerRealEuro = (resultadoJSON) => {
  var nome = resultadoJSON.BRLEUR.name;
  var valor = resultadoJSON.BRLEUR.bid;
  var dataCotacao = resultadoJSON.BRLEUR.create_date;
  var informacoesMoeda = [nome, valor, dataCotacao]
  return informacoesMoeda;
}

const conventerDolarEuro = (resultadoJSON) => {
  var nome = resultadoJSON.USDEUR.name;
  var valor = resultadoJSON.USDEUR.bid;
  var dataCotacao = resultadoJSON.USDEUR.create_date;
  var informacoesMoeda = [nome, valor, dataCotacao]
  return informacoesMoeda;
}

const conventerDolarReal = (resultadoJSON) => {
  var nome = resultadoJSON.USDBRL.name;
  var valor = resultadoJSON.USDBRL.bid;
  var dataCotacao = resultadoJSON.USDBRL.create_date;
  var informacoesMoeda = [nome, valor, dataCotacao]
  return informacoesMoeda;
}

const conventerEuroDolar = (resultadoJSON) => {
  var nome = resultadoJSON.EURUSD.name;
  var valor = resultadoJSON.EURUSD.bid;
  var dataCotacao = resultadoJSON.EURUSD.create_date;
  var informacoesMoeda = [nome, valor, dataCotacao]
  return informacoesMoeda;
}

const conventerEuroReal = (resultadoJSON) => {
  var nome = resultadoJSON.EURBRL.name;
  var valor = resultadoJSON.EURBRL.bid;
  var dataCotacao = resultadoJSON.EURBRL.create_date;
  var informacoesMoeda = [nome, valor, dataCotacao]
  return informacoesMoeda;
}

export default {
  conventerDolarEuro,
  conventerDolarReal,
  conventerEuroDolar,
  conventerEuroReal,
  conventerRealEuro,
  converterRealDolar
}
