const numeros = ['10', '20', '30', '40'];

console.log('Array orginal de números sem o parse:', numeros);

const numerosComParse = numeros.map((numero) => parseFloat(numero));
console.log('Array com parse', numerosComParse);

const dobroNumeros = numeros.map(
    (numero) => numero * 2
);

const arrayNumerosComObjeto = numerosComParse.map((numero) => {
    return {
        numero,
        soma: numero + 10,
        multiplicacao: numero * 10
    }
})

console.log(arrayNumerosComObjeto);

// const dobroComFor = [];

// for (numero of numeros) {
//     dobroComFor.push(numero * 2);
// }

// console.log('Array orginal de números:', numeros);
// console.log('Array de numeros * 2', dobroNumeros);


// Exemplo de map com objetos
const produtos = [
    {
        id: 1,
        nome: 'Galaxy S21',
        preco: 5000
    },
    {
        id: 2,
        nome: 'Galaxy A51',
        preco: 1500
    },
    {
        id: 3,
        nome: 'Iphone 12',
        preco: 12000
    }
];

const valorDesconto = parseFloat(prompt('Digite o valor do desconto'));

const produtosComDesconto = produtos.map((produto) => {
    return {
        ...produto,
        precoComDesconto: produto.preco - valorDesconto
    }
});

console.log(produtos);
console.log(produtosComDesconto);

const usuarios = [
    {
        id: 1,
        nome: 'Nathan',
        idade: 20,
        email: 'nathan@gmail.com'
    },
    {
        id: 2,
        nome: 'Otavio',
        idade: 20,
        email: 'otavio@gmail.com'
    },
    {
        id: 1,
        nome: 'Roberto',
        idade: 20,
        email: 'roberto@gmail.com'
    }
];

const usuariosComSeguranca = usuarios.map((usuario) => (
    {
        nomeUsuario: usuario.nome
    }
));

console.log(usuarios);
console.log(usuariosComSeguranca);

const nomesUsuarios = usuarios.map((usuario) => {
    return usuario.nome;
});

console.log(nomesUsuarios);