import readlinesync = require("readline-sync");

class Stack<T> {
  private items: T[] = [];

  // Adiciona um item no topo da pilha
  push(item: T): void {
    this.items.push(item);
  }

  // Remove o item do topo 
  pop(): T | undefined {
    return this.items.pop();
  }

  // Retorna todos os itens 
  list(): T[] {
    return [...this.items];
  }

  // Verifica se a pilha está vazia
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Pilha de livros
let pilha = new Stack<string>();
let opcao: number;

do {
  console.log("\nMenu:");
  console.log("1 - Adicionar um novo livro na pilha");
  console.log("2 - Listar todos os livros da pilha");
  console.log("3 - Retirar um livro da pilha");
  console.log("0 - Sair do programa");

  opcao = readlinesync.questionInt("\nDigite uma opcao: ");

  switch (opcao) {
    case 1:
      let livro = readlinesync.question("Digite o nome do livro: ");
      pilha.push(livro);

      console.log("\nPilha:");
      for (let l of pilha.list()) {
        console.log(l);
      }
      console.log("\nLivro adicionado!");
      break;

    case 2:
      if (pilha.isEmpty()) {
        console.log("\nA Pilha está vazia!");
      } else {
        console.log("\nLista de Livros na Pilha:");
        for (let l of pilha.list()) {
          console.log(l);
        }
      }
      break;

    case 3:
      if (pilha.isEmpty()) {
        console.log("\nA Pilha está vazia!");
      } else {
        pilha.pop();
        console.log("\nPilha:");
        for (let l of pilha.list()) {
          console.log(l);
        }
        console.log("\nUm Livro foi retirado da pilha!");
      }
      break;

    case 0:
      console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("\nOpção inválida! Tente novamente.");
  }

} while (opcao !== 0);
