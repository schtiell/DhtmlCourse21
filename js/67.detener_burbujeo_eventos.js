
console.log("detener la propagacion del burbujeo de ventos");


document.getElementById("divHijo").addEventListener("click", e => {
    alert(e.target.id);

    //El metodo stopPropagataion() evita que el al dispararse el evento de un elemento hijo tambien se dispare el evento que pudiera tener el elemento padre.
    e.stopPropagation();
});

document.getElementById("divPadre").addEventListener("click", e => {
    alert(`Click sobre el elemento ${e.target.id}`);
});