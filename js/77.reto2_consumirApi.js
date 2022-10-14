
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
            console.log(typeof datos.data);

            let precio = document.querySelector("#precio");

            // Se almacena en una variable el objeto
            let respuesta = datos.data;

            precio.innerHTML = parseInt(respuesta.priceUsd);

            // La funcion parseFloar convierte el argumento en valor flotante
            if(parseFloat(respuesta.changePercent24Hr) > 0){

                document.querySelector("#variacion").style.color = "green";
                document.querySelector("#variacion").innerHTML = "↑" + parseFloat(respuesta.
                changePercent24Hr).toFixed(2);

            }else{

                // El metodo numerico toFixed(), da formato de punto decimal, el parametro indica cuantos decimales apareceran despues del punto
                document.querySelector("#variacion").style.color = "red";
                document.querySelector("#variacion").innerHTML = "↓" + parseFloat(respuesta.changePercent24Hr).toFixed(2);
            }
        })

        .catch(error => console.log(error))

        /* o bien, pero como es una sola linea la arrow function permite omitir las llaves
            .catch(error => {
                console.log(error)
            })
        */
};

// Invocando a lafuncion
recuperarPrecio();

// Se llama cada 5 segundos a la función para actualizar los datos del sitio
setInterval(recuperarPrecio, 5000);