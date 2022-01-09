console.log("Desafio 5");

let recuperarImagen = function () {

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(datos => {
            document.querySelector("#imagen1").setAttribute("src", datos.message);
            console.log(datos.status);
        })
}


recuperarImagen();
setInterval(recuperarImagen, 5000);