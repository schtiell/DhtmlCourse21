
console.log("event: keydown & keyup");

let user = document.getElementById("text-id");

//Al pulsar la tecla se activa el evento que llama a la funcion anonima y revisa si la tecla presionada coindide con la validación
user.addEventListener("keydown", function (e){
    let tecla = e.key;

    if (tecla == " "){
        alert("No se permite el uso de espacios en blanco en el campo user");
        console.log("Se uso la tecla de espacio");
        e.preventDefault();
    }
});


let comentarios = document.getElementById("area-id");

comentarios.addEventListener("keydown", e =>{

    let tecla = e.key;
    console.log(tecla);
});