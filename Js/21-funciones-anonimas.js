'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre


/*
var pelicula = function(nombre){
    return "La pelicua es: " + nombre;
}
*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return  sumar;
}

sumame(5, 7,function(dato){
    console.log("La suma es:", dato);
},
function(dato){
    console.log("La suma por dos es: ",(dato*2));
});



