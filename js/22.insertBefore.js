
let insertarEnmedio = function () {

    //Creando nodo de texto
    let textNode = document.createTextNode("Este es un ejemplo de inserción entre elementos");

    //Creando un elemento html parrafo
    let parrafo = document.createElement("p");

    //Asignando el nodo de texto al elemento parrafo
    parrafo.appendChild(textNode);

    //Llamando al elemento que será el punto de referencia para insertar antes el nuevo parrafo.
    let puntero = document.getElementById("parrafo-3");

    //Llamando al contenedor padre de los parrafos
    let container = document.getElementById("container");

    //Insertando el parrafo en el contenador padre e indicandole el elemento en el cual debe insertar antes. posteriormente aplicando un estilo css
    container.insertBefore(parrafo, puntero).style.background = "lightgreen";

    console.log('parrafo insertado exitosamente')

}


let insertarAlPrincipio = function (){
    
    let textNode = document.createTextNode("Success: Ejercicio resuelto");

    let nodeElement = document.createElement("p");

    nodeElement.appendChild(textNode);

    let contenedorPadre = document.getElementById("container");

    let puntero = contenedorPadre.firstChild;

    contenedorPadre.insertBefore(nodeElement, puntero).style.background = "orange";

}
