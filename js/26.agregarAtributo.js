

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

    /* Definiendo un atributo para la nueva ancla html creada
    El primer parámetro es el nombre de la propiedad (en este caso href) y el segundo es el valor que toma la propiedad */
    link.setAttribute("href","http://www.google.com");

    //Imprimiendo el valor de link en consola
    console.log(`${link}`);
}

let aplicarAtributos = function () {

    //console.log("bordes dibujados");

    let atributosTabla = document.getElementById("tabla");

    //Definicion de algunos atributos para tablas, color, borde y aleamiento
    atributosTabla.setAttribute("border","2");
    atributosTabla.setAttribute("bordercolor","#000");
    atributosTabla.setAttribute("align","center");
    atributosTabla.setAttribute("cellpadding","10px");
    atributosTabla.setAttribute("width","50%");
        
    console.log(atributosTabla.childNodes);

    //Aplicando estilo de color de fondo para la columna de encabezados
    atributosTabla.childNodes[1].style.background ="silver";

}