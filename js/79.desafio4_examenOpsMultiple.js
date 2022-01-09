console.log("Desafio 4: examen de opción multiple");


//La fn proximaBandera() define un array donde se almacenaran al azar 4 numeros aleatorios entre 0 y 249 los cuales no deben repetirse
function proximaBandera () {
    const paises = [];
    let cant = 0;

    do{
        let aleatorio = Math.trunc(Math.random() * 250);
        if(!paises.includes(aleatorio)){
            paises.push(aleatorio);
            cant++;
        }
    }while(cant < 4);

    //Ahora se genera un valor entre 0 y 3, el mismo representa la posición de la bandera que debe adivinar el usuario:
    let correcta = Math.trunc(Math.random() * 4);
    let pos = paises[correcta];

    //Mostramos la bandera generando una etiqueta 'img' y recuperando de la variable datos la bandera:
    let pregunta = `<img src="${datos[pos].flags.png}">`;
    const d = document.querySelector("#contenedor");
    d.innerHTML = pregunta;

    //Ahora generamos los cuatro botones con los nombre de países que hemos elegido al azar (uno de ellos es el correcto):
    pregunta = `<input class="boton" type="button" value="${datos[paises[0]].name.common}" id="b1">
                <input class="boton" type="button" value="${datos[paises[1]].name.common}" id="b2">
                <input class="boton" type="button" value="${datos[paises[2]].name.common}" id="b3">
                <input class="boton" type="button" value="${datos[paises[3]].name.common}" id="b4">
                `;

    const b = document.querySelector("#botones");
    b.innerHTML = pregunta;

    //Debemos registrar el evento 'click' para cada uno de los cuatro botones y dentro del mismo veriridar si coincide con la bandera correcta, aumentando en uno el contador respectivo y proceder a llamar a 'actualizarResultados' para que se muestre la siguiente bandera:
    for (let i = 1; i < 4; i++) {

        document.querySelector(`#b${i}`).addEventListener('click', evt => {

            if (correctas == `${i-1}`){
                correctas ++;
            }else{
                incorrectas ++;
                alert(`Es la bandera de: ${datos[paises[correctas]].name.common}`);
            }

            actualizarResultados();
        })
    }
}

//La función actulizarResultados() muestra la cantidad de respuestas correctas o incorrectas hasta el momento y llama a la función proximaBandera()
function actualizarResultados () {
    document.querySelector("#resultados").innerHTML = `<p> Correctas: ${correctas} </p>
                                                        <p> Incorrectas: ${incorrectas} </p>`;
    proximaBandera();
}


//Variables globales para los contadores de correctas e incorrectas y la variable que almacenará la referencia al arreglo de datos que se recuperará del servidor
let correctas = 0;
let incorrectas = 0;
let datos = null;

//Petición al servidor de todos los datos de paises donde actualizamos la variable datos y se llama a la función actualizarResultados()
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(bandera => {
        datos = bandera;
        actualizarResultados();
    })
    //.catch(error => console.log(error));
