
console.log("queryselector");

//La funcion cambiarColor
let cambiarColor = function () {

    //Utiliza el metodo querySelector para hacer referencia al parrafo utilizando su clase
    let parrafo = document.querySelector(".parrafo");
    parrafo.style.color = "green";

    ////Utiliza el metodo querySelector para hacer referencia al parrafo utilizando su id
    let lista = document.querySelector("#lista");
    lista.style.color = "blue";

}

//Se utiliza el metodo querySelector para invocar el elemento a traves de su clase
let boton = document.querySelector(".btn-primary");

//El objeto addEventListener al hacer click sobre el boton ejecuta la función cambiarColor
boton.addEventListener("click", cambiarColor);