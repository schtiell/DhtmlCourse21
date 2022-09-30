
// Eliminar atributos a ELEMENT_NODES
let eliminarAtributos = function () {

    let enlace = document.getElementById("google");

    let enlacefb = document.getElementById("fb");

    enlace.removeAttribute("href");

    enlacefb.removeAttribute("href");

    console.log("Atributos removidos");

}

// Agregar atributos a ELEMENT_NODES
let agregarAtributos = function () {

    let enlace = document.getElementById("google");

    let enlacefb = document.getElementById("fb");

    enlace.setAttribute("href","http://google.com");

    enlacefb.setAttribute("href","http://facebook.com");

    console.log("Atributos agregados");

}

// Eliminar el atributo border de la tabla
let eliminarBorde = function () {

    let tabla = document.getElementById("tabla");

    tabla.removeAttribute("border");

    console.log("Atributo removido");

}

// Obtener el valor del atributo border
let obtenerAtributo = function () {

    let tabla = document.getElementById("tabla");

    let atributo = tabla.getAttribute("border");

    console.log(atributo);

}

// Agregar atributo a la table
let addAtributo =  function () {
    
    let tabla = document.getElementById("tabla");

    tabla.setAttribute("border","3px");

    console.log(tabla)
}