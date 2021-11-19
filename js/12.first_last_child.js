console.log("Llegué");

function obtenerParrafo(){
    let puntero1 = document.getElementById("parrafos");
    let puntero2 = puntero1.firstChild;

    while ( puntero2 != null) {

        if ( puntero2.nodeType == Node.ELEMENT_NODE) { 
            console.log( `Nodo tipo: "${puntero2.nodeName}": su valor es: "${puntero2.childNodes[0].nodeValue}"`);
        }else {
            console.log( `Nodo tipo "${puntero2.nodeName}": No es un nodo tipo elementos, si no de texto`);
        }

        puntero2 = puntero2.nextSibling;
        
    }
}

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

var getParagraphs = function () {
    let container = document.getElementById("container");
    let parrafos = container.lastElementChild;

    while (parrafos != null) {
        console.log(parrafos.childNodes[0].nodeValue);
        parrafos = parrafos.previousElementSibling;
    }
}

var parrafos_fn = function () {
    let contenedorParrafos = document.getElementById("container");
    let parrafos = contenedorParrafos.firstElementChild;

    while ( parrafos != null) { 
        console.log(parrafos.childNodes[0].nodeValue);
        parrafos = parrafos.nextElementSibling;
    }
}
