
// Funcion que recibe como parametro el objeto this
let eventosMismaFuncion = function (objeto){ 

    let referencia = document.getElementById("parrafo"); 

    referencia.innerText = `Las propiedades del boton que hizo clic son:\n\n Tipo: ${objeto.type},\n Name: ${objeto.name},\n Id: ${objeto.id},\n class: ${objeto.className}`;

    referencia.style.visibility = "visible";

}

// Funcion que recibe como parametro el objeto this, para concatenar los datos de su valor
let concatenarValores = function (objeto) {

    let referencia = document.getElementById("parrafo"); 
    referencia.innerText += objeto.value;
}
