'use strict'

/*
uTILIZANDO UN BUCLE, MOSTRAR LA SUMA Y LA MEDIA DE LOS NUMEROS 
INTRODUCIDOS HASTA INTRODUCIR UN NUMERO NEGATIVO Y AHI MOSTRAR 
EL RESULTADO
*/

var suma = 0; //SUMA INICIALIZADO EN 0
var contador =0; //CONTADOR INICIALIZADO EN 0

do{
var numero = parseInt(prompt('Introduce numeros hata que metas uno negativo', 0)); // variable numero es igual a "parseInt"
if(isNaN(numero)){  // si numero no es igual a cero no lo toma
    numero = 0;
}else if(numero >=0){
    suma = suma + numero;
    suma += numero;
    // suma +=numero;
    contador++;
}
console.log(suma);
console.log(contador);
}while(numero >=0)

alert("La suma de todos los numeros es:"+ suma);
alert("La media de todos los numeros es:"+(suma/contador));
