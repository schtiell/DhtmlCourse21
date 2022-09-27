console.log("Llegue al js parentNode");

function cambiarColorDiv () { 
    let parrafo = document.getElementById('parrafo1');
    let nodoPadre = parrafo.parentNode;
    console.log(nodoPadre.nodeName);
    nodoPadre.style.background = "#D5F5E3";
}

function cambiarFuente () {

    // Referencia del elemento
    let container = document.getElementById('parrafo1');

    // Obteniendo el nodo padre
    let nodoPadre = container.parentNode;
    console.log(nodoPadre);

    // Modificando los estidos del nodo padre, que afectará a todos los hijos
    if (nodoPadre.style.fontSize == "16px") {

        nodoPadre.style.fontSize = "25px";
        nodoPadre.style.color = "#48BDF7";
    } else {
        nodoPadre.style.fontSize = "16px";
        nodoPadre.style.color = "#000";
    }

    console.log("Al modificar el padre del div, se modifican todos los nodos hijos");
}