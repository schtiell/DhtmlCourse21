
let user = document.getElementById("user");

//Al pulsar la tecla se activa el evento que llama a la funcion flecha y revisa si la tecla presionada coindide con la validación
user.addEventListener("keydown", e => {
    let tecla = e.key;

    if (tecla == " "){
        alert("No se permite el uso de espacios en blanco en el campo user");
        console.log("Se uso la tecla de espacio");
        e.preventDefault();
    }
});

// Arreglo para las teclas presionadas en el text area de comenarios
let arreglo = new Array();

let comentarios = document.getElementById("area");
comentarios.addEventListener("keyup", e => {

    arreglo.push(e.key);
    
});

// Evento submit para imprimir el arreglo generado por el evento keyup
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (e){
    e.preventDefault();
    console.log(arreglo);
})
