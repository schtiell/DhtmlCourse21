

let seleccionandoBoton = function (objeto){

    objeto.style.width = 200 + "px";
    console.log(`Seleccionando el: ${objeto.id}`)


}

let dejandoElBoton = function (objeto) {

    objeto.style.width = 120 + "px";
    console.log(`Dejando el: ${objeto.id}`)

}


let imprimirCoordenadas = function (e, objeto){

    console.log(`${objeto.id}:\nCoordenada x: ${e.clientX}\nCoordenada Y: ${e.clientY}`);
}