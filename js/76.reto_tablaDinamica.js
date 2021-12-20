//console.log("tabla dinamica, reto 1");


let generarTabla = function (palabra) {

    let tabla = `<table>`;
    tabla +=    `<tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                </tr>`;

    for (const persona of personas) {

            if (palabra == undefined || persona.nombre.startsWith(palabra)){
                tabla +=    `<tr>
                                <td>${persona.nombre}</td>
                                <td>${persona.edad}</td>
                            </tr>`;
            }
        }

    tabla += `</table>`;

};

document.querySelector("#textBox-id").addEventListener("keyup", () => {
    generarTabla(document.querySelector("#textBox-id").value);
})


//Generar una tabla dinamica a partir del siguente arreglo de objetos, cada objeto contiene el nombre y la edad de las personas
const personas = [
    {
        nombre: "dardo",
        edad: 52
    },
    {
        nombre: "pedro",
        edad: 522
    },
    {
        nombre: "ana",
        edad: 89
    },
    {
        nombre: "alicia",
        edad: 55
    },
    {
        nombre: "carlos",
        edad: 21
    },
    {
        nombre: "capitanich",
        edad: 89
    },
    {
        nombre: "carla",
        edad: 66
    },
    {
        nombre: "altina",
        edad: 90
    }
]

generarTabla();
