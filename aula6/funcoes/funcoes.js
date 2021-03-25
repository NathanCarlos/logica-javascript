// Função normal -> function, função anônima, função arrow

// exibeTexto();

// console.log(texto);

// // Função normal
// function exibeTexto(texto) {
//     const titulo = document.getElementById('texto');
//     titulo.innerText = texto;
// }

// exibeTexto('Aula 6');

// Função anônima
// const soma = function(numero1, numero2) {
//     return numero1 + numero2;
// }

// const nome = (nome) => console.log(nome);

// Arrow functions
// const soma = (numero1, numero2) => {
//     numero1 + numero2;
// };

// const somaNumeros = () => {
//     // const numeros = [10, 20, 30];
//     const numero1 = parseFloat(prompt('Digite o número'));
//     const numero2 = parseFloat(prompt('Digite o segundo número'));
//     const soma = (a, b) => a + b;
//     return soma(numero1, numero2);
// };

// console.log(somaNumeros());


// const numeros = [1, 2, 3];
// const numerosFiltrados = [];
// const predicate = (numero) => numero === 1;

// for (numero of numeros) {
//     if (predicate(numero)) {
//         numerosFiltrados.push(numero);
//     }
// }

// console.log(numerosFiltrados);

// // numeros.filter((numero) => numero === 1);

// const n1 = parseFloat(prompt('Digite o primeiro número'));
// const n2 = parseFloat(prompt('Digite o segundo número'));

// console.log('Resultado da soma', soma(n1, n2));
// console.log('Resultado da multiplicação', multiplicacao(n1, n2));


// function soma(n1, n2) {
//     // Return não é obrigatório
//     return n1 + n2;
//     // Tudo que é escrito depois do return, é ignorado
//     console.log(n1 + n2);
// }

// function multiplicacao(n1, n2) {
//     return n1 * n2;
// }
