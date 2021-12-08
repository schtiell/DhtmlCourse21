
//el parametro obj es la referencia del objeto que emite el evento
let presionarBoton = function (obj) {
    console.log("onmousedown event");

    obj.style.background = "#B2EBF2";
}


let soltarBoton = function (obj) {
    console.log("onmouseup event");

    obj.style.background= "#FFCDD2";
}

let alejarMouse = function (obj) {

    console.log("onmouseleave event");
    obj.style.background = "none";
}

let acercarMouse = function (obj){
    console.log("onmouseover event")
    obj.style.background = " #EFEBE9";
}

let presionar_Boton = function (objeto) {

    objeto.style.background = "red";
    return color;
}

let soltar_Boton = function (objeto) {

    let color = objeto.style.background;
    objeto.style.background = "blue";
}