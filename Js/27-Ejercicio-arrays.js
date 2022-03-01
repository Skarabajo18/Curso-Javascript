'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar e array entero (todos sus elementos) en el cuerpo de la pagina y en la cosola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5.Mostrar cuantos elemetos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(se valorará el uso de funciones)
*/


function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array"+textoCustom+"</h1>");
    document.write("<ul");
    elementos.forEach((elemento, index)=> {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}

//pedir 6 numeros
var numeros = [];


for(var i = 0; i <= 5; i++){
    // numeros[i] = parseInt(prompt("Introduce un numero",0));
  numeros.push(parseInt(prompt("Introduce un numero", 0)));  
}

// Mostrar en el cuerpo de la página
mostrarArray(numeros);
//Mostrar array en la consola
console.log(numeros);

//  Ordenar y mostrar de manera alfabetica

numeros.sort();
mostrarArray(numeros, ' ordenado alfabetico'); 


// ordenar y mostrar de manera numerica-ascendente
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, ' ascendente'); 

// ordenar y mostrar de manera numerica-descendente
numeros.sort(function(a, b){return b-a});
mostrarArray(numeros, ' descendente'); 

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros,' revertido');

// Contar elementos
document.write("<h1>El array tiene: "+numeros.length+" elementos");

//busqueda
var busqueda = parseInt(prompt("Busca un nuemero", 0));
document.write("<h1>Posición de la busqueda: "+posicion); 
