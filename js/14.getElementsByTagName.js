console.log("Llegue al js");

let obtenerParrafos = function () {  
    let array = document.getElementsByTagName('p');

    for (let i = 0; i < array.length; i++) {
        
        //array[i].childNodes[0].nodeValue = array[i].childNodes[0].nodeValue + " ";

        console.log(array[i].childNodes[0].nodeValue);

        array[i].style.fontSize = "25px";
        array[i].style.backgroundColor = "silver";
        
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