console.log("event change");


let mostrarCambio = function (e) {
    let elemento = e.target;

    console.log(`El elemento modificado es: ${elemento.getAttribute("id")}`);
}

let name = document.getElementById("name-id").addEventListener("change", mostrarCambio);
let lastName = document.getElementById("lastname-id").addEventListener("change", mostrarCambio);
let numero = document.getElementById("select-id").addEventListener("change", mostrarCambio);


