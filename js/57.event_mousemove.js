console.log("mousemove event");


let table = document.getElementById("table");

table.addEventListener("mousemove", (e) => {
    let x = document.getElementById("coordenadas_x");
    let y = document.getElementById("coordenadas_y");

    x.innerText = `Eje X: ${e.clientX}`;
    y.innerText = `Eje Y: ${e.clientY}`;
});