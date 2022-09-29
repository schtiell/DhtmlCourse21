

let asignarAtributo = function () {

    let link = document.createElement("a");

    let textNode = document.createTextNode("www.google.com");

    link.appendChild(textNode);

    let contenedor = document.getElementById("contenedor");

    if (contenedor.children.length > 0) {

        console.log("Ya se creó el enlace con el atributo especificado");

    } else {

        contenedor.appendChild(link);

        link.setAttribute("href","http://www.google.com");
    }
}

let aplicarAtributos = function () {

    let tabla = document.getElementById("tabla");

    //Definicion de algunos atributos para tablas, color, borde y aleamiento
    tabla.setAttribute("border","2");
    tabla.setAttribute("bordercolor","#000");
    tabla.setAttribute("align","center");
    tabla.setAttribute("cellpadding","10px");
    tabla.setAttribute("width","50%");
        
    console.log(tabla.childNodes);

    //Aplicando estilo de color de fondo para la columna de encabezados
    tabla.childNodes[1].style.background ="silver";

}