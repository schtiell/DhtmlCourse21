
let getAttributes = function () {

    //console.log("hasAttributes");

    let tabla = document.getElementById("tabla");

    if(tabla.hasAttribute.length > 0){
        console.log(`El elemento tabla tiene ${tabla.hasAttribute.length} atributos`);
        console.log(`El atributo es un borde con valor :${tabla.getAttribute("border")}`);
    }

    //tabla.getAttributeNames()

}