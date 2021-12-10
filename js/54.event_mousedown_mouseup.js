
//Llamando el elemento que ejecutará el evento
document.getElementById("container-1").addEventListener("mousedown", cambiarColor);
document.getElementById("container-1").addEventListener("mouseup", regresarColor);

document.getElementById("container-2").addEventListener("mousedown", cambiarColor);
document.getElementById("container-2").addEventListener("mouseup", regresarColor);


//Funciones para realizar los cambios de color en los contenedores
function cambiarColor (e){
    let color = e.target.style.background = "red";
    color;
    console.log(`El color del elemento con id: ${e.target.id} fue cambiado a ${color}`);
}

function regresarColor (e){
    let color = e.target.style.background = "#EBF5FB";
    color;
    console.log(`El color del elemento con id: ${e.target.id} fue regresado a ${color}`);
}

// ============================== Ejercicio de la tabla ===============================

//Obteniendo todas las celdas de la tabla mediante la etiqueta td
let tableArray = document.getElementsByTagName("td");

//El ciclo for permite ejecutar en cada una de las celdas los eventos para cambiar de color
for (let i = 0; i < tableArray.length; i++) {
    tableArray[i].addEventListener("mousedown", cambiarColor);
    tableArray[i].addEventListener("mouseup", regresarColor);
}