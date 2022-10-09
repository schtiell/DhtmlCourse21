
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", e => {

    let nombre = document.getElementById("user");
    let pass = document.getElementById("pass");
    let passconfirm = document.getElementById("confirmpass");


    if( nombre.value == "" || pass.value == "" || passconfirm.value == ""){
        alert("Debes completar los campos del formulario");

        //el metodo preventDefault() evita que se envien los datos al servidor
        e.preventDefault();
        return false;

    }else{

        if (pass.value == passconfirm.value){

            console.log("log in");
            return true;

        }else{
            alert("La contraseña debe ser igual");
            e.preventDefault();
            return false;
        }        
    }
})



