function accederParrafos() {

    //Obtenemos el primer parrafo identificandolo por su id
    let parrafo = document.getElementById("parrafo1");

    // Mientras la referencia al nodo hermano proximo inmediato no sea null se sigue ejecutando el bucle 
    while ( parrafo != null ) {
        
        // Si el tipo de nodo es igual a un nodo elemento
        if ( parrafo.nodeType == Node.ELEMENT_NODE ) {

            // Imprime el valor del nodo hijo del nodo elemento
            console.log(parrafo.childNodes[0].nodeValue);
        }
        
        // Se llama al siguiente hermano. Si es el ultimo entonces retorna null
        parrafo = parrafo.nextSibling;
    }
}


// Funcion para obtener el hermano anterior de un elemento del DOM
function accederParrafosAnteriores () {
    
    let parrafo = document.getElementById('btn');

    // Se obtiene la referencia del elemento y se escribe en el DOM el contendio de elemento hermano anterior
    document.getElementById("parrafo2").innerHTML = parrafo.previousElementSibling.innerHTML;
}



function calcularNodosHermanos () {

    let celda = document.getElementById('td');
    let numeroCeldas = 0;

    while (celda != null) { 

        if (celda.nodeType == Node.ELEMENT_NODE) {
            numeroCeldas += 1;
            console.log(celda.childNodes[0].nodeValue);
        }

        celda = celda.nextSibling;
    }

    console.log(`El elemento tiene ${hermanos} hermanos`);
}