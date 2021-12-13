console.log("eventos mouseover & mouseout");


let entrar = function (e) {

    //Si el nombre de etique es un button entonces aplica el background  rojo
    if (e.target.tagName === "BUTTON"){
        e.target.style.background = "#EC7063";
    }else{
        e.target.style.background = "#F2F4F4";
    }
}

let salir = function (e) {
    
    if (e.target.tagName === "BUTTON"){
        e.target.style.background = "#0275d8";
    }else{
        e.target.style.background = "#FDFEFE"
    }
}



let array = document.getElementsByTagName("button");
console.log(array.length);

for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("mouseover", entrar);
    array[i].addEventListener("mouseout", salir);   
    console.log(array[i]);
}

//Busca todas las etiquetas td y las almacena en un arreglo
let arrayCeldas = document.getElementsByTagName("td");
console.log(arrayCeldas.length);

//Recorre el arreglo para aplicar el metodo addEventListener
for (let i = 0; i < arrayCeldas.length; i++) {
    arrayCeldas[i].addEventListener("mouseover", entrar);
    arrayCeldas[i].addEventListener("mouseout", salir);
    
}
