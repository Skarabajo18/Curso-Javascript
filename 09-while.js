'use strict'

// Buble while

var year = 2018;

while(year != 1991){
    // Ejecuta esto
    console.log("Estamos en el año: ",+ year);

    if(year == 2000){
         break;
    }


    year--; //va a estar aumentado de 1 en 1 
}

/*
//  para restar o retroceder 
while(year != 1991){
    console.log("Estamos en el año",+ year);
    year--;

}

*/

// Do while

var years = 30;

do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years--;
}while(years > 25)