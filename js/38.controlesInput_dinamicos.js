let contador = 0;

let generarControles = function () {

    contador ++;

    let inpuText = document.createElement("input");             // Se crea el ELEMENT_NODE

    let etiqueta = document.createElement("label");

    etiqueta.innerText = "Nombre:";

    inpuText.type = "text";                                     // Propiedad type

    inpuText.name = `Nombre: ${contador}`;                      // Propiedad name

    inpuText.id = `inputcontador${contador}`;                   // Propiedad id

    inpuText.placeholder = inpuText.name;                       // Propiedad placeholder

    etiqueta.setAttribute("class", "control")                   // Propiedad class
    inpuText.setAttribute("class","form-control control");      

    document.getElementById("otroControl").appendChild(etiqueta);
    document.getElementById("otroControl").appendChild(inpuText);       // Agregando el input a un contenedor
}    


let numeroHijos = function (){ 

    //Creando una variable con el numero seleccionado en el select control
    let numero = Number(document.getElementById("listaOpciones").value);

    //Creando la variable para la cadena
    let cadena = "";

    //Ciclo for para crear el numero de elementos seleccionado
    for (let i = 1; i <= numero; i++) {

        //Creando el elemento html input con su respectiva etiqueta label
        cadena += ` <label for="text-${i}"> Texto: ${i} </label>
                    <input type="text" class="form-control control" id="text-${i}" name="text-${i}" placeholder="texto">`;

    }

    //Indicando en que parte del DOM se va a imprimir la cadena
    document.getElementById("seccion").innerHTML = cadena;
}