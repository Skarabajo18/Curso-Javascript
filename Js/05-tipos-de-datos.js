'use strict'

// Operadores

var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;

alert("El resultado de la operación es: "+ operacion);

//  Tipos de datos

var numero_entero = 44;
var cadena_texto = "Hola Mundo";
var verdadero_o_falso = true;   // el true es 1 y el false es 0

var numero_falso = "33.333";


Number();

// console.log(Number(numero_falso)+7);

 console.log(parseInt(numero_falso)+7); // en este codigo si muestra los decimales

// console.log(parseFloat(numero_falso)+7); // en este codigo muestra los decimales

//  console.log(numero_entero+' texto concatenado'); 


// console.log(String(numero_entero)+4);

//  el comando typeof es para saber cual es el tipo de dato de cualquier variable mencionada

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);


