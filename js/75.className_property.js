
let mostrarOcultar = function () {

    let contenedor = document.querySelector("#contenedor");

    if (contenedor.className == "visible"){
        contenedor.className = "oculto";
        
    }else{
        contenedor.className = "visible";
    }

}

let boton = document.querySelector(".btn");
boton.addEventListener("click", mostrarOcultar);