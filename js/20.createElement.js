console.log("creando elementos html");

let contador = 1;

var addElement = function () {
    
    let textNode = document.createTextNode(`Parrafo no: ${contador}`);

    let element = document.createElement("p");

    element.appendChild(textNode);

    let parrafos = document.getElementById("parrafos");

    parrafos.appendChild(element);

    contador += 1;
}


var removerElements = function () {

    let parrafos = document.getElementById("parrafos");

    if (parrafos.children.length > 0 ) {
        
        parrafos.removeChild(parrafos.children[parrafos.children.length -1]);

    }else{
        console.log("No hay elementos nodo que eliminar");
    }

}