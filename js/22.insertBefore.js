
let contador = 1;

let insertarEnmedio = function () {

    let parrafo = document.createElement("p");

    let textNode = document.createTextNode(`Este un mensaje creado con un TEXT_NODE: ${contador}`);

    parrafo.appendChild(textNode);

    //Llamando al elemento que será el punto de referencia para insertar antes el nuevo parrafo.
    let puntero = document.getElementById("parrafo");

    //Llamando al contenedor padre de los parrafos
    let container = puntero.parentNode;

    //Insertando el parrafo en el contenador padre e indicandole el elemento en el cual debe insertar antes. posteriormente aplicando un estilo css
    container.insertBefore(parrafo, puntero).style.background = "lightgreen";

    contador += 1;

    console.log('parrafo insertado exitosamente')
}


let insertarAlPrincipio = function (){
    
    let elementNode = document.createElement("p");

    let textNode = document.createTextNode("Success: Ejercicio resuelto");

    //Agregando el TEXT_NODE al ELEMENT_NODE
    elementNode.appendChild(textNode);

    // Referencia del contenedor padre donde se insertará el nuevo nodo
    let contenedorPadre = document.getElementById("contenedor");

    // Referencia del nodo que será utilizado para insertar antes el nuevo nodo
    let puntero = contenedorPadre.firstChild;

    // Insertando el nuevo nodo.
    contenedorPadre.insertBefore(elementNode, puntero).style.background = "orange";

}
