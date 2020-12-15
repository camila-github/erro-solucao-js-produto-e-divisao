## Treinamento Digital Innovation One - Exercicio - Produto e Divisão

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS -  Solução de problemas com JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

Você tem a obrigação de testar as calculadores, para que façam apenas operações de multiplicação e divisão. Além disso, o termo a ser digitado em cada operação, (o número exibido no visor que será dividido ou multiplicado), só pode conter um único dígito.

Quando ligada, a calculadora exibe o número 1. Após isso, o usuário pode digitar um número com um único dígito e escolher se esse número deve multiplicar ou dividir o número exibido anteriormente; o resultado da operação escolhida é então exibido na calculadora. Pode-se repetir esse processo quantas vezes quiser.

Apesar de ser permitido apenas números inteiros de um dígito, a calculadora permite exibir números com múltiplos dígitos e até mesmo números fracionários.

Apresentada a sequência de operações realizadas logo depois de ligada, seu objetivo é conferir o resultado exibido.

No primeiro caso de teste abaixo, o usuário deseja calcular o resultado da seguinte expressão: 1 × 2 × 1 × 3. Note que a primeira ocorrência do número 1 vem do fato da calculadora mostrar inicialmente 1 ao invés de 0.

No segundo caso de teste abaixo, o usuário deseja calcular o resultado da seguinte expressão: ((1/2)/3) × 6.


#### Entrada:

A primeira e única linha da entrada contém um inteiro N (1 ≤ N ≤ 100 000). Cada uma das próximas N linhas contém um dígito e um caractere '*' ou '/', que representam uma operação realizada na calculadora.

#### Saída:

O programa deve imprimir uma única linha contendo o resultado que deve ser exibido pela calculadora ao final de todas as operações.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
3 | 6

2 * |

1 * |

3 * |


Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
3 | 1

2 / |

3 / |

6 * |

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
11 | 387420489

9 * | 

9 * | 

9 * | 

9 * |

9 * |

9 * |

9 * |

9 * |

9 * |

9 * |

9 / |



```javascript
//SOLUÇAO 1
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
```
