
var removerPrimerElemento = function () {

    //El elemento a eliminar se obtiene a traves de contenedor padre
    let contenedorPadre = document.getElementById("contenedorPadre");

    if (contenedorPadre.children.length > 0){

        let primerElemento = contenedorPadre.firstElementChild;

        console.log(primerElemento.innerHTML);
        
        contenedorPadre.removeChild(primerElemento);

    }else{
        console.log("El contenedor no tiene nodos hijo")
    }   

}


let removerUltimoElemento = function () {

    let contenedorPadre = document.getElementById("contenedorPadre");

    if (contenedorPadre.children.length > 0) {

        //Eliminando los nodos elementos desde el ultimo al primero
        contenedorPadre.removeChild(contenedorPadre.children[contenedorPadre.children.length -1]);

    }else{

        console.log("El elemento padre no tiene elementos html hijos");
    }

}

let removerElementoEspecifico = function () {

    let opcion = document.getElementById("opcion").value;

    opcion = opcion -1;

    let contenedor = document.getElementById("contenedorParrafos");

    if (contenedor.children.length > 0)  {

        if ( opcion < contenedor.children.length) {
            
            contenedor.removeChild(contenedor.children[opcion]);

        }else{
            console.log("opcion no valida");
        }
    }else{

        console.log("No hay hijos en este parentNode");
    }
}