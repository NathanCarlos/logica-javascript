// const senhaDigitada = prompt('Digite a senha para acessar o sistema');

// ==, ===, !=, !==, >=, >, <=, <
// if (senhaPadrao === senhaDigitada) alert('Autenticado com sucesso!');
// else {
// alert('Senha inválida, tente novamente!');
// window.location.reload();
// }

// switch (senhaDigitada) {
//     case senhaPadrao: 
//         alert('Autenticado com sucesso!');
//         break;
//     default:
//         alert('Senha inválida, tente novamente!');
//         window.location.reload();
//         break;
// }

// const senhaPadrao = 'ABCD';

// const n1 = pedeValor('Digite um número', true);

// exibeTexto(`O número digitado foi: ${n1}, e o tipo dele é: ${typeof n1}`);

// function exibeTexto(texto = '') {
//     document.getElementById('mensagem').innerText = texto;
// }

// // // undefined por padrão é falso.
// function pedeValor(texto, parseNumber = false) {
//     if (!texto) return alert('A variável texto na função pedeValor, é obrigatória');

//     if (parseNumber) return parseFloat(prompt(texto));
//     else return prompt(texto);
// }

// function exibeAlerta(texto) {
//     alert(texto);
// }

// function autenticacao() {
//     const senha = pedeValor('Digite a senha de acesso!');
//     if (senha === senhaPadrao) exibeTexto('Autenticado com sucesso!');
//     else exibeTexto('Falha na autenticação!');
// }

// function generateRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// While, do-while, for.


// alert('Você acertou o número, parabéns!');

// let numero1, numero2;

// numero1 = pedeValor('Digite o primeiro número', true);
// numero2 = pedeValor('Digite o segundo número', true);

// while (numero1 < numero2) {
//     console.log(`Número atual: ${numero1}`);
//     numero1++;
// }

// do {
//     console.log(`Número atual: ${numero1}`);
//     numero1++;
// } while (numero1 < numero2);
// let n1;
// const n2 = generateRandomInt(1, 10);
// do {
//     n1 = pedeValor('Tente advinhar o valor', true);
// } while(n1 !== n2);

// const numeroAleatorio = generateRandomInt(1, 10);
// console.log(numeroAleatorio);
// let numero1 = 0;

// while (numero1 !== numeroAleatorio) {
//     numero1 = pedeValor('Tente acertar o número entre 1-10', true);
//     alert('Número errado, tente novamente');
// }

// prompt(`Digite o primeiro número \n
// Digite o segundo número`);




// Exercício 1) Crie um código que recebe 2 números e exiba no console a mensagem 'Hello World' enquanto o primeiro número for menor que o segundo.

// let numero1 = pedeValor('Digite o primeiro número', true);
// const numero2 = pedeValor('Digite o segundo número', true);

// while (numero1 < numero2) {
//     console.log('Hello World');
//     numero1++;
// }

// Exercício 2) Faça um código que solicite uma senha formada de 4 números inteiros, caso a senha esteja correta apresente a mensagem:
//"Senha correta", caso contrário apresente a mensagem:
//"Senha inválida, tente novamente!"
//Obs: a senha de comparação, você mesmo pode definir.
// const senhaPadrao = 1234;
// let senhaDigitada;

// do {
//     senhaDigitada = pedeValor('Digite a senha', true);
//     if (senhaDigitada !== senhaPadrao) exibeAlerta('Senha inválida, tente novamente!');
// } while (senhaDigitada !== senhaPadrao)

// exibeAlerta('Senha correta!');

// Exercício 3) Crie um programa que recebe 2 números e exiba:
//Todos os números pares que existem entre o primeiro e o segundo número.
//A quantidade de números pares que existem entre o primeiro e segundo número.

// let numero1, numero2, quantidadeNPares = 0;

// numero1 = pedeValor('Digite o primeiro número', true);
// numero2 = pedeValor('Digite o segundo número', true);

// while (numero1 <= numero2) {
//     const temResto = numero1 % 2;
//     // temResto se for par vai retornar 0 -> e 0 por padrão é false
//     if (!temResto) {
//         console.log(`Número par: ${numero1}`);
//         quantidadeNPares++;
//     }
//     numero1++;
// }

// console.log(`Quantidade de números pares que existem entre os dois números: ${quantidadeNPares}`);


/** Exercícios 4)
 * Crie um botão que ao ser clicado, apresente quatro opções:
(a) consulta saldo (Deve exibir saldo atual)
(b) saque (Deve exibir mensagem de sucesso/erro(caso não tenha saldo) e saldo após o saque)
(c) depósito (Deve exibir mensagem de sucesso e saldo após o depósito)
(d) sair. (Finaliza a janela com as opções)
O saldo deve iniciar em R$ 0,00. A cada saque ou depósito o valor do saldo deve ser atualizado.
 */

