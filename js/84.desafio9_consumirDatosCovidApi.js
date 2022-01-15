console.log("desafio 9");

fetch("https://api.covid19api.com/summary")
    .then(response => response.json())
    .then(datos => {

        let cadena = `  <p>
                            <strong>Casos confirmados:</strong> ${new Intl.NumberFormat("es").format(datos.Global.TotalConfirmed)}
                        </p>
                        <p>
                            <strong>Total de muertes: </strong> ${new Intl.NumberFormat("es").format(datos.Global.TotalDeaths)}
                        </p>
                        <hr>
                        <table class="table table-striped">
                        <tr>
                            <th>Pais</th>
                            <th style="text-align:right">Casos</th>
                            <th style="text-align:right">Total de Muertes</th>
                        </tr>`;

        for (const pais of datos.Countries) {

            cadena += ` <tr>
                            <td>${pais.Country}</td>
                            <td style="text-align:right">${new Intl.NumberFormat("es").format(pais.TotalConfirmed)}</td>
                            <td style="text-align:right">${new Intl.NumberFormat("es").format(pais.TotalDeaths)}</td>
                        </tr>`;
        }

        cadena += `</table>`;

        document.querySelector("#datos").innerHTML = cadena;
    });