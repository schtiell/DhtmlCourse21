
(function () {
    console.log("Evento scroll");
})();

window.addEventListener("scroll", e => {
    let lista = document.getElementById("containerlist");
    lista.style.top = window.scrollY + "px";
    lista.style.left = window.scrollX + "px";
    console.log(lista.style.top = window.scrollY + "px");
})