const numeroUm = 10;
const numeroDois = 6;
const subtracao = numeroUm - numeroDois;
const soma = numeroUm + numeroDois;
const divisao = numeroUm / numeroDois;
const multiplicacao = numeroUm * numeroDois;
const contaComplexa = numeroDois + numeroUm * numeroDois;
const resto = 15 % 2;
const potencia = 2 ** 3;

console.log(`${numeroUm} - ${numeroDois} = ${subtracao}`);
console.log(`${numeroUm} + ${numeroDois} = ${soma}`);
console.log(`${numeroUm} / ${numeroDois} = ${divisao}`);
console.log(`${numeroUm} * ${numeroDois} = ${multiplicacao}`);
console.log(`${numeroDois} + ${numeroUm} * ${numeroDois} = ${contaComplexa}`);
console.log(resto);
console.log(potencia);

let contador = 8;
//contador = contador + 1;
contador++;
console.log(contador);


//contador = contador + 1;
contador--;
console.log(contador);

let numeroTres = 2;
numeroTres *= 3;
console.log(numeroTres);

let contadorDois = 5;
console.log(++contador); // imprime 6, pois a variável é incrementada antes da impressão
