'use strict'

var categorias = ['Accion','Terror','Comedia'];
var peliculas = ['La verdad', 'La vida es bella','Gran torino'];

var cine = [categorias, peliculas];
// console.log(cine[0][1]);
// console.log(cine[1][2]);

var elemento = prompt("Introduce tu pelicula");
do{
    elemento = prompt("Introduce tu peliculq");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

console.log(peliculas);