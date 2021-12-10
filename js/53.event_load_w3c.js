
window.addEventListener("load", ()=>{
    alert("sitio cargado al 100%");
});

document.getElementById("id-btn1").addEventListener("click", printInfoBoton);
document.getElementById("id-btn2").addEventListener("click", printInfoBoton);

//La funcion recibe como parametro el evento
function printInfoBoton (e) {

    //target es la referencia del objeto que generó el evento 
    let boton = e.target;
    document.getElementById("subtitulo").innerText = `Name: ${boton.name}, Id= ${boton.id}, Value = ${boton.value}`;

    e.target.style.background = "#ff0000";
}
