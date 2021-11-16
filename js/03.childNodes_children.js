console.log('Propiedad childNodes & children');

function calcularHijos(){
    let hijos = document.getElementById("container");

    //Muestra en consola 7 ya que son 3<p> y 4 saltos de linea
    console.log(hijos);
    console.log(`La cantidad de hijos es ${hijos.childNodes.length}`);

    let cadena = "";

    for (let i = 0; i < hijos.childNodes.length; i++) {
        
        if (hijos.childNodes[i].nodeType == Node.TEXT_NODE) {
            cadena = cadena + 'Nodo tipo texto \n';
        }

        if (hijos.childNodes[i].nodeType == Node.ELEMENT_NODE) {
            cadena = cadena + 'Nodo tipo elemento\n';
        }
    }

    console.log(`${cadena}`);
}


function calcularElementos() {
    let elementos = document.getElementById('container');
    console.log(`El numero de elementos es ${elementos.children.length}`);
}