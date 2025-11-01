const leia = require('readline-sync');

let idade = 0;
let menores21 = 0;
let maiores50 = 0;


while (idade >= 0) {
    idade = parseInt(leia.question("Digite uma idade: "), 10); 


    if (idade < 0) {
        console.log("Leitura finalizada."); 
        break;
    }

    if (idade < 21) {
        menores21++;
    }

    if (idade > 50) {
        maiores50++;
    }
}

// Mostra os resultados
console.log("Total de pessoas menores de 21 anos: " + menores21);
console.log("Total de pessoas maiores de 50 anos: " + maiores50);
