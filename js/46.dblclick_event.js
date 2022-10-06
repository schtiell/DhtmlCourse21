
// Ocultando contenedor al disparar el evento dblClick()
let ocultarContenedor = function (objeto) {
    
    console.log(`Elemento oculto: ${objeto.id}`);

    objeto.style.display = "none";

    // Funcion de tiempo con arrow function para mostrar nuevamente el contenedor
    setTimeout( () => {
        objeto.style.display = "block";
        console.log(`Elemento en pantalla: ${objeto.id}`); 
    },3000);
}


let redimensionarElemento = function (objeto) {

    objeto.style.width = 250 + "px";
    objeto.style.height = 250 + "px";
}

let retornarTamanoElemento = function (objeto) {

    objeto.style.width = 800 + "px";
    objeto.style.height = 150 + "px";
}