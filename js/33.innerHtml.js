
// Generando los links con la propiedad innerHTML
let usandoInnerHTML = function () {

    //Utiliznado el innerHTML
    let objeto = document.getElementById("contenedor-enlaces1");
    objeto.innerHTML = `<a href=${document.getElementById('text1').value}>Enlace 1</a>
                        <a href=${document.getElementById('text2').value}>Enlace 2</a>`;
}

// Generando los links sin la propiedad innerHTML
let sinInnerHTML = function () {

    //Primer enlace

    let nodo_elemento = document.createElement("a");        // crea el elemento

    let nodo_texto = document.createTextNode ("ir a google");    // crea el texto para el elemento

    nodo_elemento.appendChild(nodo_texto);                  // agrega el texto al elemento

    let url = document.getElementById('text1').value;       // se llama al valor del input

    nodo_elemento.setAttribute("href", url);                // se le agrega el atributo al elemento

    let contenedor = document.getElementById("contenedor-enlaces2");    // contenedor padre

    contenedor.appendChild(nodo_elemento);  // agregando el elemento al contenedor padre


    //Segundo enlace

    let nodo_elemento_2 = document.createElement("a");
    
    let nodo_texto_2 = document.createTextNode("ir a facebook");
    
    nodo_elemento_2.appendChild(nodo_texto_2);

    nodo_elemento_2.setAttribute("href",document.getElementById("text2").value);

    let contenedor_2 = document.getElementById("contenedor-enlaces2");

    contenedor_2.appendChild(nodo_elemento_2);
}


function crearLista(){

    const arrayDays = ["Lunes","Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    let cadena = "";
    
    //For of ejecuta un bloque de codigo para un objeto iterable
    for (let i of arrayDays) {
        
        //Concatena una serie de elementos <li> con el valor de cada posición del array
        cadena += `<li>${i}</li>`;
        
    }
    
    console.log(cadena);
    
    //Impimiendo en el DOM el valor de la cadena con todos los elementos <li>
    document.getElementById("listaNoOrdenada").innerHTML = cadena;
}