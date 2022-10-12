

let getElementList = function () {
    
    let listaol = document.querySelectorAll("ol li");
    console.log(typeof listaol);

    listaol.forEach(element => {
        element.style.color = "#3498DB";
    });

    let lista_ul = document.querySelectorAll("ul li");
    console.log(typeof lista_ul);
    
    for (let elemento of lista_ul) {
        elemento.style.background = "#AED6F1";
    }
}

// Seleccionando elemento por clase
let boton = document.querySelector(".btn");
boton.addEventListener("click", getElementList)