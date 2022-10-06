
// Contadores de eventos
let mouseentra = 0;
let mousesale = 0;

let clic = 0;
let soltar = 0;


// Funciones de entrar y salir 
let acercarMouse = function (objeto){
    mouseentra += 1;
    console.log(`Evento${mouseentra}: onmouseenter()`);
    objeto.style.borderColor = "#4B0082";
    objeto.style.background = "#ADD8E6";
    objeto.style.color = "#F08080";
}

let alejarMouse = function (objeto) {
    mousesale += 1;
    console.log(`Evento ${mousesale}: onmouseleave()`);
    objeto.style.borderColor = "#D3D3D3";
    objeto.style.background = "#FFF";
    objeto.style.color = "#000";
    
}

// Funciones de presionar y soltar
let hacerClic = function (objeto) {
    clic += 1;
    console.log(`Evento${clic}: onmousedown()`);

    objeto.style.background = "#ADD8E6";
    objeto.style.color = "#F08080";
    objeto.style.fontWeight = "bolder"
}

let soltarClic = function (objeto) {
    soltar += 1;
    console.log(`Evento${soltar}: onmouseup()`);

    objeto.style.borderColor = "#DEE2E6";
    objeto.style.background = "#E7E7E7";
    objeto.style.color = "#212529";
    objeto.style.fontWeight = "normal"
}


//el parametro obj es la referencia del objeto que emite el evento
let presionarBoton = function (objeto) {
    clic += 1;
    console.log(`Evento ${clic}: onmousedown, por ${objeto.id}`);
    
    let titulo = document.getElementById("titulo");
    titulo.style.color = "#007bff";
    objeto.style.background = "#FF4500";
}


let soltarBoton = function (objeto) {
    soltar += 1;
    console.log(`Evento ${soltar}: onmouseup, por ${objeto.id}`);

    let titulo = document.getElementById("titulo");
    titulo.style.color = "#000";
    objeto.style.background= "#007bff";
}