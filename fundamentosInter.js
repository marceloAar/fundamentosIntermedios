// 1. Sigma - 
//Implementa una función sigma(num) que, 
//dado un número, devuelve la suma de todos los enteros positivos 
//(incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).

function sigma(numero, arr){
    cont =0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            cont = cont + arr[i];
            //console.log(arr);
        }
    }
  return console.log('Sigma = '+cont + ' ('+arr+')');
}
var resultado = sigma(5, [1,2,3,4,5]);


//2. Factorial - 
//Escribe una función factorial(num) que, 
//dado un número, devuelva el producto (multiplicación) 
//de todos los enteros positivos (incluyendo el número dado). 
//Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).

function factorial(numero){
  
    var multi = 1;
    
    for(var i=1; i<=numero; i++){
      
      multi = multi * i;
      //console.log(multi);
      
    }
    return console.log('Factorial de '+numero+ ' es '+multi);
  }
  
  factorial(5);


//3. Fibonacci - 
//Crea una función para generar números de Fibonacci. 
//En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, 
//partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, 
//un índice en la secuencia (donde 0 corresponde al valor inicial, 
//4 corresponden al valor cuatro más tarde, etc). 
//Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), 
//fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), 
//fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), 
//fibonacci(7) = 13 (5+8). Haz esto primero sin usar recursión. 
//Si no sabes qué es una recursión, 
//no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. 


function fibonacci(numero){
    
    console.log('-Sucesion Fibonacci de: '+numero); 
      
    var uno=0, dos=1, tres, x=1;
    
    console.log(uno,dos);
      
    for (i=3; i<=numero; i++){
          
      tres = uno + dos;
      console.log(tres);
      x = x + tres;
      uno = dos;
      dos = tres;
    }  
  }
  fibonacci(10);


//4. Array: 
//Penúltimo: Devuelve el penúltimo elemento del array. 
//Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.  

var arreglo =   [42,true,4,'Liam', 7];

function penultimo(arr){
  if (arr.length <3){
    return null;
  }else{
    return console.log(arr[arr.length - 2]);  
  }
}  

penultimo(arreglo);  


//5. Array: “N” último: 
//Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. 
//Si el array es muy pequeño, devuelve null. 


function nUltimo(arr, numero){
    var resultado = 0;
    console.log('Arreglo de entrada: '+arr);  
  
  for (var i=0; i<arr.length; i++){
    
      if(arr[i] == numero){      
        i++;
        resultado=arr[i];
        return console.log('Numero siguiente de '+numero+' en el arreglo es: '+resultado);
        
        
      }if (arr.length <3){
        return null;
      }           
  }
   
  }
  
  nUltimo([5,2,3,6,4,9,7], 3);



//6. Array: Segundo más grande: 
//Devuelve el segundo elemento más grande de un array. 
//Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.

///////////////
var arreglo = [42,1,4,3.14,7];

var nuevo = [];
var max1 = Math.max(...arreglo); 

for (var i=0; i<arreglo.length; i++){
 
  if(arreglo[i]>arreglo[i]){
    nuevo.push(arreglo[i]);
    //delete arreglo[i];
    console.log(arreglo);   
  
  if(arreglo[i]<max1){
    nuevo.push(arreglo[i]);
  }
  }
}

console.log(nuevo);
//////////////


//7. Doble Problema Par: 
//Crea una función que cambie un array dado duplicando cada uno de sus elementos 
//en una posición par, y manteniendo el orden original. 
//Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

var arreglo = [4, "Ulysses", 42, false];

function repetir(arr){
var arregloRepetido = [];
  console.log("Arreglo de entrada: " ,arr);
  for (var i = 0; i < arr.length; i++){
    if (arr[i] == arr[i]){
      arregloRepetido.push(arr[i]);
      arregloRepetido.push(arr[i]);
    }
  }  
  return arregloRepetido;
} 

console.log('Arreglo repetido: ',repetir(arreglo));


///////
//////