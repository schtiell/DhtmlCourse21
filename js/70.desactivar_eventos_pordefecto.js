//invocar al <a> por su id
let url = document.getElementById("url");

//Escuchando al evento click y al hacerlo ejecutar la funcion desactivarElemento
url.addEventListener("click", e => {
    e.preventDefault();
    let url = e.target.getAttribute("href");
    let busqueda = document.getElementById("buscar").value;
    window.open(`${url}/search?q=${busqueda}`);
});


