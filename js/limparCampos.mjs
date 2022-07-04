export const limparCampos = () => {
  let valor = document.querySelector('#input__valor');
  let moeda1 = document.querySelector('#select__moeda1');
  let moeda2 = document.querySelector('#select__moeda2');
  let tituloConversao = document.querySelector("#tituloConversao");
  let resultadoConversao = document.querySelector("#resultadoConversao");
  let spanTaxa = document.querySelector("#taxaConversao");
  let spanDataCotacao = document.querySelector("#dataCotacao");


  valor.value = "";
  moeda1.value = "empty"
  moeda2.value = "empty"
  tituloConversao.innerHTML = "";
  resultadoConversao.innerHTML = "";
  spanDataCotacao.innerHTML = "";
  spanTaxa.innerHTML = "";
}
