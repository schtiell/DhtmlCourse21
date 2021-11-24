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

function addItemsList(){

    let textNode1 = document.createTextNode("Elemento de la lista");
    let textNode2 = document.createTextNode("Elemento de la lista");
    let textNode3 = document.createTextNode("Elemento de la lista");

    let itemList1 = document.getElementById("l1");
    itemList1.innerText = " ";
    itemList1.appendChild(textNode1);

    let itemList2 = document.getElementById("l2");
    itemList2.innerText = " ";
    itemList2.appendChild(textNode2);

    let itemList3 = document.getElementById("l3");
    itemList3.innerText = " ";
    itemList3.appendChild(textNode3);

}