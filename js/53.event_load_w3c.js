
addEventListener("load", () => {
    alert("sitio cargado al 100%");
});

//La funcion recibe como parametro el evento
function printInfoBoton (e) {

    //target es la referencia del objeto que generó el evento 
    let boton = e.target;
    document.getElementById("subtitulo").innerHTML = `Las propiedades del boton son:<br> <small>Name: ${boton.name},<br> Id= ${boton.id},<br> Value = ${boton.value} </small>`;

    e.target.style.background = "#ff0000";
}


let boton1 = document.getElementById("id-btn1");
let boton2 = document.getElementById("id-btn2");

boton1.addEventListener("click", printInfoBoton);
boton2.addEventListener("click", printInfoBoton);


