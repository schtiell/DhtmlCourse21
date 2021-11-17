console.log("Llegue al js de siblingNode");


function accederParrafos() {

    //Obtenemos el primer parrafo identificandolo por su id
    let parrafo = document.getElementById("parrafo1");

    while ( parrafo != null ) {
    
        if ( parrafo.nodeType == Node.ELEMENT_NODE ) {

            console.log(parrafo.childNodes[0].nodeValue);
        }
            parrafo = parrafo.nextSibling;
    }
}

function accederParrafosAnteriores () {
    let parrafo = document.getElementById('btn-anterior');

    document.getElementById("enBlanco").innerHTML = parrafo.previousElementSibling.innerHTML;
}


function calcularNodosHermanos () {
    let celda = document.getElementById('td');
    let hermanos = 0;

    while (celda != null) { 

        if (celda.nodeType == Node.ELEMENT_NODE) {
            hermanos += 1;
            console.log(celda.childNodes[0].nodeValue);
        }

        celda = celda.nextSibling;
    }

    console.log(`El elemento tiene ${hermanos} hermanos`);
}