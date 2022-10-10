
let contador = 0;

let presionarBoton = function (e) {

    let elemento = e.target;
    elemento.style.background = "#F4D03F"
    contador += 1;
    elemento.innerText = contador;
    
}

let presionarBotonDocumento = function (){
    let elemento = document.getElementsByTagName("body");
    elemento[0].style.background = "#D4EFDF";
    contador += 1;
    elemento.innerText = contador;
}


document.getElementById("boton-1").addEventListener("click",presionarBoton,true);
document.getElementById("boton-2").addEventListener("click",presionarBoton,true);
document.getElementById("boton-3").addEventListener("click",presionarBoton,true);

document.addEventListener("click", presionarBotonDocumento);






