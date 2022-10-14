
//https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data-es


//Declaracion de una función
function recuperarPrecio(){

    //Fetch API, permite interactuar con APIs y obtener los datos a nuestra aplicación, de manera sencilla
    
    //El único parámetro requerido por el metodo fetch() es una url. El método por defecto en este caso es GET.
    fetch("https://api.coincap.io/v2/assets/bitcoin")

        // con arrow funtion .then(respuest => respuesta.json())

        // el metodo then

        // el parametro respuesta roma el valor devuelto del metodo fetch(url), sin embargo es un objeto por lo tanto se debe convertir a un objeto  JSON
        .then(respuesta => respuesta.json())
        
        /*convertida la respuesta a JSON, los datos deben ser procesados, por lo que nuevamente se llama al metodo then() */
        .then( datos => {

            console.log(datos);

            let precio = document.querySelector("#precio");

            let valor = datos.data;

            precio.innerHTML = parseInt(valor.priceUsd);

            if(parseFloat(valor.changePercent24Hr) > 0){

                document.querySelector("#variacion").style.color = "green";
                document.querySelector("#variacion").innerHTML = "↑" + parseFloat(valor.
                changePercent24Hr).toFixed(2);

            }else{

                document.querySelector("#variacion").style.color = "red";
                document.querySelector("#variacion").innerHTML = "↓" + parseFloat(datos.data.changePercent24Hr).toFixed(2);
            }
        })

        .catch(error => console.log(error))

        /* o bien, pero como es una sola linea la arrow function permite omitir las llaves
            .catch(error => {
                console.log(error)
            })
        */
}

recuperarPrecio();
setInterval(recuperarPrecio, 5000);