/** Exercício 1) Considere o array:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
 * Crie um script que exiba todos os números ímpar e par que existem no array utilizando for.
*/

// const numerosImpar = [];
// const numerosPares = [];

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//     20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
//     36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

// for (numero of numeros) {
//     const temResto = numero % 2;
//     if (!temResto) numerosPares.push(numero);
//     else numerosImpar.push(numero);
// }

// console.log('Números pares', numerosPares);
// console.log('Números ímpares', numerosImpar);


/** Exercício 2) Considere o array abaixo:
[
    {
        nome: 'Nathan',
        nota1: 5,
        nota2: 7,
        nota3: 10
    },
    {
        nome: 'Rodrigo',
        nota1: 7,
        nota2: 9,
        nota3: 8
    },
    {
        nome: 'Jeferson',
        nota1: 6,
        nota2: 7,
        nota3: 9
    },
    {
        nome: 'Alan',
        nota1: 10,
        nota2: 7,
        nota3: 10
    },
    {
        nome: 'Jorge',
        nota1: 3,
        nota2: 10,
        nota3: 10
    },
    {
        nome: 'Otávio',
        nota1: 5,
        nota2: 4,
        nota3: 4
    }
]
 * Crie um script que irá tirar a média da nota1, nota2 e nota3 dos alunos e exiba quais alunos foram aprovados e quais foram reprovados.
 * Considerar que média maior ou igual a 5 o aluno está aprovado e média menor que 5 está reprovado.
 * Dica: Utilize for para percorrer o array e utilize push inserir valores nos novos arrays.
*/

// const aprovados = [];
// const reprovados = [];
// const alunos = [
//     {
//         nome: 'Nathan',
//         nota1: 5,
//         nota2: 7,
//         nota3: 10
//     },
//     {
//         nome: 'Rodrigo',
//         nota1: 7,
//         nota2: 9,
//         nota3: 8
//     },
//     {
//         nome: 'Jeferson',
//         nota1: 6,
//         nota2: 7,
//         nota3: 9
//     },
//     {
//         nome: 'Alan',
//         nota1: 10,
//         nota2: 7,
//         nota3: 10
//     },
//     {
//         nome: 'Jorge',
//         nota1: 3,
//         nota2: 10,
//         nota3: 10
//     },
//     {
//         nome: 'Otávio',
//         nota1: 5,
//         nota2: 4,
//         nota3: 4
//     }
// ];

// for (aluno of alunos) {
//     const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
//     if (media >= 5) aprovados.push(aluno);
//     else reprovados.push(aluno);
// }

// console.log('Alunos aprovados: ', aprovados);
// console.log('Alunos reprovados: ', reprovados);

/**
 * Exercício 3) Considere a matriz abaixo:
 * [[1, 3, 6, 7], [9, 3, 7, 10]]
 * 
 * Crie um vetor com os valores da matriz.
 */

// const numeros = [[1, 3, 6, 7], [9, 3, 7, 10]];
// const novosNumeros = [];

// for (indice in numeros) {
//     for (numero of numeros[indice]) {
//         novosNumeros.push(numero);
//     }
// }

// console.log(novosNumeros);