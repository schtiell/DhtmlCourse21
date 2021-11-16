console.log("Llegué");

//Aplicando un style color al elemento identificado del DOM por id
function cambiarColor(){

    document.getElementById("titulo").style.color = "#ff0000";
}

//Asignado el el resultado de la funcion document
//Aplicando un tamaño de fuente a un elemento del DOM identificado por id
function cambiarTamanoFuente(){
    let titulo = document.getElementById("titulo");
    titulo.style.fontSize = '1.2rem';

}