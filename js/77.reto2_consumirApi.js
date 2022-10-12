//console.log("consumiendo api");

//https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data-es


//Declaracion de una función
function recuperarPrecio(){

    //Fetch API, permite interactuar con APIs y obtener los datos a nuestra aplicación, de manera sencilla
    
    //El único parámetro requerido de fetch() es una url. El método por defecto en este caso es GET.
    fetch("https://api.coincap.io/v2/assets/bitcoin")
        .then(respuesta => respuesta.json())
        
        .then(datos => {
            console.log(datos);
            document.querySelector("#precio").innerHTML = parseInt(datos.data.priceUsd);

            if(parseFloat(datos.data.changePercent24Hr) > 0){
                document.querySelector("#variacion").style.color = "green";
                document.querySelector("#variacion").innerHTML = "↑" + parseFloat(datos.data.changePercent24Hr).toFixed(2);
            }else{
                document.querySelector("#variacion").style.color = "red";
                document.querySelector("#variacion").innerHTML = "↓" + parseFloat(datos.data.changePercent24Hr).toFixed(2);
            }
        })
        .catch(error => console.log(error))

        /* PUEDE HACERSE ASI TAMBIEN PERO COMO SOLO ES UN LINEA DEL CUERPO DE LA FUNCION PUEDEN OMITIRSE LAS LLAVES DE APERTURA Y CIERRE DE LA FUNCIÓN
            .catch(error => {
                console.log(error)
            })
        */
}

recuperarPrecio();
setInterval(recuperarPrecio, 5000);