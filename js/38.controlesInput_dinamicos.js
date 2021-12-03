let contador = 0;

let generarControles = function () {
    //console.log("control generado");

    contador ++;

    let inpuText = document.createElement("input");

    inpuText.type = "text";

    inpuText.name = "nombre" + contador;

    inpuText.id = "input" + contador;

    inpuText.placeholder = inpuText.name;

    document.getElementById("fieldset-id").appendChild(inpuText);

    document.getElementById("fieldset-id").appendChild(document.createElement("br"));

}    


let numeroHijos = function (){ 

    //Creando una variable con el numero seleccionado en el select control
    let numero = Number(document.getElementById("listaOpciones").value);

    //Creando la variable para la cadena
    let cadena = "";

    //Ciclo for para crear el numero de elementos seleccionado
    for (let i = 1; i <= numero; i++) {

        //Creando el elemento html input con su respectiva etiqueta label
        cadena += ` <label for="text-${i}"> Texto: ${i}
                    <input type="text" id="text-${i}" name="text-${i}" placeholder="text-${i}">
                    </label>
                    <br>`;

    }

    //Indicando en que parte del DOM se va a imprimir la cadena
    document.getElementById("seccion").innerHTML = cadena;
}