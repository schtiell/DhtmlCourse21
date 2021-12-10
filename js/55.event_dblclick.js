
//Funciones

let ocultarElemento = function (e) {
    elemento.style.display = "none";
}

//
let elemento = document.getElementById("container");
elemento.addEventListener("dblclick", ocultarElemento);

