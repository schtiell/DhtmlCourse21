
let contador = 1;

var agregarElemento = function () {

    let parrafo = document.getElementById('parrafo');

    let textNode = document.createTextNode(`Nodo de texto creado: ${contador}`);

    parrafo.appendChild(textNode);

    contador += 1;
}



var eliminarElemento = function () {


    let parrafo = document.getElementById("parrafo");


    //hasChildNodes() retorna true si el nodo tiene nodos hijos (TEXT_NODE Y ELEMENT_NODE)
    if (parrafo.hasChildNodes()){

        //obtiene el ultimo elemento hijo
        parrafo.removeChild(parrafo.lastChild);
        console.log(parrafo.childNodes.length);

        contador -= 1;
    }else{
        console.log("No hay mas hijos para remover");
    }



}