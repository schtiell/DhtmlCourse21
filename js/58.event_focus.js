// Funciones

let foco = document.getElementById("buscar");
let cbox = document.getElementById("cbox")


foco.addEventListener("focus", e => {
    console.log(`${e.target.name} en el foco`);
});

foco.addEventListener("blur", e => {
    console.log(`${e.target.name} fuera de foco`);
})


cbox.addEventListener("focus", e => {
    console.log(`${e.target.name} en el foco`);
});

cbox.addEventListener("blur", e => {
    console.log(`${e.target.name} fuera de foco`);
});




