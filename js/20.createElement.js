
let contador = 0;

// Función para crear nodos tipo elemento y texto
let agregarElementos = function () {

    // Referencia del contenedor padre
    let contenedor = document.getElementById("contenedor");

    // Creando el ELEMENT_NODE
    let parrafo = document.createElement("p");
    
    // Creando el TEXT_NODE
    let texto = document.createTextNode(`Parrafo no: ${contador}`);

    // Agregando el TEXT_NODE al ELEMENT_NODE
    parrafo.appendChild(texto);

    // Agregando el ELEMENT_NODE al contenedor padre
    contenedor.appendChild(parrafo);

    contador += 1;

    console.log(`Parrafo: ${contador} creado con exito!!!`);

    
}

// Funcion para eliminar nodos
var removerElementos = function () {

    let contenedor = document.getElementById("contenedor");

    /*
    if (contenedor.children.length > 0 ) {
        
        parrafos.removeChild(parrafos.children[parrafos.children.length -1]);

    }else{
        console.log("No hay elementos nodo que eliminar");
    }
    */

    if (contenedor.hasChildNodes() && contador > 0) {

        contenedor.removeChild(contenedor.lastChild);
        
        console.log(`Elemento ${contador}: eliminado con exito!!!`);

        contador -= 1;

        

    } else {
        console.log("El contenedor no tienen elementos hijos");
    }

}