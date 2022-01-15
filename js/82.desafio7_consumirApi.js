console.log("desafio 8");

fetch("https://api.dailymotion.com/videos?limit=100")
    .then(response => response.json())
    .then(datos => {

        let cadena = '';

        for (const registro of datos.list) {
            cadena += ` <div class="tarjeta">
                            <a target="_blank" href="https://www.dailymotion.com/video/${registro.id}">
                                <img src="https://www.dailymotion.com/thumbnail/video/${registro.id}">
                            </a>
                            <br>
                            <p>${registro.title}</p>
                        </div>`;
            document.querySelector("#datos").innerHTML = cadena;
        }
    })