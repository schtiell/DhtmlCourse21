
// Arreglo con los mensajes a mostrar del porcentaje de grasa corporal
const leyendas = [
                    "5-9% grasa corporal",
                    "10-14% grasa corporal",
                    "15-19% grasa corporal",
                    "20-24% grasa corporal",
                    "25-29% grasa corporal",
                    "30-34% grasa corporal",
                    "35-39% grasa corporal",
                    ">40% grasa corporal"
                ];

//Numero para concatenar al nombre de la imagen a buscar
let numero = 1;

//Se invoca el elemento con id #persona y se escribe el elemento html tipo img con el nombre de la imagen corporal, por default es la imagen persona1.png
document.querySelector("#persona").innerHTML = `<img src="./img/persona${numero}.png" id="imagen">`;

//Se invoca al elemento con id rango y escucha al evento input para ejecutar la funcion anonima
document.querySelector("#rango").addEventListener("input", () => {

    //Cuerpo de la función.

    //Se busca el valor actual del elemento range seleccionado
    numero = parseInt(document.querySelector("#rango").value);

    //Se fija el atributo en elemento con id imagen y se cambia la ruta del atributo source
    document.querySelector("#imagen").setAttribute("src",`./img/persona${numero}.png`);

    //Se escribe el texto en el elemento con id grasa con el valor del arraglo meno 1 ya que el arraglo comienza en 0 y el elemento range en 1
    document.querySelector("#grasa").innerText = leyendas[numero - 1];
});