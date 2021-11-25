console.log("removechild");

let contador = 1;

let agregar = function () {

    let textNode = document.createTextNode(`${contador}: Nodo de texto.`);

    let parrafo = document.getElementById("parrafo");

    //parrafo.innerText = " ";

    parrafo.appendChild(textNode);

    contador += 1;
}

let eliminar = function() {

    let parrafo = document.getElementById("parrafo");

    if (parrafo.hasChildNodes()){

        //firstChild se posiciona en el primer nodo hijo y a partir de ahi comienza a eliminar los demas nodos.
        parrafo.removeChild(parrafo.firstChild);

        contador -= 1;

    }else{
        console.log("No quedan nodos hijo que eliminar");
    }
}