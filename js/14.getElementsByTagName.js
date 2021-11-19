console.log("Llegue al js");

let obtenerParrafos = function () {  
    let array = document.getElementsByTagName('p');

    for (let i = 0; i < array.length; i++) {
        
        //array[i].childNodes[0].nodeValue = array[i].childNodes[0].nodeValue + " ";
        
        console.log(array[i].childNodes[0].nodeValue);

        array[i].style.fontSize = "25px";
        array[i].style.backgroundColor = "silver";

        
        
    }
}