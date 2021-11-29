
let getAttributes = function () {

    //console.log("hasAttributes");

    let tabla = document.getElementById("tabla");

    if(tabla.hasAttribute.length > 0){
        console.log(`El elemento tabla tiene ${tabla.hasAttribute.length} atributos`);
        console.log(`El atributo es un borde con valor :${tabla.getAttribute("border")}`);

        //Si tienen un atributo de borde entonces lo eliminar
        if (tabla.hasAttribute("border")){
            tabla.removeAttribute("border");
        }else{
            //Si no tiene el borde entonces le asigna uno con un ancho de 5px
            tabla.setAttribute("border", "5px");
        }
    }

    //tabla.getAttributeNames()

}