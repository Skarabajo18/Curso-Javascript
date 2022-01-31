'use strict'
//prueba let y var

//prueba con var

var numero = 40;
console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50

}
console.log(numero); //valor 50

//prueba con let
var texto = "Curso JS FelipeSegoviaweb.cl"
console.log(texto); // valor js

if(true){
    let texto = "Curso Laravel 5 felipe.cl";
    console.log(texto); // valor laravel 5
}

console.log(texto); // valor js

/* la variable let es limitante actua a nivel de bloque mientras que la variable var 
actua como variable global

en el primer caso la varibable numero cambia de 40 a 50 segun el if
pero en let la variable sigue manteniendo el mismo valor del antes del if
*/


