console.log("className property");


let mostrarOcultar = function () {

    let contenedor = document.querySelector("#containerOV");

    if (contenedor.className == "contenedorVisible"){
        contenedor.className = "contenedorOculto";
    }else{
        contenedor.className = "contenedorVisible";
    }

}

let boton = document.querySelector(".btn");
boton.addEventListener("click", mostrarOcultar);