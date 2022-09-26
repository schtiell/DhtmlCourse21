console.log('Propiedad childNodes & children');

function calcularHijos(){

    let hijos = document.getElementById("contenedorPadre");

    //Muestra en consola 7 ya que son 3<p> y 4 saltos de linea
    let cadena = "";
    let nodos_texto = 0;

    for (let i = 0; i < hijos.childNodes.length; i++) {
        
        //childNodes, devuelve nodos de texto y nodos elementos
        if (hijos.childNodes[i].nodeType == Node.TEXT_NODE) {
            cadena = cadena + 'Nodo tipo texto \n';
            nodos_texto +=1;
        }

        if (hijos.childNodes[i].nodeType == Node.ELEMENT_NODE) {
            cadena = cadena + 'Nodo tipo elemento\n';
        }
    }

    console.log(`${cadena}`);
    console.log(`El numero de nodos texto es: ${nodos_texto}, ya que los saltos de linea son considerados nodos de texto`);

}

// La propiedad children retorna unicamente el numero de elementos de un nodo
function calcularNodosElementos() {
    let elementos = document.getElementById('contenedorPadre');
    console.log(`El numero de nodos elemento es: ${elementos.children.length}`);
}