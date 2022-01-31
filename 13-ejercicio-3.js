'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros 
introducidos por el usuario

*/

var nuermo1 = parseInt(prompt("Introduce el primer numero",0));
var nuermo2 = parseInt(prompt("Introduce el segundo numero",0));

document.write("<h1>De"+nuermo1+" a "+nuermo2+ "están estos numeros : <h1>")
for(var i=nuermo1; i<=nuermo2; i++){
document.write(i+"<br/>")

}