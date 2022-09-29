
let contador = 1;

function agregarElementosLista() {
  
    if (contador <= 5) {

        let lista = document.getElementById('listaNoOrdenada');

        let elemento = document.createElement("li");

        let texto = document.createTextNode(`${contador}: elemento`);

        elemento.appendChild(texto);
    
        lista.appendChild(elemento);

        console.log(`Item: ${contador}`);
    
        contador += 1;

    }else{

        let parrafo = document.getElementById("parrafo");

        // Si el ELEMENT_NODE no tiene hijos
        if (!parrafo.hasChildNodes()) {

            let texto = document.createTextNode("Ya no puedes añadir mas elementos a la lista");

            parrafo.appendChild(texto);
    
            parrafo.style.color = "red";
        }else{

            console.log("Solo se pueden agregar 5 elementos a la lista");
        }
    }
}