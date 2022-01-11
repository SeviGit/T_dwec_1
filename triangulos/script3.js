"use strict"
/*
Función principal donde se piden los datos al usuaario, se crea el bucle y se llaman a las demas
funciones.
*/
function Triangle() {
    var lado1= 1;
    var lado2;
    var lado3;

    while (lado1 != 0){
        //Pasamos con parseInt() a entero para poder operar con los datos introducidos por el usuario
        lado1 = parseInt(prompt("Introduce la longitud del lado 1:", "lado 1"));
        if (lado1 === 0) //para salir del bucle
            break;
        lado2 = parseInt(prompt("Introduce la longitud del lado 2:", "lado 2"));
        lado3 = parseInt(prompt("Introduce la longitud del lado 3:", "lado 3"));

        if (isTriangle(lado1, lado2, lado3))
            WhatTriangle(lado1, lado2, lado3);
        else
        document.write("lado1 = " + lado1 + " >> lado2 = " + lado2 + " >> lado3 = " + lado3 + " >>>>> Con estas medidas no es un triangulo.</br>");
    }
} 


/*
Función isTriangle(): determina si es o no un triangulo según las medidas pasadas por parámetro
*/
function isTriangle(lado1, lado2, lado3) {

    var mayor = Math.max(lado1, lado2, lado3);

    if (mayor === lado1) {
        if (lado1 < lado2 + lado3)
            return true;
        else
            return false;

    } else if (mayor === lado2) {
        if (lado2 < lado1 + lado3)
            return true;
        else
            return false;

    } else if (mayor === lado3)
        if (lado3 < lado2 + lado1)
            return true;
        else
            return false;

}

/*
Función WhatTriangle(): calcula que tipo de triangulo es según sus lados y 
lo escribe en un documento para poder verlo por pantalla(documnent.write).
*/

function WhatTriangle(lado1, lado2, lado3) {

    if (lado1 == lado2 && lado2 == lado3) {
        document.write("lado1 = " + lado1 + " >> lado2 = " + lado2 + " >> lado3 = " + lado3 + " >>>>> El triangulo es equilatero.</br>");

    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        document.write("lado1 = " + lado1 + " >> lado2 = " + lado2 + " >> lado3 = " + lado3 + " >>>>> El triangulo es isósceles.</br>");

    } else {
        document.write("lado1 = " + lado1 + " >> lado2 = " + lado2 + " >> lado3 = " + lado3 + " >>>>> El triangulo es escaleno.</br>");

    }

}