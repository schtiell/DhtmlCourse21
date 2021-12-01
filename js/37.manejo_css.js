console.log("Trabajando con la aplicacion de estilos css desde js");

//Cambiando el color de fondo
let cambiarColorFondo = function () {

    let colorFondo = document.getElementById("colorfondo").value;
    let parrafo = document.getElementById("container");

    parrafo.style.background = colorFondo;
}

//Cambiando el color de fuente
let cambiarColorFuente = function () {
    let colorFuente = document.getElementById("colorfuente").value;
    let parrafo = document.getElementById("parrafo");

    parrafo.style.color = colorFuente;
}

//Cambiando el tamaño de la fuente
let cambiarTamanoFuente = function () {
    
    let tamanoFuente = document.getElementById("tamanofuente").value;
    let parrafo = document.getElementById("parrafo");

    parrafo.style.fontSize = tamanoFuente;

}

//Cambiando el tipo de fuente
let cambiarTipoFuente = function () {

    let tipoFuente = document.getElementById("tipofuente").value;
    let parrafo = document.getElementById("parrafo");

    parrafo.style.fontFamily = tipoFuente;
    
}

//Cambiando el estilo de la fuente
let cambiarEstiloFuente = function () {
    let estiloFuente = document.getElementById("estilofuente").value;
    let parrafo = document.getElementById("parrafo");

    parrafo.style.fontStyle = estiloFuente;
}

//Camabiando el grosor de la fuente
let cambiarPesoFuente = function (){
    let pesoFuente = document.getElementById("pesofuente").value;
    let parrafo = document.getElementById("parrafo");

    parrafo.style.fontWeight = pesoFuente;
}

//Cambiando la alineacion
let cambiarAlineacionFuente = function (){
    let cambiarAlineacion = document.getElementById("alineacionfuente").value;
    let parrafo = document.getElementById("parrafo");

    parrafo.style.textAlign = cambiarAlineacion;
}

//Cambiando la decoracion dela fuente
let cambiarDecoracionFuente = function () {
    let decoracionFuente = document.getElementById("decoracionfuente").value;
    let parrafo = document.getElementById("parrafo");

    parrafo.style.textDecoration = decoracionFuente;
}

//Cambiando el espacio entre las letras
let cambiarEspacioLetras = function () {
    let espacioLetras = document.getElementById("espacioletras").value;
    let parrafo = document.getElementById("parrafo");

    parrafo.style.letterSpacing = espacioLetras + "px";
}

//Cambiando el espacio entre las palabras
let cambiarEspacioPalabras = function (){
    let espacioPalabras = document.getElementById("espaciopalabras").value;
    let parrafo = document.getElementById("parrafo");

    parrafo.style.wordSpacing = espacioPalabras + "px";
}

//Transformando el texto
let cambiarTransformacionTexto = function (){
    let transformarTexto = document.getElementById("transformaciontexto").value;
    let parrafo = document.getElementById("parrafo");

    parrafo.style.textTransform = transformarTexto;
}

//Cambiando el ancho del borde
let cambiarAnchoBorde = function () {
    let anchoBorde = document.getElementById("anchoborde").value;
    let container = document.getElementById("container");

    container.style.borderWidth = anchoBorde;
}

//Cambiando el estilo de borde
let cambiarEstiloBorde = function () {
    let estiloBorde = document.getElementById("estiloborde").value;
    let container = document.getElementById("container");

    container.style.borderStyle = estiloBorde;
}

//Cambiando el color del borde
let cambiarColorBorde = function () {
    let colorBorde = document.getElementById("colorborde").value;
    let container = document.getElementById("container");

    container.style.borderColor = colorBorde;
}

//Cambiando el paddig
let cambiarPadding = function(){
    let padding = document.getElementById("padding").value;
    let container = document.getElementById("container");

    container.style.padding = padding + "px";
}

//Cambiando el margen
let cambiarMargin = function () {
    let margen = document.getElementById("margin").value;
    let parrafo = document.getElementById("parrafo");

    parrafo.style.margin = `${margen}px`;  
}