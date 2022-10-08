

let imagen = document.getElementById("imagen");

imagen.addEventListener("mousemove", (e) => {
    let x = document.getElementById("coordenadas_x");
    let y = document.getElementById("coordenadas_y");

    x.innerText = `Eje X: ${e.clientX}`;
    y.innerText = `Eje Y: ${e.clientY}`;

    x.style.fontSize = "x-large";
    y.style.fontSize = "x-large";
});