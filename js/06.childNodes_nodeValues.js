console.log("childNodes - nodeValues");


//Es importante notar que el texto contenido en un elemento de HTML no pertenece al nodo, sino que se encuentra en otro nodo especial que se llama nodo texto (TEXT_NODE)

//Mediante la propiedad childNodes accedemos a la primer componente que tiene la referencia al nodo de tipo texto. Por último asignamos el nuevo texto a la propiedad nodeValue.
function cambiarTitulo () {
    let titulo = document.getElementById("titulo");
    console.log(`El titulo actual es: ${titulo.childNodes[0].nodeValue}`);
    titulo.childNodes[0].nodeValue = "childNodes_nodeValues";
    console.log(`El nuevo titulo es: ${titulo.childNodes[0].nodeValue}`);
}


//Funcion para actualizar el titulo del html
function actualizarTitulo () {

    //Se obtiene el valor del h1 por id
    let titulo = document.getElementById("titulo2");

    //Se obtiene el valor del childNodes[0]
    let getNumero = titulo.childNodes[0].nodeValue;

    //Se convierte el valor en la posicion 1 del valor del childNode
    let numero = Number(getNumero.charAt(1));

    //Se le suma el valor de 1
    numero += numero;

    //Se le asgina el nuevo valor al titulo
    titulo.childNodes[0].nodeValue = `"${numero}"`;
}

