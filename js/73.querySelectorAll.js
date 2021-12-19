
console.log("querySelectorAll");

let boton = document.querySelector(".btn");

boton.addEventListener("click", e => {

    let lista_ol = document.querySelectorAll("ol li");

    for (const elemento of lista_ol) {

        elemento.style.color = "lightgreen";
    }

    let lista_ul = document.querySelectorAll("ul li");

    for (const elemento of lista_ul) {

        elemento.style.background = "lightgreen";
    }

});