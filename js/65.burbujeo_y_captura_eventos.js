
console.log("burbujeo y captura de eventos");


let presionarDivInterior = function (e) {
    console.log("Se presionó en el recuadro interior");
}


let presionarDivExterior = function (e) {
    console.log("Se presionó en el recuadro externo");
}

document.getElementById("div1").addEventListener("click", presionarDivExterior);
document.getElementById("div1-1").addEventListener("click", presionarDivInterior);
document.getElementById("div2").addEventListener("click", presionarDivExterior, true);
document.getElementById("div2-1").addEventListener("click", presionarDivInterior, true);


