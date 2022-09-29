let contador = 0;

// Funcion para agregar elementos a la lista
function agregarNodos() {
    
    // Referencia a la lista "<ul>"
    let lista = document.getElementById("listaNoOrdenada");

    // Se crea un ELEMENT_NODE html "<li>"
    let elemento = document.createElement("li")

    // Se crea un TEXT_NODE 
    let texto = document.createTextNode(`Elemento de la lista: ${contador}`);

    // Se agrega el TEXT_NODE al ELEMENT_NODE
    elemento.appendChild(texto);

    // Se agrega el ELEMENT_NODE a la lista no ordenada
    lista.appendChild(elemento);

    contador +=1;
}

// Se eliminan los elementos de la lista no ordenada
let eliminarNodos = function() {

    let lista = document.getElementById("listaNoOrdenada");

    if (lista.hasChildNodes() && contador > 0) {
        
        lista.removeChild(lista.firstChild);

        contador -= 1;

        console.log(contador);
        
    } else {
        
        console.log("La lista no tienen nodos hijo");
    } 
}