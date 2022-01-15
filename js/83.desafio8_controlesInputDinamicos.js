console.log("desafio 8");

document.querySelector("#crear").addEventListener("click", () => {

    const tipo = document.querySelector("#seleccion").value;
    console.log(tipo);

    if(tipo != "seleccionar"){
        document.querySelector("#resultado").innerHTML = `<input type="${tipo}" class="form-control" value="${tipo}">`;
    }
    else{
        document.querySelector("#resultado").innerHTML = "";
    }
})