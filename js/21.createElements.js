
let contador = 1;

function agregarElementosLista() {

    //console.log("agregando elementos a la lista");
    
    if (contador < 4) {
        let textNode = document.createTextNode(`${contador}: elemento`);

        let elementNode = document.createElement("li");
    
        elementNode.appendChild(textNode);
    
        let list = document.getElementById('listaNoOrdenada');
    
        list.appendChild(elementNode);
    
        contador += 1;

    }else{
        
            let text = document.createTextNode("Ya no puedes añadir mas elementos a la lista");
        
            let parrafo = document.getElementById("parrafo");
    
            parrafo.appendChild(text);
    
            parrafo.style.color = "red";
    
            console.log("Solo se pueden agregar 3 elementos a la lista");

    }

}