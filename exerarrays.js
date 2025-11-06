"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var cores = [];
// Laço para ler 5 cores
for (var i = 1; i <= 5; i++) {
    var cor = readlineSync.question("Digite uma cor favorita: ");
    cores.push(cor);
}
// Mostrando todas as cores
console.log("\nListar todas as cores:");
for (var _i = 0, cores_1 = cores; _i < cores_1.length; _i++) {
    var cor = cores_1[_i];
    console.log(cor);
}
// Ordenando as cores em ordem alfabética
var coresOrdenadas = __spreadArray([], cores, true).sort();
console.log("\nOrdenar as cores:");
for (var _a = 0, coresOrdenadas_1 = coresOrdenadas; _a < coresOrdenadas_1.length; _a++) {
    var cor = coresOrdenadas_1[_a];
    console.log(cor);
}
