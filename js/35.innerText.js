
//Funcion para asignar un nuevo titulo h1
let cambiarTitulo = function () {

    let texto = document.getElementById("titulo-text").value;

    let titulo = document.getElementById("titulo");

    titulo.innerText = texto;
}


//Modificando lista de elementos
let modificarLista = function () {
    
    let ul = document.getElementById("lista")

    let li = ul.firstElementChild;

    while (li != null) {

        //Se llama el texto del elemento y se hace una concatenacion del valor actual + ' .'
        li.innerText =  li.innerText + ' .';

        //se asigna el siguiente elemento hermano y se le asigna a li
        li = li.nextElementSibling;
    }
}