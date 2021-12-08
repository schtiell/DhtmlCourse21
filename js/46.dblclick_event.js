

let ocultarContenedor = function (objeto) {
    
    console.log("Elemento oculto" + objeto);

    //Display = "none" permite oculta el div
    objeto.style.display = "none";
}


let redimensionarElemento = function (objeto) {

    console.log("Elemento redimensionado");

    objeto.style.width = 250 + "px";
    objeto.style.height = 250 + "px";
}

let retornarTamanoElemento = function (objeto) {

    console.log("Elemento redimensionado");

    objeto.style.width = 800 + "px";
    objeto.style.height = 150 + "px";
}