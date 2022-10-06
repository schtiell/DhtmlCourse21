
let getCoords= function (e, objeto){

    let coordenadas = document.getElementById("coordenadas");
    coordenadas.innerText = `Moviendo:\n  en el eje X: ${e.clientX}\nen el eje Y: ${e.clientY}`;
    console.log(`El puntero en el objeto: ${objeto.id}, ha comenzado a moverse`)
}