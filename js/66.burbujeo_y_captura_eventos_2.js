console.log("burburjeo y captura de eventos");


let presionarBoton = function (e) {

    let elemento = e.target;

    alert(elemento.id);
    
}

let presionarBotonDocumento = function (){
    let elemento = document.getElementsByTagName("body");

        elemento[0].style.background = "#FEE47E";
}

let dibujarBordes = function (e) {
    let elemento = e.target;
    elemento.style.border = `1px solid #000`;
}


document.getElementById("boton-1").addEventListener("click",presionarBoton);
document.getElementById("boton-2").addEventListener("click",presionarBoton);
document.getElementById("boton-3").addEventListener("click",presionarBoton);

document.addEventListener("click", presionarBotonDocumento);

document.getElementById("container-id").addEventListener("click", dibujarBordes)






