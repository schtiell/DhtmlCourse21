console.log('removeChild');


let contador = 1;

var agregarElemento = function () {

    //console.log("Elemento agregado!!!");

    let salto = "\n";

    let textNode = document.createTextNode(` ${contador}: Nodo de texto creado ${salto}`);

    let parrafo = document.getElementById('parrafo');

    parrafo.appendChild(textNode);

    contador += 1;
}



var eliminarElemento = function () {

    // console.log("Elemento eliminado!!!");

    let parrafo = document.getElementById("parrafo");


    //hasChildNodes() retorna true si el nodo tiene hijos (sean de tipo texto o de tipo elemento)
    if (parrafo.hasChildNodes()){

        //obtiene el ultimo elemento hijo
        parrafo.removeChild(parrafo.lastChild);

        contador -= 1;
    }else{
        console.log("No hay mas hijos para remover");
    }



}