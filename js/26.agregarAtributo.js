

let asignarAtributo = function () {

    //Definiendo un elemento a de html
    let link = document.createElement("a");

    //Definicion del nodo texto para el elemento de html
    let textNode = document.createTextNode("Este es el texto del enlace");

    //Invocando al contenedor para el ancla
    let contenedor = document.getElementById("container");

    //agregando el nodo de texto al elemento
    link.appendChild(textNode);
    
    //Agregando el ancla al contenedor padre
    contenedor.appendChild(link);

    //Definiendo un atributo para la nueva ancla html creada
    link.setAttribute("href","http://www.google.com");

    //Imprimiendo el valor de link en consola
    console.log(`${link}`);
}