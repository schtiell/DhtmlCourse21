console.log("desafio 8");

//Al cargar el sitio completamente se llama a la api a traves de la función fetch
fetch("https://api.dailymotion.com/videos?limit=100")

    //El metodo recibe los datos del servidor y son convertidos en formato json
    .then(response => response.json())
    .then(datos => {

        let cadena = '';

        //Con los datos recibidos se muestran los datos de cada video generados dinamicamente.
        for (const registro of datos.list) {
            cadena += ` <div class="tarjeta">
                            <a target="_blank" href="https://www.dailymotion.com/video/${registro.id}">
                                <img src="https://www.dailymotion.com/thumbnail/video/${registro.id}">
                            </a>
                            <br>
                            <p>${registro.title}</p>
                        </div>`;

            //Finalmente se escriben los datos en el DOM dentro del elemento con id datos
            document.querySelector("#datos").innerHTML = cadena;
        }
    })