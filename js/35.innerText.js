

//Funcion para asignar un nuevo titulo h1
let cambiarTitulo = function () {

    //Antes de cambiar el titulo obtiene el valor por default definido en el HTML
    console.log(recuperarTitulo());

    let titulo = document.getElementById("titulo");

    titulo.innerText = "Nuevo titulo";
}

//Función para recuperar el titulo
let recuperarTitulo = function(){
    
    //console.log("titulo recuperado");

    let titulo = document.getElementById("titulo");
    
    console.log(titulo.innerText);
}


//Modificando lista de elementos

let modificarLista = function () {
    
    //Invocando la lista
    let ul = document.getElementById("lista")

    //Llamando al primer elemento de la lista
    let li = ul.firstElementChild;

    //Mientras la lista sea diferente de null
    while (li != null) {

        //Se llama el texto del elemento y se hace una concatenacion del valor actual + ' .'
        li.innerText =  li.innerText + ' .';

        //se asigna el siguiente elemento hermano y se le asigna a li
        li = li.nextElementSibling;
    }


}