
// Obtiene los nodos hermanos a partir del elemento hijo.
function obtenerParrafo(){
    // Referencia del nodo padre
    let puntero1 = document.getElementById("parrafos");

    // Se obtiene el primer nodo o primer hijo
    let puntero2 = puntero1.firstChild;

    // Mientras el elemento tenga nodos hermanos
    while ( puntero2 != null) {

        // Analiza si el elemento seleccionado es de tipo ELEMENT_NODE o TEXT_NODE
        if ( puntero2.nodeType == Node.ELEMENT_NODE) { 
            console.log( `Nodo tipo: "${puntero2.nodeName}": su valor es: "${puntero2.childNodes[0].nodeValue}"`);
        }else{
            console.log(`Nodo tipo: ${puntero2.nodeType} - ${puntero2.nodeName}`);
        }

        // Avanza al siguiente hermanos del nodo
        puntero2 = puntero2.nextSibling;
        
    }
}

// Obtiene unicamente los ELEMENT_NODE
function obtenerElementosParrafo() {

    let puntero1 = document.getElementById("parrafos");
    let puntero2 = puntero1.firstElementChild;

    while ( puntero2 != null) {
        console.log(puntero2.childNodes[0].nodeValue)
        puntero2 = puntero2.nextElementSibling;
    }

    console.log("====== o bien: =======");

    let fchild = document.getElementById("parrafos").firstElementChild.innerHTML;
    let lchild = document.getElementById("parrafos").lastElementChild.innerHTML;

    console.log(`${fchild}`);
    console.log(`${lchild}`);
}

// Funcion para obtener el ultimo nodo elemento e ir mostrando los nodos hermanos en reversa
var getParagraphs = function () {

    let container = document.getElementById("contenedor");
    let parrafos = container.lastElementChild;

    while (parrafos != null) {
        console.log(parrafos.childNodes[0].nodeValue);
        parrafos = parrafos.previousElementSibling;
    }
}

// Muestra los nodos elementos en orden: del primero al ultimo
var parrafos_fn = function () {
    let contenedorParrafos = document.getElementById("contenedor");
    let parrafos = contenedorParrafos.firstElementChild;

    while ( parrafos != null) { 
        console.log(parrafos.childNodes[0].nodeValue);
        parrafos = parrafos.nextElementSibling;
    }
}
