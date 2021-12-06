
let eventosMismaFuncion = function (objeto){ 
    //console.log("objeto this");

    //let objeto = document.getElementById("btn-1")

    let referencia = document.getElementById("parrafo"); 

    console.log(referencia);

    referencia.innerText = `Tipo: ${objeto.type}, Name: ${objeto.name}, Id: ${objeto.id}, class: ${objeto.className}`;

}


let concatenarValores = function (objeto) {
    let referencia = document.getElementById("parrafo"); 
    referencia.innerText += objeto.value;
}
