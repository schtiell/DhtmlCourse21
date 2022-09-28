let contador = 1;

// Funcion para crear un nodo de texto y asignarlo a un elemento del DOM
let agregarParrafo = function () {
    
    //Creando un nodo de texto
    let nodo_de_texto = document.createTextNode(`Creando un nodo de texto No: ${contador}:`);

    //Invocando el parrafo por su id
    let parrafo = document.getElementById('parrafo');

    //Eliminando el texto predefinido para el parrafo en html
    parrafo.innerText =  "";

    //Asignado el textnode a un elementNode
    parrafo.appendChild(nodo_de_texto);

    //Imprimiendo en consola el contenido HTML de la variable con la referencia del id parrafo
    console.log(parrafo.innerHTML);

    //Aumentando el contador en 1
    contador += 1;

}

function addItemsList(){

    // Se crean los nodos de texto
    let textNode1 = document.createTextNode("Elemento de la lista");
    let textNode2 = document.createTextNode("Elemento de la lista");
    let textNode3 = document.createTextNode("Elemento de la lista");

    // Se hace referencia al elemento del DOM
    let itemList1 = document.getElementById("l1");

    // Se pone en blanco el texto del elemento
    itemList1.innerText = " ";

    // Se el agrega al elemento del DOM el nodo de texto 
    itemList1.appendChild(textNode1);

    let itemList2 = document.getElementById("l2");
    itemList2.innerText = " ";
    itemList2.appendChild(textNode2);

    let itemList3 = document.getElementById("l3");
    itemList3.innerText = " ";
    itemList3.appendChild(textNode3);
}
