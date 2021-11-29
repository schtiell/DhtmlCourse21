

let moverElementos = function (){

    //console.log("Moviendo los elementos");

    let lista = document.getElementById("lista1");

    let nodoHijo = lista.firstChild;

    let lista2 = document.getElementById("lista2");

    lista2.appendChild(nodoHijo);

}

let clonarElementos = function () {

    //Se invoca el elemento a clonar
    let lista = document.getElementById("lista1");

    //Se crea una copia del elemento y se devuelve un clon
    let clonLista = lista.cloneNode(true);

    //Se llama el elemento padre que va a tener el clon de los elementos
    let lista2 = document.getElementById("containerLista2");

    //Se agregan el elemento clonado al contenedor padre
    lista2.appendChild(clonLista);

}

//Funciones del archivo 31.move_clone_node.html
function moveElements() {
    //console.log("moviendo elementos");  
    
    let parrafos = document.getElementById("container1");

    let parrafoIndividual = parrafos.firstChild;

    if (parrafos.childNodes.length > 0) {

        let contenerdorDestino = document.getElementById("container2");

        contenerdorDestino.appendChild(parrafoIndividual);
    }else{
        console.log("No hay mas elementos que mover");
    }

}

function cloneElements() {

    //console.log("clonando elementos");   

    let container = document.getElementById("container1");

    let clnElementos = container.cloneNode(true);

    let containerDestino = document.getElementById("container2");

    containerDestino.appendChild(clnElementos);

}