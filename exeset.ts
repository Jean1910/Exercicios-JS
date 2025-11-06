import readlinesync = require("readline-sync");

// Criação do Set com 10 números inteiros
let numeros: Set<number> = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

// Exibindo os valores do Set
console.log("Lista de numeros:");
for (let numero of numeros) {
  console.log(numero);
}

// Entrada do número 
let num = readlinesync.questionInt("\nDigite o numero que voce deseja encontrar: ");

// número está no Set
if (numeros.has(num)) {
  console.log("\nO numero " + num + " foi encontrado!");
} else {
  console.log("\nO numero " + num + " não foi encontrado!");
}

