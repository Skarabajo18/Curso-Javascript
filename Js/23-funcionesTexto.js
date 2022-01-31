'use strict'


// Transformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso de Javascript de Felipe Segovia";
var texto2 = "Es un buen curso";

var dato = numero.toString();
var dato = texto1.toUpperCase(); // toUpperCase sirve para transformar en mayuscula
var dato = texto2.toLowerCase(); // toLowerCase sirve para transformar a minuscula

console.log(dato);

// Calcular longitud
var nombre = "Felipe Ignacio Segovia Herrera"; //30 palabras
    nombre = ["Hola", "Holaa"];

console.log(nombre.length);// length se utiliza para calcular la longitud

//  Concatenar es igual a unir textos

var textoTotal = texto1+" "+texto2;
var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);


