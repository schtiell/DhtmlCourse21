console.log('Llegué al appendChild file js');

let contador = 1;

let agregarParrafo = function () {
    
    //Creando un nodo de texto
    let textNode = document.createTextNode(`${contador}: Creando un nodo de texto`);

    //Invocando el parrafo por su id
    let parrafo = document.getElementById('parrafo');

    //ELiminando el texto predefinido para el parrafo en html
    parrafo.innerText =  " ";

    //Asignado el textnode a un elementNode
    parrafo.appendChild(textNode);

    //Imprimiendo en consola
    console.log(parrafo.appendChild(textNode));

    //Aumentando el contador en 1
    contador += 1;

}