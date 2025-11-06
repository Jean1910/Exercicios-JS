const leia = require('readline-sync')

let numero = 12

if (numero % 2 ==0) {
    // par
    if (numero >= 0) {
        console.log(" O número " + numero + " é par e positivo!");
    } else {
        console.log("O número " + numero + " é par negativo!");
    }
} else 
    
{
    //impar
    if (numero >= 0) {
        console.log("O número " + numero + " é impar e positivo!");
    } else {
        console.log("O número " + numero + " é impar e nagativo!");
    }
}