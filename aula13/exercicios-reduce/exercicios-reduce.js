// Exercício 1 Reduce)

const nomes = ['Nathan', 'Otavio', 'Matheus', 'Roberto', 'Nathan', 'Alberto', 'Alberto', 'Otavio'];

const nomesNaoDuplicados = nomes.reduce((acc, nome) => {
    if (!acc.includes(nome)) acc.push(nome);
    return acc;
}, []);

console.log(nomesNaoDuplicados);

// Exercício 2 Reduce)
const numeros = [];

const adicionaNumero = (numero) => {
    numeros.push(numero);
    console.log(numeros);
    const somaTotalNumeros = numeros.reduce((acc, numero) => acc + numero);
    console.log(somaTotalNumeros);
}


// Exercício 3 Reduce)

const produtos = [
    {
        id: 1,
        nome: 'Galaxy S51',
        preco: 1000
    },
    {
        id: 1,
        nome: 'Galaxy S51',
        preco: 1000
    },
    {
        id: 2,
        nome: 'Iphone',
        preco: 2000
    },
    {
        id: 2,
        nome: 'Iphone',
        preco: 2000
    }
];

const buscaPorId = id => produtoAcumulador => produtoAcumulador.id === id;
const buscaPorNome = nome => produtoAcumulador => produtoAcumulador.nome === nome;

const produtosSemDuplicados = produtos.reduce((acc, produto) => {
    const indiceProduto = acc.findIndex(buscaPorNome(produto.nome));

    if (indiceProduto === -1) {
        acc.push({
            ...produto,
            quantidade: 1
        });
    }
    if (indiceProduto > -1) {
        acc[indiceProduto].quantidade++;
    }

    return acc;
}, []);

console.log(produtosSemDuplicados);


// Exercícios 4 Reduce)

const colaboradores = [
    {
        id: 1,
        nome: 'Nathan',
        salario: 10000
    },
    {
        id: 2,
        nome: 'Mateus',
        salario: 3000
    },
    {
        id: 3,
        nome: 'Roberta',
        salario: 5000
    }
];

const somaSalarios = colaboradores.reduce((acc, colaborador) => acc + colaborador.salario, 0);
const mediaSalarios = calcular(dividir, somaSalarios, colaboradores.length);

console.log(somaSalarios, mediaSalarios);
