console.log("API autores");

// Creando elementos HTML
let crearNodos = function (el) {
    
    let elemento = document.createElement(el);
    return elemento; 
}

let agregarElementos = function (parent, el) {
    
    return parent.appendChild(el);
}

let ul = document.getElementById("autores");

let recuperarAutor = function () {

    fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => {
        let autores = data.results;
        return autores.map( autor => {
            let li = crearNodos("li");
            let img = crearNodos('img');
            let span = crearNodos('span');

            img.src = autor.picture.large;
            span.innerHTML = `${autor.name.first} ${autor.name.last}`

            agregarElementos(li,img);
            agregarElementos(li,span)
            agregarElementos(ul,li)
        })
    })
    .catch(error => console.log(error));

}

// Url de la API
const url = 'https://randomuser.me/api/?results=10';

recuperarAutor();