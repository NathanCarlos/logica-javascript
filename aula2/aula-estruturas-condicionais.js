/**
 * Aula de Estruturas Condicionais Lógica de Programação
 */


let n1, n2, resultado;
const valorBase = 2;

n1 = parseFloat(prompt('Digite um número'));
n2 = parseFloat(prompt('Digite o segundo número'));

// Operações que aprendemos na aula passada(+, -, *, /, %)

resultado = (n1 + n2) / valorBase;

const textoMedia = `A média entre os dois números é: ${resultado}`;

console.log(textoMedia);

document.write(`<h1 class="titulo">${textoMedia}</h1>`);

document.getElementsByClassName('titulo').innerHTML = textoMedia;

resultado = (n1 + n2) * valorBase; // Utilizamos a mesma forma para divisão (n1 + n2) / valorBase;

document.write(`<h1>A soma de n1 com n2 vezes 2 é: ${resultado}</h1>`);

/**
 * Conteúdo de IF/Else com operadores lógicos(==, ===, !=, !==, >, >=, <, <=)
 */

const idade = parseInt(prompt('Digite a sua idade'));
const podeVacinar = 'Para essa idade você já pode se vacinar';
const naoPodeVacinar = 'Para essa idade você não pode se vacinar';

// == Valida só valor
// === Valida valor e se os valores tem o mesmo tipo

if (idade > 90 && idade <= 105) document.write(podeVacinar);
else if (idade >= 85 && idade <= 90) document.write(podeVacinar);
else if (idade === 84) document.write(podeVacinar);
else if (idade === 83 || idade === 82) document.write(podeVacinar);
else if (idade >= 0 && idade <= 81) document.write(podeVacinar);
else {
    // Alternativa enquanto não aprendemos funções.
    alert('Idade inválida para vacinar, tente com uma válida!');
    window.location.reload();
}

// const senha = '102030';
// const senhaDigitadaUsuario = prompt('Digite a senha');

// if (senhaDigitadaUsuario === senha) alert('Parabéns você tem acesso ao sistema');
// else {
//     alert('Você errou a senha, tente novamente');
//     window.location.reload();
// }


// Exemplo de uso do operador ternário;
const idadeMaiorQue90 = idade > 90 ? 'Idade maior que 90' : 'Idade menor que 90';

console.log(idadeMaiorQue90);

// let numero = prompt('Digite um número');
// // let numero2 = prompt('Digite o segundo número');

// if (numero != 10) {
//     console.log('numero ou tipo diferente');
// }

/**
 * Exemplo da diferença entre == e ===, só descomentar o código abaixo
 * == compara valor
 * === compara valor e tipo se o esquerdo é number o direito também tem que ser number
 */

// const numero = prompt('Digite o número');
// if ("10" == 10) console.log('número igual a 10');
// else console.log('Tipo é diferente');


/**
 * Correção primeiros exercícios
 *  */
// Exercício 1) Crie um código que recebe 3 valores, e exiba o maior e o menor valor entre eles.

// let n1, n2, n3;

// n1 = parseFloat(prompt('Digite o primeiro número'));
// n2 = parseFloat(prompt('Digite o segundo número'));
// n3 = parseFloat(prompt('Digite o terceiro número'));

// const arrayNumeros = [n1, n2, n3];

// const valorMaior = Math.max(...arrayNumeros);
// const valorMenor = Math.min(...arrayNumeros);

// alert(`O maior valor entre eles é o: ${valorMaior} e o menor valor entre eles é o: ${valorMenor}`);


// Exercício 2) Crie um código que recebe n1, n2 e n3 e exiba se a soma de n1 com n2 é maior/menor que n3.

// let n1, n2, n3, soma;

// n1 = parseFloat(prompt('Digite o primeiro número'));
// n2 = parseFloat(prompt('Digite o segundo número'));
// n3 = parseFloat(prompt('Digite o terceiro número'));

// soma = n1 + n2;

// if (soma > n3) console.log('A soma de n1 com n2 é maior que n3');
// else console.log('A soma de n1 com n2 é menor que n3');

// Exercício 3) Crie um código que recebe um número e exiba se ele é ímpar ou par(considere que qualquer número par dividido por 2 não tem resto).

// let n1, resultado;

// n1 = parseInt(prompt('Digite o primeiro número'));

// resultado = n1 % 2;

// if (resultado === 0) console.log('Número par');
// else console.log('Número ímpar');

// Exercício 4) Crie um código que recebe 3 números e os exiba em ordem decrescente

// let n1, n2, n3, controle;

// n1 = parseFloat(prompt('Digite o primeiro número'));
// n2 = parseFloat(prompt('Digite o segundo número'));
// n3 = parseFloat(prompt('Digite o terceiro número'));

// if (n2 > n1) {
//     controle = n2;
//     n2 = n1;
//     n1 = controle;
// }

// if (n3 > n1) {
//     controle = n3;
//     n3 = n1;
//     n1 = controle;
// }

// if (n3 > n2) {
//     controle = n3;
//     n3 = n2;
//     n2 = controle;
// }

// alert(`Números em ordem decrescente: ${n1}, ${n2}, ${n3}`);

