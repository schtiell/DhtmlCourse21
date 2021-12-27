console.log("consumiendo api");

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then( datos => {
        let banderas = " ";
        for (const pais of datos){
            banderas += `<div class="tarjeta">
                            <img src="${pais.flags.png}"><br>
                            <p>Pais: ${pais.name.official}</p>
                            <p>Capital: ${pais.capital}</p>
                            <p>Población: ${pais.population.toLocaleString()}</p>
                            <p>Continente: ${pais.region}</p>
                        </div>`;
        }

        const elemento = document.querySelector("#banderas");
        elemento.innerHTML = banderas;
    })
    .catch(error => console.log(error));