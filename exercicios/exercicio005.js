//Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando

let nome = "Ana"

let saldo = 0;
let deposito = 200;
let saque = 50;

let saldoAposDeposito = saldo + deposito;
let saldoAposSaque = saldoAposDeposito - saque;

console.log(`${nome} Iniciou com  o saldo de R$${saldo},00 apos o deposito ${nome} ficou com seu saldo no valor de R$${saldoAposDeposito},00 e ${nome} retirou R$${saque},00 e o valor total do seu saldo e de R$${saldoAposSaque},00`);
