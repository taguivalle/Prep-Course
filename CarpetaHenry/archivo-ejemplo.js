// una expresión siempre se convierte (retorna) un valro
// un statement realiza una acción
/* Cuando escribimos código, todo el tiempo mezclamos expresiones y statements para conseguir el resultado final.
Por lo tanto, al principio es un poco díficil ver la diferencia entre los dos, pero vamos a intentar ejemplificar
lo anterior: */
// retorna algo
1 + 1;
Math.pow(2, 3) + 4;
"Hola" + " Soy una expresión";
/* 1+1 intuitivamente se convierte o se resuelve a 2 !eso es una expresión. Es cualquier cosa que escribamos 
y esperamos que se convierta en otro valor.
Cuando pegamos una expresión en la consola de Firefox o de chrome, vamos a poder ver el resultado al que resuelve: */
// hace algo
if (condition) {
  // código ejecutado si es true
} else {
  // código ejecutado si es false
}
/* En este ejemplo, vemos que el if "hace algo", es decir, esccribimos el if para que bifurque la ejecución del código
según el valor condición. Como ya sabemos sí condición tiene valor verdadero entonces se ejecutará el bloque del código
de arriba y sino el de abajo 
Fijénse que acá es importante discriminar lo que está adentro de los bloques de código, a que ahí adentro podriamos 
escribir expresiones que sí devuelvan algo.
Nos podemos dar cuenta que algo es un statement, porque sí lo pegamos en la consola del intérprete _por ejemplo: en la 
consola de Firefox o Chrome- vamos a ver que no produce ningún resultado.
Una regla fácil para distinguir enter una expresión y un statement en JS es la siguiente:
sí podemos ponerlo dentro de un console.log, es una expression, sino, es un statement.
Por ejemplo: */
// expresiones!
console.log(1 + 1);
console.log(Math.pow(2, 3) + 22);
//statements
/*console.log(if (true) {
    
}); */
// jamás haríamos esto de arriba, no?
