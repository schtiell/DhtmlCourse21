
//De esta manera se separa por completo la funcionalidad del sitio (js) de la estructura de la pagina (html).

//  ----------------------  1era forma de hacerlo -----------------------------------

/*
//Se invoca el elemento mediante el id
let boton1 = document.getElementById("id-btn1");

//El metodo addEventListener(), recibe tanto el evento a ejecutar como la funcion del script a ejecutar.
boton1.addEventListener("click", function(){
    let boton1 = document.getElementById("id-btn1");
    alert(boton1.getAttribute("value"));
});


let boton2 = document.getElementById("id-btn2");

boton2.addEventListener("click", () => {
    let boton2 = document.getElementById("id-btn2");
    alert(boton2.getAttribute("value"));
});


/* --------------------------------- 2da forma de hacer lo anterior ---------------------------

let boton1 = document.getElementById("id-btn1");

let imprimirValor = function () {

    let boton1 = document.getElementById("id-btn1");
    alert(boton1.getAttribute("value"));

}
boton1.addEventListener("click", imprimirValor);


let boton2 = document.getElementById("id-btn2");
boton2.addEventListener("click", imprimirValor2);

function imprimirValor2 () {
    let boton2 = document.getElementById("id-btn2");
    alert(boton2.getAttribute("value"));
} */


// ------------------------- 3era forma: RESUMIDA ------------------------------------

document.getElementById("id-btn1").addEventListener("click", ()=>{
    alert(document.getElementById("id-btn1").getAttribute("value"));
});

document.getElementById("id-btn2").addEventListener("click", function () {
    alert(document.getElementById("id-btn2").getAttribute("value"));
});


