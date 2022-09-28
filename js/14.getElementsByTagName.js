
let obtenerParrafos = function () {  

    let array = document.getElementsByTagName('p');

    for (let i = 0; i < array.length; i++) {

        console.log(`Parrafo ${i+1}: ${array[i].childNodes[0].nodeValue}`);

        array[i].style.fontSize = "20px";
        array[i].style.backgroundColor = "silver";

        
    }
}

//Funcion para modificar los elemento de una lista
let modificarLista = function () {
    
    // Nodo padre
    let items = document.getElementById("lista");
    
    // Nodos pertenecientes la nodo padre
    let lista = items.getElementsByTagName("li");

    let contador = 0;

    for (let i of lista) {
        i.childNodes[0].nodeValue = i.childNodes[0].nodeValue + " Elemento: " + contador++;
    }
}


//Funcion para el ejercicio 15.getElementsByTagName.html
let colorearParrafos = function () {    
    
    let container = document.getElementById("container-1");

    let parrafos = container.getElementsByTagName('p');

        console.log(parrafos);

    for (const element of parrafos) {

        element.style.background = "red";
        
    }
    
}

var esconderParrafos = function () {
    
    let container = document.getElementById("container-2");

    let parrafos = container.getElementsByTagName("p");

    console.log(container);

    console.log(parrafos);

    for (const p of parrafos) {

        console.log(`${container.children[0].nodeName} - ${p.innerHTML}`);

        p.style.display = "none";
    }
}