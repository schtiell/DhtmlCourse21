

let prevenirEvento = function (e) {
    e.preventDefault();
    let url = e.target.getAttribute("href");
    window.open(url);
}

document.getElementById("ancla").addEventListener("click", prevenirEvento);