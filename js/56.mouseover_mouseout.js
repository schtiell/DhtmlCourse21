
let entrar = function (e) {

    //Si el nombre de etique es un button entonces aplica el background  rojo
    if (e.target.tagName === "BUTTON"){

        let boton = e.target;
        boton.removeAttribute("class");
        boton.setAttribute("class","btn btn-warning");

    }else{
        e.target.style.background = "#85C1E9";
    }
}

let salir = function (e) {
    

    if (e.target.tagName === "BUTTON"){

        let boton = e.target;
        boton.removeAttribute("class");
        boton.setAttribute("class","btn btn-primary");

    }else{
        e.target.style.background = "#343A40";
    }
}



let botones = document.getElementsByTagName("button");
let celdas = document.getElementsByTagName("td");

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("mouseover", entrar);
    botones[i].addEventListener("mouseout", salir);   
}


for (let i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener("mouseover", entrar);
    celdas[i].addEventListener("mouseout", salir);
    
}
