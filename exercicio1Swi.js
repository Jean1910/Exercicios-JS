const leia = require('readline-sync')

let codigo; 
let quantidade;
let produto;
let preco;

codigo = parseInt(leia.question("Digite o codigo do produto (1 a 6): "));
quantidade = parseInt(leia.question("Digite a qauntidade: "));

switch (codigo) {
    case 1:
        produto = "X-Bic Mac";
        preco = 35;
        break;
    case 2:
        produto = "X-Salada";
        preco = 19;
        break;
    case 3:
        produto = "X calabresa";
        preco = 20;
        break;
    case 4:
        produto = "X-bacon";
        preco = 25;
        break;
    case 5:
        produto = "Fanta";
        preco = 5;
        break;
    case 6:
        produto = "Coca cola";
        preco = 5;
        break;
        default:
            produto = "Inválido";
            preco = 0;
}
let total = quantidade * preco;
console.log("Produto" + produto)
console.log("valor toral R$" + total);
