# DhtmlCourse21
 - Repositorio para ejercicios de DHTML básico 2021.

 - Este repositorio consta de ejercicios practicos para aprender sobre el uso de DHTML, aunque actualmente existen otras formas mas modernas y avanzadas de interactuar con el DOM (Document Object Model), como la libreria jQuery o frameworks como ReactJs, Vue, Angular o utilizando las nuevas versiones de Js como ES6.

## Introducción:
DHTML o HTML Dinámico requiere el uso de las tecnologias HTML, CSS Y Javascript para otorgar dinamismo a los sitios web.

## Descripción de los ejercicios:

El siguiente apartado hace una descripción de cada uno de los ejercicios realizados. La descripción de cada uno es:

- 01.DocumentObjectModel.html es una introduccion al manejo de todos los objetos que componen un sitio web. En el DOM todos los elementos HTML son organizados como un arbol de nodos.

- 02.getElementById.html, utilizando el metodo **getElementById()** el cual llama a un elemento para cambiar el color y tamaño de de fuente del titulo

- 03.getElementById_2.html, encargado de buscar un elemento con id parrafo para aplicarle distintos tamaños de fuentes

- 04.childNodes_children.html, se utilizan las propiedades **childNode** para conocer el numero de hijos que posee el elemento padres (nodos de texto y elementos), mientras que **children** devuelve unicamente le numero de elemento hijos

- 05.childNodes_children_2.html, otro ejercicio para contar los **ELEMENT_NODE** y los **TEXT_NODES**

- 06.childNodes_nodeValues.html y 07.childNodes_nodeValues.html se usa la propiedad **nodeValue** para modificar la un TEXT_NODE de un elemento del DOM.

- 08.parentNode.html 08.parentNode_2.html, ejemplo del uso de la propiedad **parentNode** para obtener el nodo padre de un elemento del DOM. Al obtener el nodo padre es posible afectar a cada uno de los nodos hijos.

- 10.siblingNode.html 11.siblingNode_2.html, ejemplo utilizando la propiedad **siblingNode** y **siblingElementNode** creados para obtener los nodos hermanos de un elemento del DOM

- 12.first_last_child.html 13.first_last_child.html, accediendo al primer y ultimo nodo hijo de un elemento del DOM, utilizando las propiedades **firstChild y lastChild**

- 14.getElementsByTagName.html 15.getElementsByTagName_2.html, invocando un conjunto de elementos del DOM por nombre de la etiqueta HTML. el metodo **getElementsByTagName()** retorna un array con los datos.

- 16.appenChild.html 17.appenChild_".html, creando nodos de texto con la propiedad createTextNode y agregandolos a un elemento del DOM con el metodo **appenChild()**

- 18.removeChild.html 19.removeChild_2.html, creando nodos de texto para agregarlos a nodos elementos, verificando si el nodo padre tiene nodos hijos con el metodos **hasChildNodes()** para eliminarlos con la propiedad removeChild.

- 20.creandoElementos.html y 21.creandoElementos.html, muestran el funcionamiendo del metodo **createElement()**, para crear etiquetas HTML, listo para crear nodos texto para agregarlos a estos nodos tipo elemento.

- 22.insertBefore.html 23.insertBefore_2.html, muestran la forma de utilizar el metodo **insertBefore()** para insertar nodos antes del nodo utilizado como referencia