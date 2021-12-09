
let ubicarCoordenada = function (e){

    console.log(`Moviendo X: ${e.clientX}, Y:${e.clientY}`);

    let coordenadas = document.getElementById("coordenadasContainer");

    coordenadas.innerText = `Moviendo X: ${e.clientX}, Y:${e.clientY}`;
}

let coordenadasTitulo = function (e){
        
        coordenadas = document.getElementById("coordenadasTitulo");
        coordenadas.innerText = `Moviendo X: ${e.clientX}, Y:${e.clientY}`;
}