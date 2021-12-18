console.log("desactivando eventos por defecto");

//Declaración de la funcion
let desactivarElemento = function (e) {

    //Recibe como parametro el evento y evita el comportamiento de un link por defualt
    e.preventDefault();

    //Almacena en una variable el valor declarado en el atributo href
    let cadena = e.target.getAttribute("href");

    //Almacena en una variable el valor del textbox
    let buscar = document.getElementById("buscar-id").value;

    //Abre en una nueva ventana el link y lo concatena para realizar una busqueda con el valor del textbox
    window.open(`${cadena}/search?q=${buscar}`);
}

//invocar al <a> por su id
let url = document.getElementById("url-id");

//Escuchando al evento click y al hacerlo ejecutar la funcion desactivarElemento
url.addEventListener("click", desactivarElemento);


