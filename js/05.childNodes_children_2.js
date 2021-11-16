console.log('Trabajando con propiedades childNodes & children del DOM');

function calcularHijos (){

    let hijos = document.getElementById('container-1');
    let elementos = document.getElementById('container-1');

    let countHijos = 0;
    let countElementos = 0;

    for (let i = 0; i < hijos.childNodes.length; i++) {
        if (hijos.childNodes[i].nodeType === Node.TEXT_NODE){
            countHijos += 1;
        }else if (hijos.childNodes[i].nodeType === Node.ELEMENT_NODE) {
            countElementos += 1;
        }
    }

    let total = countHijos + countElementos;
    console.log(`El numero de hijos del #container-1 es: ${countHijos}\n El numero de elementos es ${countElementos}`);
    console.log(`El total de  hijos del div-1 es: ${total}`);

    for (let i = 0; i < elementos.children.length; i++) {
        console.log(elementos.children[i].tagName + '\n');
        
    }


}

function calcularElementos(){

    let hijos = document.getElementById('container-2');
    let elementos = document.getElementById('container-2');
    console.log(`El contenedor #container-2 tiene ${hijos.childNodes.length} hijos  y ${elementos.children.length} elementos html`);
}