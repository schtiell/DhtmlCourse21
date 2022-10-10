
let user = document.getElementById("user");

//Al pulsar la tecla se activa el evento que llama a la funcion flecha y revisa si la tecla presionada coindide con la validación
user.addEventListener("keyup", e => {
    let tecla = e.key;

    if (tecla == " "){
        alert("No se permite el uso de espacios en blanco en el campo user");
        console.log("Se uso la tecla de espacio");
        e.preventDefault();
    }
});


let comentarios = document.getElementById("area");

let comentario = new Array();

comentarios.addEventListener("keyup", e => {

    let tecla = e.key;
    console.log(tecla);


});



