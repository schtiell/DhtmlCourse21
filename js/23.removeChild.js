
var removerPrimerElemento = function () {

    //console.log("Elemento removido");

    //El elemento a eliminar se obtiene a traves de contenedor padre
    let parrafo = document.getElementById("container");

    if (parrafo.children.length > 0){

        let valorEliminado = parrafo.children[0].innerText;
        console.log(valorEliminado);
        parrafo.removeChild(parrafo.children[0]);

        // for (let i = 0;  i < parrafo.children.length; i++) {
        //     let valorEliminado = parrafo.children[i].innerText;
        //     console.log(valorEliminado);

        // }

    }else{
        console.log("El contenedor no tiene nodos hijo")
    }

}


let removerUltimoElemento = function () {

    let parrafos = document.getElementById("container");

    if (parrafos.children.length > 0) {

        //Eliminando los nodos elementos desde el ultimo al primero
        parrafos.removeChild(parrafos.children[parrafos.children.length -1]);

    }else{

        console.log("El elemento padre no tiene elementos html hijos");
    }

}

let removerElementoEspecifico = function () {

    //console.log("elemento especifico removido");

    let no_parrafo = document.getElementById("inputDel").value;

    //console.log(no_parrafo);

    parrafos = document.getElementById("container");

    if (no_parrafo < parrafos.children.length)  {

        if (parrafos.children.length > 0) {
            
            parrafos.removeChild(parrafos.children[no_parrafo]);

        }else{
            console.log("No hay hijos en este parentNode");
        }
        
    }else{

        console.log("opcion no valida");
    }
}