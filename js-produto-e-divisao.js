//SOLUCAO 1
/*Entrada de dados sera pelo gets()*/
const calcular = {
    /*O numero de entrada é convertido para number() e depois da divisão retorna um valor float (parseFloat())*/
    '/': (valorAcumulado, numero) => { return parseFloat(Number(valorAcumulado) / Number(numero)); },
    /*O numero de entrada é convertido para number(), depois da multiplicaçao, verifica se o resultado
    é maior ou igual a números inteiros (MAX_SAFE_INTEGER). Ou seja, verifica de maneira segura, se o 
    número é um valor muito grande, além do valor limite seguro dos inteiros. */
    /*Apos verificar, se o resultado for verdadeiro, multiplica as entradas usando o BigInt(), utilizado
    para numeros grandes*/
    '*': (valorAcumulado, numero) => { return Number(valorAcumulado) * Number(numero) >= Number.MAX_SAFE_INTEGER ? BigInt(valorAcumulado) * BigInt(numero) : valorAcumulado * numero; }
};

do {
    /*Será utilzado o numero 1 para iniciar o calculo*/
    valorAcc = 1;
    /*O if () valida se a quantidade de Linhas da Entrada é um numero valido*/
    if (!(quantLinhaEntrada = parseInt(gets()))) break;

    while (quantLinhaEntrada--) {
        /*(gets()).match()  - A cada entrada será verificado se a string tem apenas numeros + operador
         de multiplicação ou operador divisão.*/
        /*  [, num, operador] - O resultado é uma string que se torna um array. Então é feito atribuição 
        via desestruturação (destructuring assignment) do array, distribuindo os valores do array nas variaveis*/
        [, num, operador] = (gets()).match(/^([0-9]) *([*/])/);
        /*A função calcular é chamada. è enviado o operador + o conteudo da variavel valorAcc + 
        o numero que veio da entrada (num) no processo de destructuring assignment . O retorno 
        será acumulado na variavel valorAcc.*/
        valorAcc = calcular[operador](valorAcc, num);
    }
    console.log(typeof valorAcc == 'bigint' ? valorAcc : parseInt(valorAcc));
} while (true);