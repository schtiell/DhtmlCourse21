

let informacionEvento = document.getElementById("id-evento");

informacionEvento.addEventListener("click", e => {

    let container = document.getElementById("container")

    console.log(e);

    container.innerHTML = `

        <p>Tecla alt presionada (e.altkey) ? ${e.altKey}</p>
        <p>Tecla ctrl presionada (e.ctrlkey) ? ${e.ctrlKey}</p>
        <p>Tecla shift presionada (e.shiftkey) ? ${e.shiftKey}</p>
        <p>Tecla meta presionada (e.metakey) ? ${e.metaKey}</p>
        <p>El nombre del evento (e.type) ? ${e.type}</p>
        <p>El nombre del evento que causo el evento (e.target) ? ${e.target.name}</p>
        <p>La coordenada x del mouse respecto a la ventana (e.clientX) ? ${e.clientX}</p>
        <p>La coordenada y del mouse respecto a la ventana (e.clientY) ? ${e.clientY}</p>
        <p>La coordenada x del mouse respecto a la pantalla completa (e.screenX) ? ${e.screenX}</p>
        <p>La coordenada y del mouse respecto a la pantalla completa (e.screenY) ? ${e.screenY}</p>
        <p>La coordenada x del mouse respecto al comienzo de la página (e.pageX) ? ${e.pageX}</p>
        <p>La coordenada y del mouse respecto al comienzo de la página (e.pageY) ? ${e.pageY}</p>
        <p>Número de botón del mouse presionado (e.button) ? ${e.button}</p>`;

        container.style.top = e.clientX +"px";
        container.style.left = e.clientY + "px";
});