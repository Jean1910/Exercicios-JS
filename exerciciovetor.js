const leia = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("Vetor:");
console.log(vetor);

let numero = parseInt(leia.question("Digite o numero que voce deseja encontrar: "));

let posicao = vetor.indexOf(numero);

if (posicao !== -1) {
  console.log(`O numero ${numero} esta localizado na posicao: ${posicao}`);
} else {
  console.log(`O numero ${numero} nao foi encontrado!`);
}
