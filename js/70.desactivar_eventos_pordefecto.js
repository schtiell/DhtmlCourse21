console.log("desactivando eventos por defecto");


let desactivarElemento = function (e) {

    e.preventDefault();

    let cadena = e.target.getAttribute("href");

    let buscar = document.getElementById("buscar-id").value;

    window.open(`${cadena}/search?q=${buscar}`);
}

//Url
let url = document.getElementById("url-id");

url.addEventListener("click", desactivarElemento);


