import readlinesync = require("readline-sync");

class Queue<T> {
  private items: T[] = [];

 
  enqueue(item: T): void {
    this.items.push(item);
  }
 
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // todos os itens
  list(): T[] {
    return [...this.items];
  }

  // fila está vazia
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// fila de clientes
let fila = new Queue<string>();
let opcao: number;

do {
  console.log("\nMenu:");
  console.log("1 - Adicionar um novo Cliente na fila");
  console.log("2 - Listar todos os Clientes na fila");
  console.log("3 - Chamar (retirar) uma pessoa da fila");
  console.log("0 - Sair do programa");

  opcao = readlinesync.questionInt("\nDigite uma opcao: ");

  switch (opcao) {
    case 1:
      let nome = readlinesync.question("Digite o nome do Cliente: ");
      fila.enqueue(nome);
      console.log("\nFila:");
      for (let cliente of fila.list()) {
        console.log(cliente);
      }
      console.log("\nCliente Adicionado!");
      break;

    case 2:
      if (fila.isEmpty()) {
        console.log("\nA Fila está vazia!");
      } else {
        console.log("\nLista de Clientes na Fila:");
        for (let cliente of fila.list()) {
          console.log(cliente);
        }
      }
      break;

    case 3:
      if (fila.isEmpty()) {
        console.log("\nA Fila está vazia!");
      } else {
        fila.dequeue();
        console.log("\nFila:");
        for (let cliente of fila.list()) {
          console.log(cliente);
        }
        console.log("\nO Cliente foi Chamado!");
      }
      break;

    case 0:
      console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("\nOpção inválida! Tente novamente.");
  }

} while (opcao !== 0);
