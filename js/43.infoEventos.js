//El parametro e (event) recibido como parametro
let presionado = function (e){

    // Impresion del objeto evento para conocer sus propiedades en consola
    console.log(e);

    //la propiedad clientX y clientY permite ubicar en que posicion x y y se dio clic a traves del evento onclick en html
    console.log(`Id:${e.srcElement.id}, tipo de evento: ${e.type} en la coordenada X: ${e.clientX}, coordenada Y: ${e.clientY}`);
}


let presionandoParrafo = function (e) {

    let ayuda = document.getElementById("ayuda");

    console.log(`La coordenada x del puntero del mouse es: ${e.clientX}, la coordenada en y es ${e.clientY}`);

    //Creando un objeto 
    ayuda.style.display = "block";
    ayuda.style.left = e.clientX + 10 + "px";
    ayuda.style.top = e.clientY+10 + "px";

    console.log(ayuda.style.top);

}