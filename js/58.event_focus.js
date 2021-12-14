
console.log("focus!!!!");

let  foco = document.getElementById("buscar-id");
let  cbox = document.getElementById("cbox-id")

foco.addEventListener("focus", e => {
    console.log(e.target.value);
});

foco.addEventListener("blur", e => {
    console.log(`${e.target.id} fuera de foco`);
})


cbox.addEventListener("focus", e => {
    console.log(e.target.id);
});

cbox.addEventListener("blur", e => {
    console.log(`${e.target.id} fuera de foco`);
})

