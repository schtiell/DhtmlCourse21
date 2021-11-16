console.log('Trabajando con propiedades childNodes & children del DOM');

function calcularHijos (){

    let hijos1 = document.getElementById('container-1');
    let hijos2 = document.getElementById('container-2');

    let countHijos_1 = 0;
    let countElementos_1 = 0;

    for (let i = 0; i < hijos1.childNodes.length; i++) {
        if (hijos1.childNodes[i].nodeType === Node.TEXT_NODE){
            countHijos_1 += 1;
        }else if (hijos1.childNodes[i].nodeType === Node.ELEMENT_NODE) {
            countElementos_1 += 1;
        }
    }

    let countHijos_2 = 0;
    let countElementos_2 = 0;

    for (let i = 0; i < hijos2.childNodes.length; i++) {
        if (hijos2.childNodes[i].nodeType === Node.TEXT_NODE){
            countHijos_2 += 1;
        }else if (hijos2.childNodes[i].nodeType === Node.ELEMENT_NODE) {
            countElementos_2 += 1;
        }
    }

    console.log(`El total de hijos del container-1 es: ${hijos1.childNodes.length}`);
    console.log(`El total de hijos del container-2 es: ${hijos2.childNodes.length}`);

}

function calcularElementos(){

    let elementos1 = document.getElementById('container-1');
    let elementos2 = document.getElementById('container-2');

    for (let i = 0; i < elementos1.children.length; i++) {
        console.log(elementos1.children[i].tagName + '\n'); 
    }

    for (let i = 0; i < elementos2.children.length; i++) {
        console.log(elementos2.children[i].tagName + '\n'); 
    }

    console.log(`El total de elementos del container-1 es: ${elementos1.children.length}`);
    console.log(`El total de elementos del container-2 es: ${elementos2.children.length}`);
}