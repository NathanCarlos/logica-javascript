const numeros = [10, 20, 30, 40];

// let acumulador = 0;

// for (numero of numeros) {
//     acumulador += numero;
// }
// const novoArrayNumeros = numeros.map((numero) => ({
//     ...numero,
//     soma: numero + 10
// }));
const valorInicial = 0;

const somaTotal = numeros.reduce((acc, numero) => {
    return acc + numero;
});

console.log(somaTotal);

const nomes = ['Nathan', 'Otavio', 'Alex', 'Ellen', 'Nathan', 'Otavio'];

console.log(nomes.reduce((acc, nome) => acc + nome));

// let acumulador = [];

// for (nome of nomes) {
//     // validaSeNomeEstaNaListaReduce(acc, nome)
//     // if(acumulador.includes(nome)) {
//     //     acumulador.push(nome);
//     // }
// }

const nomesNaoDuplicados = nomes.reduce((acc, nome) => {
    console.log(nome);
    if (!acc.includes(nome)) {
        acc.push(nome);
    }
    console.log(acc);
    return acc;
}, []);

console.log(nomesNaoDuplicados);

const produtos = [
    {
        id: 1,
        nome: 'Galaxy S21',
        preco: 5000,
        quantidade: 1,
    },
    {
        id: 2,
        nome: 'Iphone 12',
        preco: 10000,
        quantidade: 1,
    },
    {
        id: 3,
        nome: 'Iphone 8',
        preco: 3000,
        quantidade: 1,
    },
    {
        id: 4,
        nome: 'Galaxy S21',
        preco: 5000,
        quantidade: 1,
    },
    {
        id: 4,
        nome: 'Galaxy S21',
        preco: 5000,
        quantidade: 1,
    },
    {
        id: 4,
        nome: 'Galaxy S21',
        preco: 5000,
        quantidade: 1,
    },
];

const produtosNaoDuplicados = produtos.reduce((acc, produto) => {
    const produtoIndice = acc.findIndex((prd) => prd.nome === produto.nome);
    if (produtoIndice === -1) {
        acc.push({
            ...produto,
            quantidade: 1
        });
    }
    if (produtoIndice > -1) {
        acc[produtoIndice].quantidade++;
    }
    return acc;
}, []);

// const totalPrecoProdutos = produtos.reduce((acc, produto) => acc + produto.preco, 0);
// console.log(totalPrecoProdutos / produtos.length);
console.log(produtosNaoDuplicados);
// console.log(totalProdutos);


const lista = [];
let somaLista = () => lista.reduce((acc, numero) => acc + numero, 0);
const adicionaLista = (numero) => {
    if (numero) {
        lista.push(numero)
    }
    console.log(lista)
    console.log(somaLista());
};