# Playground Functions

Playground Functions é um projeto em JavaScript que contém diversas funções para realizar operações simples, tais como encontrar o maior número em uma lista, calcular a soma de uma lista de números, encontrar o valor absoluto de um número, entre outras.

Este projeto faz parte de uma das primeiras lições do módulo de Fundamentos do curso de Desenvolvimento Web da Trybe. O objetivo deste projeto é fornecer uma série de funções básicas em JavaScript que podem ser usadas para praticar e aprimorar habilidades em programação. As funções incluem desde cálculos simples até manipulação de strings e arrays. Este repositório é um playground para que você possa experimentar as funções e praticar seus conhecimentos em JavaScript.

## Como Usar

O projeto é composto por diversos arquivos de código, cada um contendo uma função específica. Para utilizar uma dessas funções em seu projeto, basta importar o arquivo correspondente e chamar a função desejada.

Segue um exemplo de como utilizar a função "maiorNumero":

```javascript
const maiorNumero = require('./maiorNumero');

let lista = [1, 2, 3, 4, 5];
let maior = maiorNumero(lista);
console.log(maior); // Output: 5
