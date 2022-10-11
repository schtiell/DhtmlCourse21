
// Detiene la propagacion del evento al contenedor padre
document.getElementById("contenedorInterno").addEventListener("click", e => {
    e.target.style.backgroundColor = "#00FF00";

    setTimeout(() => {
        alert(`target = ${e.target.id}, this = ${e.target.tagName}`);
        e.target.style.backgroundColor = "";
    }, 0);
    e.stopPropagation();
});

// Detiene la propagacion del evento al contenedor padre
document.getElementById("contenedorExterno").addEventListener("click", e => {
    e.target.style.backgroundColor = "#00FF00";

    setTimeout(() => {
        alert(`target = ${e.target.id}, this = ${e.target.tagName}`);
        e.target.style.backgroundColor = "";
    }, 0);
    e.stopPropagation();
});

document.getElementById("contenedorNivel2").addEventListener("click", e => {
        e.target.style.backgroundColor = "#00FF00";

    setTimeout(() => {
        alert(`target = ${e.target.id}, this = ${e.target.tagName}`);
        e.target.style.backgroundColor = "";
    }, 0);
});