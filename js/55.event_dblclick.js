
//Funciones 

let ocultarElemento = function () {

    //console.log(e);

    let elemento = document.getElementById("container");

    if (elemento.style.display === "none"){

        elemento.style.display = "block";

    }else {
        elemento.style.display = "none";
    }
}

//
let elemento = document.getElementById("btn-id");
elemento.addEventListener("dblclick", ocultarElemento);

