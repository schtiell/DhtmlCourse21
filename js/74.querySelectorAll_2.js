
let resaltarSueldos = function () {

    let salarios = document.querySelectorAll("table .sueldos");

    for (const element of salarios) {
        element.style.background = "#D1F2EB"; 
    }
}

let boton = document.querySelector("#btn");
boton.addEventListener("click", resaltarSueldos);