const leia = require('readline-sync')

//Variaveis

let A= 2
let B= 4
let C= 5

// Processamento dos dados

let soma = A + B;

//calculo

if (soma > C) {
    console.log("A soma de A + B é maior que C");
} else if (soma < C) {
    console.log("A soma de A + B é menor que C");
} else {
    console.log("A soma de A + B é igual a C");
}