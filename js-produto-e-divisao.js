//SOLUCAO 1
/*Entrada de dados sera pelo gets()*/
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