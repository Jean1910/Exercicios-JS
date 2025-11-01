// intervalo.js
const leia = require('readline-sync');

function lerInteiro(texto) {
  while (true) {
    let entrada = leia.question(texto);
    let n = parseInt(entrada, 10);
    if (!isNaN(n)) return n;
    console.log("Entrada invalida. Digite um numero inteiro.");
  }
}

let inicio = lerInteiro("Digite o primeiro numero do intervalo: ");
let fim    = lerInteiro("Digite o ultimo numero do intervalo: ");

if (inicio >= fim) {
  console.log("Intervalo invalido! O primeiro numero deve ser menor que o segundo.");
  process.exit(0);
}

console.log("No intervalo entre " + inicio + " e " + fim + ":");

let encontrou = false;
for (let i = inicio; i <= fim; i++) {
  if (i % 15 === 0) {              // multiplo de 3 e 5 -> multiplo de 15
    console.log(i + " e multiplo de 3 e 5");
    encontrou = true;
  }
}

if (!encontrou) {
  console.log("Nenhum numero multiplo de 3 e 5 encontrado no intervalo.");
}


