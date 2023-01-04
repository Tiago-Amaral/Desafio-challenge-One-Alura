var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("output");


function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

  
  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto2">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
  textInput.value = "";
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto2">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function checkTextArea() {
  if (document.getElementById("input-texto").value == "") {
    alert("Por favor, preencha a área do texto!");
    return false;
  } else {
    document.getElementById("btn-criptografar").onclick = criptografar() 
      // Executar ação do botão aqui
    
  }
}

 

function copiar() {
    var textoCop = document.querySelector('#input-texto2');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado!");
}