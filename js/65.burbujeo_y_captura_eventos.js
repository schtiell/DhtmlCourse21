
let pressContenedorHijo = function (e) {
    console.log("Contenedor hijo...");
}


let pressContenedorPadre = function (e) {
    console.log("Contenedor padre...");
}

document.getElementById("exterior-A").addEventListener("click", pressContenedorPadre);
document.getElementById("interior-A").addEventListener("click", pressContenedorHijo);
document.getElementById("exterior-B").addEventListener("click", pressContenedorPadre, true);
document.getElementById("interior-B").addEventListener("click", pressContenedorHijo, true);


