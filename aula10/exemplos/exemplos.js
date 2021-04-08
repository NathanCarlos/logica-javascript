const numeros = [10, 20, 30, 40];
const alunos = [
    {
        id: 1,
        nome: 'Nathan'
    },
    {
        id: 2,
        nome: 'Orlando'
    }
];

// for (numero of numeros) {
//     console.log('for', numero);
// }

// numeros.forEach((numero, indice, array) => {
//     if (array[array.length - 1] !== array[indice]) {
//         array[indice] = numero * array[indice + 1];
//     }
//     // console.log(array);
//     console.log('Array de números:', array);
//     console.log(`Número: ${numero}, indice do número: ${indice}`);
//     console.log('forEach', numero);
// });

// console.log('Números', numeros);

// const funcaoAluno = (aluno, indice, array) => {
//     array[indice].id += 1; 
//     console.log(array);
//     // console.log(aluno, indice);
// }

// alunos.forEach(funcaoAluno);

numeros.forEach((numero, indice) => {
    console.log(numero, indice);
})
