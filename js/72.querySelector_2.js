console.log("querySelector");


let cambiarColores = function () {

    let titulos = document.querySelector("h1");
    titulos.style.background = "lightgreen";

    let parrafos = document.querySelector("p");
    parrafos.style.color = "blue";
}

let boton = document.querySelector(".btn-primary");
boton.addEventListener("click", cambiarColores);