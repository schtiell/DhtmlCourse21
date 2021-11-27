

let eliminarAtributos = function () {

    let enlace = document.getElementById("google");

    let enlacefb = document.getElementById("fb");

    enlace.removeAttribute("href");

    enlacefb.removeAttribute("href");

    console.log("Atributos removidos");

}

let agregarAtributos = function () {

    let enlace = document.getElementById("google");

    let enlacefb = document.getElementById("fb");

    enlace.setAttribute("href","http://google.com");

    enlacefb.setAttribute("href","http://facebook.com");

    console.log("Atributos agregados");

}

let eliminarBorde = function () {

    let tabla = document.getElementById("tabla");

    tabla.removeAttribute("border");

    console.log("Atributo removido");

}

let obtenerAtributo = function () {

    let tabla = document.getElementById("tabla");

    let atributo = tabla.getAttribute("border");

    console.log(atributo);

}