console.log("focus & blur");


let nombre = document.getElementById("text-name");
let email = document.getElementById("text-email");


nombre.addEventListener("focus", e => {
    e.target.style.background = "#FDEDEC ";
    console.log(e.target.id);
});

nombre.addEventListener("blur", e => {
    e.target.style.background = "#FBFCFC ";
    console.log(e.target.id);
});

email.addEventListener("focus", e => {
    e.target.style.background = "#FDEDEC ";
    console.log(e.target.id);
});

email.addEventListener("blur", e => {
    e.target.style.background = "#FBFCFC ";
    console.log(e.target.id);
});