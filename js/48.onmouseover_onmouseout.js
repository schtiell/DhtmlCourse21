

let seleccionandoBoton = function (objeto){
    console.log("Puntero ubicado sobre el objeto");

    objeto.style.color = "#E74C3C";
    objeto.style.border = "2px solid #000";


}

let dejandoElBoton = function (objeto) {
    console.log("Puntero saliendo del boton");

    objeto.style.color = "#FDFEFE";
    objeto.style.border = "1px solid #FDFEFE"
}


let imprimirCoordenadas = function (e, x){

    console.log(`${x}:\nCoordenada x: ${e.clientX}\nCoordenada Y: ${e.clientY}`);
}