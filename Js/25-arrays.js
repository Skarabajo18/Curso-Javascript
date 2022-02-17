'use strict'

// array, arreglos, matrices

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52,true];

var lenguajes = new Array("PHP","JS","Go","Java");
/*
var elemento = parseInt(prompt("Que elemento del array quieres?",0)); // este metodo sirve para solicitar algun dato del arrays 
if(elemento>= nombres.length){
    alert("Introduce el numero correcto menor que "+ nombres.length);// si el numero es distinto a la cantidad de array mandará este mensaje (length la longitud del array)
}else{
    alert("El usuario seleccionado es:"+nombres[elemento]);
}
*/
document.write("<h1>Lenguaje de programacion del 2022</h1>");
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[    i]+"<li>");
}
*/
lenguajes.forEach((elemento, indice, arr)=>{
    console.log(arr);
    document .write("<li>"+indice+" - "+elemento+"</li>");
});

document.write("</ul>");

