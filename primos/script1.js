/* Creamos una funcion por cada bucle que al pasarle un numero nos devuelve
un boolean indicando si es primo o no*/ 

/* El numero 1 no lo hemos considerado como primo a la hora de hacer las funciones*/
/* Definición: Un número primo es un número entero con exactamente dos divisores integrales, 1 y el número mismo. El número 1 no es un primo, ya que solo tiene un divisor.*/


//Bucle for
function PrimoFor(number){

    for(let i=2;i<number;i++){

        if(number % i === 0)
            return false;
        else
            return true;    
    }
}

//Bucle While
function PrimoWhile(number){
    
    let i=2;
    while(i<number){

        if(number % i === 0)
            return false;
        else
            return true;    

        i++;
    }
}

//Bucle do while
function PrimoDoWhile(number){
    let i = 2;
    do{
        if(number % i === 0)
            return false;
        else
            return true;    
    }while(i<101)
}

/*He optado por crear una función por cada bucle para recorrer hasta el numero 100 e imprimir los numeros primos por consola,
la funcion es llamada desde HTML mediante un link*/

//Bucle for
function BucleFor(){
    
    console.log("Numero Primos con bucle for:");

    for(let i=2;i<101;i++){
        
        if(PrimoFor(i)){
            
            console.log("El numero "+ i + " es primo (FOR)");
        }
    }
}

//Bucle while
function BucleWhile(){
    let i=2;

    console.log("Numero Primos con bucle while:");
    while(i<101){
        if(PrimoWhile(i))
            console.log("El numero "+ i + " es primo (WHILE)");

            i++;

    }
}

//Bucle do while
function BucleDoWhile(){
    let i=2; 

    console.log("Numero Primos con bucle do while:");
    do{
        if(PrimoDoWhile(i))
        console.log("El numero "+ i + " es primo (DO WHILE)");
        
        i++;

    }while(i<101)
}







