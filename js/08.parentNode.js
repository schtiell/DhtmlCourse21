console.log("Llegue al js parentNode");

function cambiarColorDiv () { 
    let parrafo = document.getElementById('parrafo1');
    let nodoPadre = parrafo.parentNode;
    nodoPadre.style.background = "lightgreen";
}

function cambiarFuente () {
    let container = document.getElementById('parrafo1');
    let nodoPadre = container.parentNode;

    nodoPadre.style.fontSize = "40px";

    console.log("Al modificar el padre del div, se modifican todos los elementos del body, ya que el padre del div es el body")
}