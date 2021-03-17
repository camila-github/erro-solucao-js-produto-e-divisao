//SOLUCAO 1
const regex = /^([0-9]) *([*/])/;
const imprimirResultado = (valorAcc) => console.log(typeof valorAcc == 'bigint' ? valorAcc : parseInt(valorAcc));
const calcularDivisaoMultiplicacao = {
    '/': (valorAcumulado, numero) => { return parseFloat(Number(valorAcumulado) / Number(numero)); },
    '*': (valorAcumulado, numero) => { return Number(valorAcumulado) * Number(numero) >= Number.MAX_SAFE_INTEGER ? BigInt(valorAcumulado) * BigInt(numero) : valorAcumulado * numero; }
};

(function (entradaDeDados){
  do {
    let valorAcc = 1;
    if (!entradaDeDados) break;

    while (entradaDeDados--) {
      const [, num, operador] = (gets()).match(regex);
      valorAcc = calcularDivisaoMultiplicacao[operador](valorAcc, num);
    }
    imprimirResultado(valorAcc);    
  } while (entradaDeDados = gets());
})(gets());



//SOLUCAO 2
const calcular = {
  '/': (valorAcumulado, numero) => { return parseFloat(Number(valorAcumulado) / Number(numero)); },
  '*': (valorAcumulado, numero) => { return Number(valorAcumulado) * Number(numero) >= Number.MAX_SAFE_INTEGER ? BigInt(valorAcumulado) * BigInt(numero) : valorAcumulado * numero; }
};

do {
  valorAcc = 1;
  if (!(quantLinhaEntrada = parseInt(gets()))) break;

  while (quantLinhaEntrada--) {
      [, num, operador] = (gets()).match(/^([0-9]) *([*/])/);
      valorAcc = calcular[operador](valorAcc, num);
  }
  console.log(typeof valorAcc == 'bigint' ? valorAcc : parseInt(valorAcc));
} while (true);