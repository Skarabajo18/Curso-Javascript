'use strict'

// Condicional IF
 
// Si A es igual a B entonces haz algo
var edad1 = 30;
var edad2 = 12;

// si pasa esto 
if(edad1 > edad2){
// Ejecuta esto
    console.log("Edad uno es mayor que edad 2")
}else{
    console.log("La edad uno es inferior")

}


var edad = 30;
var nombre = "Felipe Segovia";
/* 
">" mayor 
"<" menor
">=" mayor igual
"<=" menor igual
"==" igual
"!=" diferente o distinto

*/

if(edad >= 18){
    console.log(nombre+" Tiene "+edad+" años, es mayor de edad");
    if(edad <= 33){
        console.log("Todavia eres millenial");
    }else if(edad >= 70){ 
        console.log("Eres anciano");

    }else{
        console.log("Ya no eres millenial");
    }


    }else{

    
    console.log(nombre+" tiene "+edad+" años, es menor de edad");
}

/* 
Operadores lógicos
AND(Y): &&
OR(O): ||
Negación: !

*/  

var year = 2018;
// Negacion
if(year != 2016){
    console.log("El año no es 2016 es "+ year);
}
// AND
if(year >=2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}
// OR
if(year == 2008 || year == 2018){
    console.log("El año acaba en 8");
}else{
    console.log("AÑO NO REGISTRADO");
}
