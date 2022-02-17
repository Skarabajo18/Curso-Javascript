'use strict'


// Transformacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso curso de Javascript de Felipe Segovia";
var texto2 = "Es un buen curso";

var busqueda = texto1.trim();
console.log(busqueda);

/*
Busquedas:

indexOf: se utiliza para buscar la posición en caracteres numericos

lastIndexOf: es igual indexOf solo que de devuelve el ultimo caracter.

search: se utiliza para hacer busquedas dentro de textos, si no encuentra 
la palabra devuelve -1-

match: devolverá un coleccion (array) de los resultados que encuentre
para hacer busquedas globales en match hay que poner entre "/" "/g" para un 
busqueda global.

substr(from: number,length number ): sirve para sacar las palabras de un caracter "x" 
hasta el otro numero indicado 

charAt : es para sacar letras segun el numero indicado

startsWith: este metodo sirve para buscar texto desde el COMIENZO que  devuelve un true como cierto
y un false como falso

endsWith: es como el start pero este comienza del final.

includes: sirve para buscar palabras (tiene que ser exacta) y devuelve un  true o false.


Remplazar:

replace("texto indicado", "texto a cambiar"): sirve para remplazar el texto

slice(): sirve para recortar desde un numero indicado a otro 

spit(): sirve para meter todo a un array. tambien se puede separar por palabras ej: split(" ");

trim(): sirve para recortar el texto.

*/
