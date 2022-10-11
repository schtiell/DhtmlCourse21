let cambiarColores = function () {

    let titulos = document.querySelector("h2");
    titulos.style.background = "lightgreen";

    let parrafos = document.querySelector("p");
    parrafos.style.color = "blue";

    setTimeout( () => {
        parrafos.style.color = "";
        titulos.style.backgroundColor = "";
        console.log("Colores reestablecidos!!")
    }, 3000);
}

let boton = document.querySelector(".btn-primary");
boton.addEventListener("click", cambiarColores);