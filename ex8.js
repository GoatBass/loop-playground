/**
 * Bucles while
 *
 * Modifica el bucle while para que escriba por el terminal 
 * escriba 5 veces exactamente "Ejecuto!". Actualmente lo escribe 6 veces. Porque?
 * 
 * Reestricción: NO puedes cambiar el valor de las variables 'veces' ni 'i' !!
 */

let veces = 5
let i = 0

//Para que lo escriba 5 veces exactas, tenemos que eliminar el = de la condición

while (i<veces) {
    console.log("Ejecuto!")
    i++
}