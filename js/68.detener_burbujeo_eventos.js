//Funcion que dispara el evento click de los botones
let presionarBoton = function (e) {
    
    alert(`${e.target.id}`);

    //Evita el burbujeo para que no se dispare el evento del elemento padre
    e.stopPropagation();
}

//Funcion que dispara el evento click del container
let presionarContenedor = function (e) {

    alert("Presionar el contenedor de los botones");
    e.stopImmediatePropagation();
}

//Funcion que dispara el evento click del container
let presionarDocumento = function (e) {

    alert("Se presionó el documento");
}

document.getElementById("boton1").addEventListener("click", presionarBoton);
document.getElementById("boton2").addEventListener("click", presionarBoton);  
document.getElementById("boton3").addEventListener("click", presionarBoton);   

document.getElementById("container").addEventListener("click", presionarContenedor);    

document.addEventListener("click",presionarDocumento);  // Document