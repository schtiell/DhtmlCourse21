
let mostrarCambio = function (e) {
    let elemento = e.target;
    console.log(`El elemento con id: ${elemento.getAttribute("id")} : y su tipo es: ${elemento.type}` );
}

let imprimirInfo = function (e){
    console.log(`${document.getElementById("name").value}\n${document.getElementById("lastname").value}\n${document.getElementById("direccion").value}\n${document.getElementById("opcion").value}\n`);
    e.preventDefault();

}

// Evento change
let name = document.getElementById("name").addEventListener("change", mostrarCambio);
let lastName = document.getElementById("lastname").addEventListener("change", mostrarCambio);
let address = document.getElementById("direccion").addEventListener("change", mostrarCambio)
let numero = document.getElementById("opcion").addEventListener("change", mostrarCambio);

// Evento submit
let boton = document.getElementById("formulario");
boton.addEventListener("submit", imprimirInfo);


