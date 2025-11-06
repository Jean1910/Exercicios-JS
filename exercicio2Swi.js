const leia = require('readline-sync')

let nome; 
let cargo;
let salario;
let codigodocargo;
let percentual;

nome = leia.question(" Nome do funcionario: ");
codigodocargo = parseInt(leia.question("Codigo do cargo (1 a 6): "));
salario = parseFloat(leia.question("Salario: "));

switch (codigodocargo) {
    case 1:
        nome = "Gerente";
        percentual = 0.10; // 10%
        break;
    case 2:
        nome = "Vendedor";
        percentual = 0.07; //07%
        break;
    case 3:
        nome = "Supervisor";
        percentual = 0.09; // 09%
        break;
    case 4:
        nome = "Motorista";
        percentual = 0.06; //06%
        break;
    case 5:
        nome = "Estoquista";
        percentual = 0.05; //05%
        break;
    case 6:
        nome = "Técnico de TI";
        percentual = 0.08; //08%
        break;
        default:
            produto = "Inválido";
            preco = 0; 
}

let novoSalario = salario + (salario * percentual);

console.log("nome do funcionario: " + nome);
console.log("Cargo: " + cargo);
console.log("Salario: R$ " + novoSalario);