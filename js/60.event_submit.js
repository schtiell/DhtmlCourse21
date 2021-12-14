

console.log("event submit");

let formulario = document.getElementById("datos-formulario");

formulario.addEventListener("submit", e =>{

    let nombre = document.getElementById("text-name");
    let pass = document.getElementById("text-pass");
    let passconfirm = document.getElementById("text-passconfirm");


    if( nombre.value == "" || pass.value == "" || passconfirm.value == ""){
        alert("Debes completar los campos del formulario");

        //el metodo preventDefaul() evita que se envien los datos al servidor
        e.preventDefault();
        
    }else{

        if (pass.value == passconfirm.value){

            console.log("log in");
            return true;

        }else{

            alert("La contraseña debe ser igual");
            e.preventDefault();
        }        
    }
})



