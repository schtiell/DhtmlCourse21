
//La función fetch recibe la dirección de la api y retorna un archivo JSON
fetch("https://restcountries.com/v3.1/all")

    //Recibido los datos se convierten en un objeto JSON
    .then(response => response.json())

    //Con la promesa devuelta por el metodo then se recibe la información en formato json y se recorre para obtener los datos necesarios de la API
    .then( datos => {

        //Cadena vacia
        let banderas = " ";
        //console.log(datos);

        for (const pais of datos){

            let monedas = pais.currencies;
            let idiomas = pais.languages;
            let moneda;
            let idioma;
            
            for (const key in monedas) {
                if(monedas.hasOwnProperty(key)){
                    //console.log(monedas[key].name);
                    moneda = monedas[key].name;
                }
            }

            for (const key in idiomas) {
                if (idiomas.hasOwnProperty(key)) {
                    idioma = idiomas[key];
                    
                }
            }

            banderas += `<div class="tarjeta">
                            <img src="${pais.flags.png}"><br>
                            <p>Pais: ${pais.name.official}</p>
                            <p>Capital: ${pais.capital}</p>
                            <p>Población: ${pais.population.toLocaleString()}</p>
                            <p>Continente: ${pais.region}</p>
                            <p>Lenguaje: ${idioma}</p>
                            <p>Moneda: ${moneda}</p>
                        </div>`;
        }

        //S invoca al elemento HTML a traves del selector css por id
        const elemento = document.querySelector("#banderas");

        //Finalmente escribe en el DOM el contenido de la la cadena llamada banderas
        elemento.innerHTML = banderas;
    })

    //Muestra en consola si ocurre un error al llamar a la API
    .catch(error => console.log(error));