
let crearEnlaces = function () {
    //console.log("innerHtml");

    //Utiliznado el innerHTML
    let objeto = document.getElementById("contenedor-enlaces1");
    objeto.innerHTML = `<a href=${document.getElementById('text1').value}>Enlace 1</a><br>
                        <a href=${document.getElementById('text2').value}>Enlace 2</a>`;


    //Creando nodos elementos y nodos de texto 

    //Primer enlace

    //Creando el elemento <a></a>
    let nodo_elemento = document.createElement("a");

    //Creando el nodo de texto
    let nodo_texto = document.createTextNode ("Enlace 1");

    //Agregando el nodo de texto al elemento <a></a>
    nodo_elemento.appendChild(nodo_texto);

    /*
        Creando un atributo href para el enlace <a></a>
        Y asignado el valor que tiene predefinido el input text en el atributo value=""
    */
    nodo_elemento.setAttribute("href", document.getElementById('text1').value);

    //Invocando el contenedor padre para el elemento <a></a>
    let contenedor = document.getElementById("contenedor-enlaces2");

    //Agregando el elemento <a></a> al contenedor padre
    contenedor.appendChild(nodo_elemento);

    //Segundo enlace

    let nodo_elemento_2 = document.createElement("a");
    
    let nodo_texto_2 = document.createTextNode("Enlace 2");
    
    nodo_elemento_2.appendChild(nodo_texto_2);

    nodo_elemento_2.setAttribute("href",document.getElementById("text2").value);

    let contenedor_2 = document.getElementById("contenedor-enlaces2");

    contenedor_2.appendChild(nodo_elemento_2);
}