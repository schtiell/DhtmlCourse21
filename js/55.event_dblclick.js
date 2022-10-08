
let ocultarElemento = function (e) {

    let imagen = e.target;
    imagen.style.display = "none";
    console.log(`Elemento con id: ${imagen.id}, fue oculto`);

    setTimeout( () => {
        imagen.style.display = "block";
        console.log(`Elemento con id: ${imagen.id}, fue mostrado nuevamente`);
    }, 3000);
}


let imagen = document.getElementById("imagen");
imagen.addEventListener("dblclick", ocultarElemento);

