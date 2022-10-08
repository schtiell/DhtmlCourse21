
//Funciones para realizar los cambios de color en los contenedores
function cambiarColor (e){
    let color = e.target;
    color.style.background = "#FADBD8";
    color.style.color = "#E74C3C"
    console.log(`El color del elemento con id: ${color.id} fue cambiado a ${color.style.background}`);
}

function regresarColor (e){
    let color = e.target;
    color.style.background = "#343A40";
    color.style.color = "#FFF"
    console.log(`El color del elemento con id: ${color.id} fue regresado a ${color.style.background}`);
}

function cambiarFuente(e) {
    
    let fuente = e.target;
    fuente.style.fontSize = 20 + "px";
}

let regresarFuente = function (e) {
    let fuente = e.target;
    fuente.style.fontSize = "medium";
}


let cabecera = document.getElementById("cabecera");
let fila = document.getElementById("fila");

cabecera.addEventListener("mousedown", cambiarColor);
cabecera.addEventListener("mouseup",regresarColor);

fila.addEventListener("mousedown", cambiarColor);
fila.addEventListener("mouseup",regresarColor);


//Obteniendo todas las celdas de la tabla mediante la etiqueta td
let items = document.getElementsByTagName("li");

//El ciclo for permite ejecutar en cada una de las celdas los eventos para cambiar de color
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mousedown", cambiarFuente);
    items[i].addEventListener("mouseup", regresarFuente);
}