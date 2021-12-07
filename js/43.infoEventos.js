
console.log("eventos");


//El parametro e es para reibir el evento enviado como argumento 
let presionado = function (e){
    console.log("evento generado" + e);

    //la propiedad clientX y clientY permite ubicar en que posicion x y y se dio clic a traves del evento onclick en html
    console.log(`La coordenada x del puntero del mouse es: ${e.clientX}, la coordenada en y es ${e.clientY}`);
}


let presionandoParrafo = function (e) {

    console.log("se presionó el parrafo");

    let contenedor = document.getElementById("ayuda");

    console.log(`La coordenada x del puntero del mouse es: ${e.clientX}, la coordenada en y es ${e.clientY}`);

    //Creando un objeto 
    contenedor.style.display = "block";
    contenedor.style.left = e.clientX + 10 + "px";
    contenedor.style.top = e.clientY + 10 + "px";
}