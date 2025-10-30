// criação das variaveis 

let saláriobruto = 2000.00
let adicionalnoturno = 500.00
let horasextra = 100.00
let descontos = 200.00
let líquido = 2800.00

// Saida dos dados

líquido = (saláriobruto + adicionalnoturno + (horasextra * 5) - descontos)
console.log("Salário líquido é:" + líquido)