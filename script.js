//e --> enter
//o --> ober
//i --> imes
//a --> ai
//u --> ufat

function encriptar(){
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  //i es para que afecte tanto mayusculas como minusculas -- e else {
    //g es para toda la linea u oraciónote
    //m es para que afecte a multiples lineas o parrafo
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagenMuneco").style.display = "none";
    document.getElementById("texto1Der").style.display = "none";
    document.getElementById("texto2Der").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
  }


function desencriptar(){
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  //i es para que afecte tanto mayusculas como minusculas -- e else {
    //g es para toda la linea u oraciónote
    //m es para que afecte a multiples lineas o parrafo
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imagenMuneco").style.display = "none";
    document.getElementById("texto1Der").style.display = "none";
    document.getElementById("texto2Der").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
  }


function copiar(){
  var contenido = document.querySelector("#texto2Der");
  contenido.select();
  document.execCommand("copy");
  alert("¡Texto copiado!")
}
