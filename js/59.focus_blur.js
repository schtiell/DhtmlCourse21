
let textboxes = document.getElementsByTagName("input");

for (let i = 0; i < textboxes.length; i++) {

    let element = textboxes[i];

    element.addEventListener("focus", e => {
        
        e.target.style.background = "#EAFAF1";
        e.target.style.border = "3px solid #58D68D";
        e.target.setAttribute("value", `Escribe tu ${e.target.id} por favor...`);
        console.log(e.target.id);
    })

    element.addEventListener("blur", e => {
        e.target.style.background = "#FFF ";
        e.target.style.border = "1px solid #ced4da";
        e.target.style.border = "1px solid #ced4da";
        e.target.setAttribute("value", "");
        console.log(e.target.id);
    })
}