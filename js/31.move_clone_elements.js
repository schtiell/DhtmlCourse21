

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