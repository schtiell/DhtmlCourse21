console.log("querySelectorAll");

let resaltarSueldos = function () {

    let salarios = document.querySelectorAll("table .sueldos");

    for (const element of salarios) {
        element.style.background = "lightgreen";
    }

}

let boton = document.querySelector("#btn-id");
boton.addEventListener("click", resaltarSueldos);