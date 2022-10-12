
//Array para generar la tabla dinámica
let personas = [
    {
        nombre: "dardo",
        edad:   52
    },
    {
        nombre: "pedro",
        edad:   522
    },
    {
        nombre: "ana",
        edad:   89
    },
    {
        nombre: "alicia",
        edad:   55
    },
    {
        nombre: "carlos",
        edad:   21
    },
    {
        nombre: "capitanich",
        edad:   89
    },
    {
        nombre: "carla",
        edad:   66
    },
    {
        nombre: "altina",
        edad:   90
    }
]

// Creando la tabla
let generarTabla = function (buscar) {

    let tabla = `<table>`;
    tabla +=    `<thead>
                    <th>Nombre</th>
                    <th>Edad</th>
                </thead>`;

    for (const persona of personas) {

            // startWith() indica si una cadena de texto comienza con los caracteres
            if (buscar == undefined || persona.nombre.startsWith(buscar)){
                tabla +=    `<tr>
                                <td>${persona.nombre}</td>
                                <td>${persona.edad}</td>
                            </tr>`;
            }
        }

    tabla += `</table>`;
    document.querySelector("#table-container").innerHTML = tabla;
}

//Agregando atributos y clases a la tabla
let modificarTabla = function () {
    let tabla = document.querySelector('table');
    tabla.setAttribute("id","tabla-id");
    tabla.className = "table table-striped table-hover";
}

// Realizando busquedas
let palabra = document.querySelector("#buscar");
palabra.addEventListener("keyup", () => {
    generarTabla(document.querySelector("#buscar").value);
    modificarTabla();
});

// Invocando la función
generarTabla();
modificarTabla();




