const readline = require('readline-sync');

let numero;
let somaPositivos = 0;

do {
    numero = parseInt(readline.question("Digite um numero: "), 10); // tiramos o 'é'

    if (numero > 0) {
        somaPositivos += numero;
    }
} while (numero !== 0);

console.log("A soma dos numeros positivos é: " + somaPositivos); // tiramos o 'é'