/**
 * Tipos que em uma condição lógica já são falsos por padrão (undefined, 0, "", NaN, null). 
 * Truthy(Todos que não são falsos por padrão, são considerados true) e Falsy(Falso por padrão)
 *  */ 

let numero;

numero = parseInt(prompt('Digite um número para saber se é ímpar ou par'));

if (!numero) {
    alert('Você não digitou um número, tente novamente!');
    window.location.reload();
}

resultado = numero % 2;

if (!resultado) console.log('Número par');
else console.log('Número ímpar');


/**
 * Estrutura lógica Switch
 * */
const produto = prompt('Digite o produto que gostaria de saber se tem em estoque');

switch (produto) {
    case 'refrigeirante':
        alert('O produto está disponível');
        break;
    case 'açúcar':
        alert('O produto está disponível');
        break;
    case 'alface':
        alert('O produto está disponível');
        break;
    default: 
        alert('Não tem produto no estoque com esse nome');
        break;
}

// const senhaDigitada = prompt('Digite a senha para entrar no sistema');
// const senhaValida1 = 'ABCDE';
// const senhaValida2 = '102030';
// if (senhaDigitada) {
//     switch (senhaDigitada) {
//         case senhaValida1:
//             document.write('<h1>Acesso permitido</h1>');
//             break;
//         case senhaValida2:
//             document.write('<h1>Acesso permitido</h1>');
//             break;
//         default:
//             alert('Senha inválida, tente novamente!');
//             window.location.reload();
//             break;
//     }
// } else {
//     alert('Você precisa digitar uma senha para acessar o sistema!');
//     window.location.reload();
// }

/**
 * Correção exercícios lista 2.
 */

// Exercício 6) Escreva um código que imprima um mês de acordo com o número digitado pelo usuário.

// const mes = parseInt(prompt('Digite um mês em número(1-12)'));
// let mesEscrito;
// if (!mes) {
//     alert('Digite um mês em número');
//     window.location.reload();
// }

// switch (mes) {
//     case 1:
//         mesEscrito = 'Janeiro';
//         break;
//     case 2:
//         mesEscrito = 'Fevereiro';
//         break;
//     case 3:
//         mesEscrito = 'Março';
//         break;
//     case 4:
//         mesEscrito = 'Abril';
//         break;
//     case 5:
//         mesEscrito = 'Maio';
//         break;
//     case 6:
//         mesEscrito = 'Junho';
//         break;
//     case 7:
//         mesEscrito = 'Julho';
//         break;
//     case 8:
//         mesEscrito = 'Agosto';
//         break;
//     case 9:
//         mesEscrito = 'Setembro';
//         break;
//     case 10:
//         mesEscrito = 'Outubro';
//         break;
//     case 11:
//         mesEscrito = 'Novembro';
//         break;
//     case 12:
//         mesEscrito = 'Dezembro';
//         break;
//     default:
//         alert('Você digitou um valor inválido, tente novamente');
//         window.location.reload();
// }

// alert(mesEscrito);

// Exercício 7) Escreva um código que simule uma calculadora básica, provendo a leitura de um valor, seguido da operação(+, -, * e /) e do segundo valor.

// let n1, operacao, n2, resultado;

// n1 = parseFloat(prompt('Digite um número'));
// operacao = prompt('Digite a operação(+, -, *, /)');
// n2 = parseFloat(prompt('Digite um segundo número'));

// switch (operacao) {
//     case '-':
//         resultado = n1 - n2;
//         break;
//     case '+':
//         resultado = n1 + n2;
//         break;
//     case '*':
//         resultado = n1 * n2;
//         break;
//     case '/':
//         resultado = n1 / n2;
//         break;
//     default:
//         break;
// }

// document.write(`<h1>O resultado da operação é: ${resultado}</h1>`);


/** Exercício 8)
 * Crie um código que recebe 3 notas de um aluno entre 0 e 10 e calcule a média.
Se a média for menor que 5 exiba na tela que esse aluno está reprovado, caso a nota seja maior ou igual a 5 exiba que ele foi aprovado.
Coloque validação se o usuário preencheu todas as notas e se elas estão entre 0-10, se uma dessas regras de validação não for cumprida, peça para ele começar novamente
 */

// let nota1, nota2, nota3, media;

// nota1 = parseFloat(prompt('Digite a primeira nota'));
// nota2 = parseFloat(prompt('Digite a segunda nota'));
// nota3 = parseFloat(prompt('Digite a terceira nota'));

// if (!nota1 || !nota2 || !nota3) {
//     alert('Você não preencheu todas as notas, tente novamente');
//     window.location.reload();
// }

// if (!(nota1 >= 0 && nota1 <= 10) || !(nota2 >= 0 && nota2 <= 10) || !(nota3 >= 0 && nota3 <= 10)) {
//     alert('Você precisa preencher um valor entre 0-10 nas notas, tente novamente');
//     window.location.reload();
// }

// media = (nota1 + nota2 + nota3) / 3;

// if (media >= 5) {
//     alert('Esse aluno está aprovado');
// } else {
//     alert('Esse aluno está reprovado');
// }
