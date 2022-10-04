// Funcion para mover elementos
let moverElementos = function (){

    let lista = document.getElementById("lista1");

    let elemento = lista.firstElementChild;

    let lista2 = document.getElementById("lista2");

    lista2.appendChild(elemento);

}

// Funcion para clonar elementos
let clonarElementos = function () {

    let lista = document.getElementById("lista1");

    let clonLista = lista.cloneNode(true);

    let lista2 = document.getElementById("contenedor-lista2");

    lista2.appendChild(clonLista);

}

//Funciones del archivo 31.move_clone_node.html
function moveElements() {
    
    let parrafos = document.getElementById("contenedor-1");

    let parrafoIndividual = parrafos.firstElementChild;

    if (parrafos.children.length > 0) {

        let contenerdorDestino = document.getElementById("contenedor-2");

        contenerdorDestino.appendChild(parrafoIndividual);
    }else{
        console.log("No hay ELEMENT_NODES que mover");
    }

}

function cloneElements() {

    let contenedorOrigen = document.getElementById("contenedor-1");

    if (contenedorOrigen.children.length > 0) {

        let clnElementos = contenedorOrigen.cloneNode(true);

        let containerDestino = document.getElementById("contenedor-2");

        containerDestino.appendChild(clnElementos);

    } else {
        
        console.log("No hay ELEMENT_NODES que clonar");
    }

}