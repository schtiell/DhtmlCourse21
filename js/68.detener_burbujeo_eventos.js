console.log("Detener burbujeo de eventos");


let presionarBoton = function (e) {
    
    alert(`${e.target.id}`);

    //Evita el burbujeo para que no se dispare el evento del elemento padre
    e.stopPropagation();
}

let presionarDocumento = function (e) {

    alert("Se presionó el documento");
}

document.getElementById("btn-1").addEventListener("click", presionarBoton)

document.getElementById("btn-2").addEventListener("click", presionarBoton)

document.getElementById("btn-3").addEventListener("click", presionarBoton)

document.addEventListener("click",presionarDocumento);