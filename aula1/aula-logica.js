/**
 * Tipos primitivos(undefined, boolean, number, string)
 *  */ 

var primitivoUndefined = undefined;

var booleanPrimitivo = false;

var numeroInt = 10;
var numeroFloat = 10.5;

var nome = "Nathan";


/**
 * Tipos complexo (objects)
 *  */ 

var objectComplexo = {
    nome: "Nathan",
    idade: 17
};
var objectArray = ["Nathan", 10];

/**
 * Exemplo tipo dinâmico e fraco
 *  */ 

var variavelDinamica;

variavelDinamica = "Geraldo"; // string

console.log(typeof variavelDinamica);

variavelDinamica = 10; // number

console.log(typeof variavelDinamica);

/**
 * Exemplo de hoisting(Elevação de escocpo), só acontece com var
 */

hoisting = 20;

console.log('hoisting', hoisting);

var hoisting = 10;

console.log('hoisting', hoisting);


/**
 * sempre utilize let pois não sofre hoisting
 *  */ 

let numero;

console.log('sem hoisting', numero) // Resultado é undefined;

numero = 10;

console.log('sem hoisting com valor', numero); // Resultado é 10

numero = "15";

console.log('variável com tipo mudado para string', numero); // Resultado é "15"

/**
 * Constantes e Variáveis
 */

const valor1 = 50; // Não podemos atribuir outro valor a essa constante

let helloWorld;
helloWorld = "Olá mundo!";
console.log(helloWorld);

let tipos;

// Começou com tipo complexo
tipos = {
    nome: "Flavio"
};

console.log(typeof tipos, tipos);

tipos = 10;

console.log(typeof tipos, tipos);

// adicionar um valor a um object na constante
const cliente = {
    nome: "Clarissa"
};

console.log(cliente.nome);

cliente.nome = "Felipe";

console.log(cliente.nome);

const nomeCliente = "Clarissa";
console.log(nomeCliente);
// nomeCliente = "Felipe";
// console.log(nomeCliente);

let cliente2 = {
    nome: "Nathan"
};

console.log(cliente2.nome);

cliente2 = 99;

console.log(cliente2);


/**
 * Coerção de tipos utilizando +
 * Operações Aritméticas (+, -, *, /, %)
 */

// Lembre-se que podemos utilizar let n1, n2, n3, resultadoSoma;

let n1;
let n2;
let n3;
let resultadoSoma;

n1 = parseFloat(prompt('Digite um número inteiro'));
n2 = parseFloat(prompt('Digite o segundo número'));
n3 = parseFloat(prompt('Digite o terceiro número'));
resultadoSoma = n1 + n2 + n3;
resultadoSubtracao = n1 - n2 - n3;
resultadoDivisao = n1 / n2;
resultadoMultiplicacao = n1 * n2 * n3;
let resultadoRestoDaDivisao = 8 % 3; // Retorna quantas vezes o 3 cabe em 8. 3 + 3 = 6(8-6) = 2

console.log('resultado multiplicação', resultadoMultiplicacao);
console.log('resultado da soma', resultadoSoma);
console.log('resultado da subtração', resultadoSubtracao);
console.log('resultado da divisão', resultadoDivisao);
console.log('resultado do resto de uma divisão', resultadoRestoDaDivisao);

const exemploContatenacao = 'Nathan ' + 'Professor';
console.log(exemploContatenacao);


const objectExemplo = {
    numero: '150'
};

const numeroString = 190;

console.log(objectExemplo, parseFloat(objectExemplo.numero));

console.log('parseString', numeroString.toString());

/**
 * Operações de incremento e decremento;
 *  */ 

let numero1Incremento = 15;

// numero1Incremento = numero1Incremento + 1;
numero1Incremento++;

console.log('Operação de incremento', numero1Incremento);

// numero1Incremento = numero1Incremento - 1;
numero1Incremento--;

console.log('Resultado da operação de decremento', numero1Incremento);

/**
 * Operações de atribuição
 *  */

let numero1Atribuicao = 15;

// numero1Atribuicao = numero1Atribuicao + 5;
numero1Atribuicao += 5;

console.log('Resultado da operação de soma por atribuição', numero1Atribuicao);

// numero1Atribuicao = numero1Atribuicao - 10;
numero1Atribuicao -= 10;

console.log('Resultado da operação de subtração por atribuição', numero1Atribuicao);

// numero1Atribuicao = numero1Atribuicao * 10;
numero1Atribuicao *= 10;

console.log('Resultado da operação de multiplicação por atribuição', numero1Atribuicao);

// numero1Atribuicao = numero1Atribuicao / 10;
numero1Atribuicao /= 10;
console.log('Resultado da operação de divisão por atribuição', numero1Atribuicao);

// const n1 = parseFloat(prompt('Digite o primeiro número:'));
// const n2 = parseFloat(prompt('Digite o segundo número:'));
// const n3 = parseFloat(prompt('Digite o terceiro número:'));
// let resultado;

resultado = n1 + n2 + n3;

console.log(resultado);

console.log('Arredonda para o próximo número inteiro', Math.ceil(resultado));
console.log('Arredonda para o número anterior inteiro', Math.floor(resultado));
console.log('Arredonda para o número anterior inteiro se < 0.5 ou para o próximo número inteiro se >= 0.5',
    Math.round(resultado));
console.log('Retorna no maior número entre os passados por parâmetro', Math.max(n1, n2, n3));
console.log('Retorna no menor número entre os passados por parâmetro', Math.min(n1, n2, n3));
console.log(Math.random());


/**
 * Math.random() para randômicos entre intervalos(minímo e máximo)
 *  */ 

let min;
let max;

min = parseFloat(prompt('Digite o mínimo para gerar um número randômico'));
max = parseFloat(prompt('Digite o máximo para gerar um número randômico'));

const randomNumber = Math.random()*(max-min) + min;

console.log(randomNumber);
