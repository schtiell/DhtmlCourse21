console.log("childNodes - nodeValues");

//Mediante la propiedad childNodes accedemos a la primer componente que tiene la referencia al nodo de tipo texto. Por último asignamos el nuevo texto a la propiedad nodeValue.
function cambiarTitulo () {

    let titulo = document.getElementById("titulo");

    console.log(`El titulo actual es: ${titulo.childNodes[0].nodeValue}`);

    titulo.childNodes[0].nodeValue = "Titulo cambiado con la propiedad nodeValue de la propiedad childNodes";

    console.log(`El nuevo titulo es: ${titulo.childNodes[0].nodeValue}`);
}


//Funcion para actualizar el titulo del html
function actualizarContador () {

    //Se obtiene el valor del elemento por su id
    let numero = document.getElementById("contador");

    //Se obtiene el valor del childNodes[0]
    let num = numero.childNodes[0].nodeValue;

    //Se convierte el valor en la posicion 1 del valor del childNode
    let contador = Number(num.charAt(1));

    //Se le suma el valor de 1
    contador +=1;

    //Se le asgina el nuevo valor al titulo
    numero.childNodes[0].nodeValue = `"${contador}"`;
}


let actualizarParrafo = function () {
    
    let parrafo = document.getElementById("parrafos");

    //console.log(parrafo.children.length);

    for (let i = 0; i < parrafo.children.length; i++) {

        console.log(`${i}: ${parrafo.children[i].nodeName}`);
        parrafo.children[i].nodeValue = `${i}`;
        console.log(`${i}: ${parrafo.children[i].nodeValue}`)
        
    }
}
