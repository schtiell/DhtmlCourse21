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

- 24.removerElement.html 25.removerElement.html, utilizan el motodo removeChild para eliminar un ELEMENT_NODE del DOM

- 26.agregarAtributos.html 27.agregarAtributos.html, muestra el uso del metodo **setAttribute()** para agregar atributos a los ELEMENT_NODES del DOM.

- 28.removeAtributo.html 29.agregarAtributos.html, utiliza el metodo **removeAttribute()** para remover atributos a los ELEMENT_NODES del DOM.

- 30.hasAttribute_getAttribute.html, muestra un ejemplo de el uso de los metodos **hasAttribute()** y **getAttribute()** que permiten comprobar si un ELEMENT_NODE tiene atributos y getAttribute que permite buscar si un nodo tiene un atributo especifico.

- 31.move_clone_node.html, utiliza el metodo **nodeClone(BOOLEAN VALUE)** que permite clonar un ELEMENT_NODE incluyendo sus nodos hijos si se le pasa como argumento un **true**. Y el moviemiento de un nodo de una posición a otra.

- 33.innerHTML.html 34.innerHTML_2.html, **innerHTML** propiedad utilizada para crear elementos HTML TEXT_NODES y ELEMENT_NODES en el DOM, permitiendo reducir considerablemente el proceso de creacion de los mismos.

- 35.innerText.html 36.innerText_2.html, usando la propiedad **innerText** para cambiar el TEXT_NODE de un ELEMENT_NODE del DOM

- 37.manejo_css.html, muestra un ejemplo de como se modifican los valores css de los elementos HTML utilizando js, mediante la propiedad **style**

- 38.controles_input_dinamicos.html 39.controles_input_dinamicos_2.html, se muestra como se generan controles input utilizando el metodo innerHTML para generar etiquetas HTML y con el metodo anterior en el cual se generan los ELEMENT_NODES, TEXT_NODES, sus propiedades se indica donde se va a insertar, haciendo mas tedioso y largo el proceso para crear un solo ELEMENT_NODE. Por lo cual el metodo innerHTML es mucho mejor.

- 40.evento_onclick.html explicacion del evento **onclick()**

- 41.objeto_this.html 42.objeto_this_2.html, mostrando como el objeto **this** es enviado como argumento a la funcion js, con la finalidad de saber cual es el objeto que dispara cualquier evento.

- 43.informacion_eventos.html 44.informacion_eventos_2.html muestran como a traves del objeto **event** es posible obtener informacion, en estos ejemplos se utilizan la propiedad **clientX y clientY** para conocer las coordenadas donde se hace clic. El evento se dispara al hacer clic sobre el parrafo

- 45.onmousedown_onmouseup.html 45.onmousedown_onmouseup_2.html, muestran el funcionamiento del los eventos **onmousedown()**, **onmouseup()**, adicional el primer ejemplo muestra otros eventos relacionados al uso del mouse que son **mouseenter()** y **mouseleave()**

- 46.dblclick_event.html 47.dblclick_event_2.html, se utiliza el evento de hacer doble click llamado **ondblclick** para ejecutar un comportamiento sobre un ELEMENT_NODE del DOM

- 48.onmouseover_onmouseout.html, se muestra el uso de los eventos **onmouseover** y **onmouseout** los cuales son ejecutados en forma conjunta al posicionarse y salir de algun ELEMENT_NODE.

- 49.onmousemove.html, se utiliza el metodo **onmousemove** para disparar un evento que ejecuta una funcion en javascript.

- 50.onload_onunload.html se usan los eventos **onload y onunload** para ejecutar funciones de js una vez que el sitio a cargado todo el arbol de elementos del DOM y una vez que se cierra el navegador o se cambia de pagina el metodo unload ejecuta funciones indicadas

- 51.eventos_DOM_especificacion_W3S.html De acuerdo a las especificaciones de la W3C, los eventos del navegador deben ser ejecutados por javascript y no por html como se hacia antiguamente, los eventos siguen siendo llamados igual solo se les quita el prefijo on. Lo que permite separar la estructura del sitio (html), el diseño (css) y la funcionalidad (js)

- 52.event_click_w3s.html Manejo del evento **click** mediante el metodo **addEventListener()**, deacuaerdo con las especificaciones de la W3C.

- 53.event_load.html utiliza el capturador de eventos addEventListener para disparar el evento **load** y mandar un aler con la bienvenida. Adicional tambien imprime en el DOM 2 botones de los cuales se obtienen sus propiedades al ejecutar el evento click

- 54.event_mousedown_mouseup.html, Los eventos **mousedown y mouseup** eventos accionados al presinar un boton del mouse y al soltarlo. En el ejemplo se aplica sobre el titulo de una tabla y en la primera fila, ademas soble los elementos de una lista que son obtenidos mediante el metodo getElementsByTagName y almacenados en un array

- 55.event_dblclick.html, utiliza el evento **dblclick** para mostrar y ocultar una imagen cargada por css al DOM del sitio

- 56.event_mouseover_mouseout.html usa los eventos **mouseover y mouseout** para ejecutar funciones especiales cuando el puntero del mouse entra o sale respectivamente del elemento que dispara el evento

- 57.mousemove.html, muestra el ejemplo de ejecucion del evento **mousemove** que imprime en el DOM las coordenadas cuando el puntero del mouse se mueve sobre una imagen

- 58.event_focus.html utiliza el evento **focus** para mandar un mensaje en consola que se ha enfocado un elemento.