
let prevenirEvento = function (e) {

    //Evita que se dispare el comportamiento por default de un enlace que es abrir la liga definida en el atributo href
    e.preventDefault();

    //Obtiene la url del href y la abre en una nueva pestaña utilizando window.open(url)
    let url = e.target.getAttribute("href");
    window.open(url);
}

let link = document.getElementById("ancla");
link.addEventListener("click", prevenirEvento);