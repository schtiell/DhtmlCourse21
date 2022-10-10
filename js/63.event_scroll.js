
// Funcion auto ejecutable
(function () {
    console.log("Evento scroll");
})();

window.addEventListener("scroll", () => {
    let scrolling = document.getElementById("containerlist");
    scrolling.style.top = window.scrollY + "px";
    scrolling.style.left = window.scrollX + "px";
    console.log(scrolling.style.top = window.scrollY + "px");
})