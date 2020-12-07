/**
 * El bucle infinito
 *
 * El siguiente bucle 'while', no acaba nunca. ¿Por qué?
 * 
 * Arreglalo para que la palabra "Ejecutar!" se muestre 10 veces por el terminal
 */

 //Se nos quedava como bucle infinito porque nunca incrementabamos nuestro contador, y por tanto nuestra condición nuca se acabaría cumpliendo
 //y crearíamos un bucle infinito. Simplemente hay que añadir i++ al final de nuestro while

let n=10;
let i=0;

while(i<n) {
    console.log("Ejecutar!")
    i++
}

