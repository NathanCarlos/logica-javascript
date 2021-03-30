// Função pura
const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 + n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;
// const exibeValorNaTela = (n1, n2) => console.log(n1, n2);

// Funções de alta ordem(High Order Functions) quando uma função recebe ou retorna uma função
const calcular = (operacao, n1, n2) => operacao(n1, n2);
const media = (n1, n2) => calcular(dividir, calcular(somar, n1, n2), 2);

// Exemplo média sem High Order Functions
// function media(n1, n2) {
//     const resultado = (n1 + n2) / 2;
//     return resultado;
// }

const n1 = parseFloat(prompt('Digite um número:'));
const n2 = parseFloat(prompt('Digite o segundo número: '));

console.log(calcular(somar, n1, n2));
console.log(calcular(subtrair, n1, n2));
console.log(calcular(multiplicar, n1, n2));
console.log(calcular(dividir, n1, n2));

// Função alta ordem que recebe função como parâmetro;
const exibeTexto = (exibeAlerta, texto) => exibeAlerta(texto);

exibeTexto(alert, `Média:  ${media(n1, n2)}`);
exibeTexto(console.log, `Média:  ${media(n1, n2)}`);

const parseGenerico = (tipoParse, texto) => tipoParse(texto);

const numero1 = parseGenerico(parseInt, prompt('Digite um número'));
const numero2 = parseGenerico(parseInt, prompt('Digite um segundo número'));


// Função que chama a si mesmo
// menu();

// const menu = () => {
//     const opcoes = prompt('Digite um opção válida: (a, b, c)');
//     switch (opcoes) {
//         case 'a':
            
//             break;
//         case 'b':
        
//             break;
//         default:
//             alert('Opção inválida!');
//             menu();
//             break;
//     }
// }

