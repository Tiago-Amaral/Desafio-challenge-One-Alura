var textInput = document.querySelector("#input-text1");
var outInput = document.querySelector("#output");


function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('output').innerHTML = '<textarea readonly id="input-text2">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-text2">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-text2');
  
    textoCop.select();
    document.execCommand('copy');
}