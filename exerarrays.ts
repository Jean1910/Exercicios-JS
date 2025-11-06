import readlinesync = require("readline-sync");

let cores: string[] = [];

// Laço para ler 5 cores
for (let i = 1; i <= 5; i++) {
  let cor = readlinesync.question("Digite uma cor favorita: ");
  cores.push(cor);
}

// Mostrando todas as cores
console.log("\nListar todas as cores:");
for (let cor of cores) {
  console.log(cor);
}

// Ordenando as cores em ordem alfabética
let coresOrdenadas = [...cores].sort();

console.log("\nOrdenar as cores:");
for (let cor of coresOrdenadas) {
  console.log(cor);
}


