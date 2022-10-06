
//Al cargar el sitio se ejecuta la función que muestra un alert en pantalla con la url actual del sitio
let printWelcome = function () {

    alert("Bienvenido al sitio, por favor revisa la consola web");
    
    console.log(`La href o url de la página actual es: ${window.location.href}`);
    console.log(`El hostname es del servidor es: ${window.location.hostname}`);
    console.log(`El protocolo usado es: ${window.location.protocol}`);
}

let openGoogle = function () {
    
    window.open("http://google.com","venta","");
}