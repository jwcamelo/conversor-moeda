import { extrairDados } from "./extrarirConversao.mjs";
import { calcularConversao } from "./calcularValor.mjs";
import { preencherCampos } from "./preencherCampos.mjs";
import { limparCampos } from "./limparCampos.mjs";

const btn = document.querySelector("#btnConverter");
const btnLimpar = document.querySelector("#btnLimpar");

const inputValorEntrada = document.querySelector("#input__valor");

btn.addEventListener("click", () => {

  let moeda1 = document.querySelector('#select__moeda1').value;
  let moeda2 = document.querySelector('#select__moeda2').value;

  if (inputValorEntrada.value < 0 || inputValorEntrada.value == "") {
    alert("Valor incorreto. Informe um valor maior que 0");
  } else if (moeda1 == 'empty' || moeda2 == 'empty') {
    alert("Informe as moedas para conversão!");
  } else {
    if (moeda1 !== moeda2) {
      let xhr = new XMLHttpRequest();

      xhr.open("GET", `https://economia.awesomeapi.com.br/last/${moeda1}-${moeda2}`);
      xhr.send();

      xhr.addEventListener("load", function () {
        let resultado = xhr.responseText;
        let resultadoJSON = JSON.parse(resultado);
        console.log(resultadoJSON);
        const dadosDaConversao = extrairDados(moeda1, moeda2, resultadoJSON);

        console.log(dadosDaConversao);
        let valor = inputValorEntrada.value.replace(",", ".");
        let resultadoFinal = calcularConversao(moeda1, moeda2, valor, dadosDaConversao[1]);
        preencherCampos(dadosDaConversao[0], resultadoFinal[1], resultadoFinal[0], dadosDaConversao[1], dadosDaConversao[2])

      })
    } else {
      alert("Não é necessário convereter moedas iguais")
    }
  }
});

btnLimpar.addEventListener("click", limparCampos);