// let saldo = 0;
// let sair = false;

// function opcoesConta() {
//     sair = false;
//     while (!sair) {
//         const operacaoEscolhida = pedeValor(`Digite uma das opções abaixo:\n
//         (a) consulta saldo\n
//         (b) saque\n
//         (c) depósito\n
//         (d) sair.`);

//         switch (operacaoEscolhida) {
//             case 'a':
//                 exibeAlerta(`O seu saldo atual é: ${saldo}`);
//                 break;
//             case 'b':
//                 const valorSaque = pedeValor('Digite o valor que deseja retirar', true);
//                 if(verificaSePodeSacar(valorSaque)) {
//                     saldo -= valorSaque;
//                     exibeAlerta(`Saque autorizado, valor atual: ${saldo}`);
//                 } else exibeAlerta(`Saque não autorizado, valor atual: ${saldo}`);
//                 break;
//             case 'c':
//                 const valorDeposito = pedeValor('Digite o valor que deseja depositar', true);
//                 saldo += valorDeposito;
//                 exibeAlerta(`Depósito autorizado, valor atual: ${saldo}`);
//                 break;
//             case 'd':
//                 sair = true;
//                 break;
//             default:
//                 exibeAlerta('Valor inválido, tente novamente!');
//                 break;
//         }
//         // sair = true;
//     }
// }

// function verificaSePodeSacar(valorSaque) {
//     if (valorSaque > saldo) return false;

//     return true;
// }

// Array tem o tipo object -> {}, null
// const nomes = ['Nathan', 'Gabriel', 'Felipe', 'Felipe', 'Arthur'];
// const numeros = [1, 100, 150, 30, 20, 10];
// const clientes = [
//     {
//         nome: 'Nathan',
//         email: 'teste@123.com',
//         usuario: 'NT'
//     },
//     {
//         nome: 'Clarissa',
//         email: 'teste123@gmail.com',
//         usuario: 'CRS'
//     },
//     {
//         nome: 'Geraldo',
//         email: 'teste1234@gmail.com',
//         usuario: 'GLD'
//     }
// ];

// const ultimaPosicaoArrayNomes = nomes.length - 1;

// console.log('Array de nomes, valor do primeiro índice:', nomes[0]);
// console.log('Array de nomes, valor do último índice:', nomes[ultimaPosicaoArrayNomes]);


// const buscaNome = pedeValor('Digite um nome para busca');

// const indiceNome = nomes.indexOf(buscaNome);
// const ultimoIndice = nomes.lastIndexOf(buscaNome);

// if (ultimoIndice > -1) console.log(`Valor encontrado, no último índice: ${ultimoIndice}`);
// else console.log('Valor não encontrado no último índice');

// if (indiceNome > -1) console.log(`Valor encontrado, no índice: ${indiceNome}`);
// else console.log('Valor não encontrado');

// Retorna uma lista com os valores encontrados
// const listaNomesEncontrado = nomes.filter((nome) => nome === buscaNome);

// console.log(`Lista de itens encontrados: ${listaNomesEncontrado}`);

// function autenticacao() {
//     const usuarioDigitado = pedeValor('Digite o seu usuário para acessar o sistema');
//     // Retorna o objeto encontrado, retorna undefined caso não seja encontrado!
//     const cliente = clientes.find((cliente) => cliente.usuario === usuarioDigitado);

//     if (!cliente) return exibeTexto('Usuário não encontrado, tente novamente!');

//     exibeTexto(`Bem-vindo, ${cliente.nome}`);
// }

// let texto1, texto2, texto3, texto4;

// const textos = [];

// texto1 = pedeValor('Digite um texto');
// texto2 = pedeValor('Digite um texto');
// texto3 = pedeValor('Digite um texto');
// texto4 = pedeValor('Digite um texto');

// textos.push(texto1, texto2, texto3, texto4);

// console.log(textos);

// console.log(`textos com sort: ${textos.sort()}`);


// let n1, n2, n3, n4;

// const numeros3 = [];

// n1 = pedeValor('Digite um valor', true);
// n2 = pedeValor('Digite um valor', true);
// n3 = pedeValor('Digite um valor', true);
// n4 = pedeValor('Digite um valor', true);

// numeros3.push(n1, n2, n3, n4);
// console.log(`numeros em ordem crescente: ${numeros3.sort(ordenarCrescente)}`);
// console.log(`numeros em ordem decrescente: ${numeros3.sort(ordenarDecrescente)}`);


// function ordenarCrescente(a, b) {
//     if (a < b) return -1;

//     if (a > b) return 1;

//     return 0;
// }

// function ordenarDecrescente(a, b) {
//     if (a < b) return 1;

//     if (a > b) return -1;

//     return 0;
// }
