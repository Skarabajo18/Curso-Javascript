'use strict'

/*
Mostar todos los numeros impares que hay entre dos numeros 
introducidos por el usuario

*/ 

var numero1 = parseInt(prompt("Introduce el primer numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while(numero1 < numero2 ){
numero1++;//
    if(numero1%2 != 0){ //si el primer numero dividido entre 2 es diferente a 0 es impar
        console.log("El "+numero1+" Es impar");
    }
}