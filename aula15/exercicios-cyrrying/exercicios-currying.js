// Exercício 1

const ulNumerosComValores = document.getElementById('numerosComValores');

const numeros = [];

const adicionarNumero = (n1, n2) => {
    numeros.push(
        {
            n1,
            n2
        }
    );
    listaNumeros();
}

const listaNumeros = () => {
    let lis = '';
    for (numero of numeros) {
        const resultadoSoma = soma(numero.n1)(numero.n2);
        lis += `
            <li>
                <p>Numeros da operação: ${numero.n1} e ${numero.n2}</p>
                <p>Resultado da soma: ${resultadoSoma}</p>
                <p>Resultado da multiplicacão: ${multiplicacao(numero.n1)(numero.n2)}</p>
                <p>Resultado da divisão: ${divisao(numero.n1)(numero.n2)}</p>
                <p>Resultado da subtração: ${subtracao(numero.n1)(numero.n2)}</p>
                <p>Resultado da soma + 1: ${incrementaUm(resultadoSoma)}</p>
                <p>Dobro do número um: ${dobroNumero(numero.n1)}</p>
                <p>Dobro do número dois: ${dobroNumero(numero.n2)}</p>
                <p>Potência do número um: ${multiplicacao(numero.n1)(numero.n1)}</p>
                <p>Potência do número dois: ${multiplicacao(numero.n2)(numero.n2)}</p>
            </li>
        `;
    }
    ulNumerosComValores.innerHTML = lis;
}

// Exercício 2)

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
    },
    {
        id: 4,
        nome: 'Iphone 6',
        preco: 3000
    },
    {
        id: 5,
        nome: 'Iphone 7',
        preco: 3500
    }
];

const aplica10Desconto = aplicaDesconto(10);
const aplica20Desconto = aplicaDesconto(20);

const arrayComDescontos = produtos.map((produto) => ({
    ...produto,
    desconto10: aplica10Desconto(produto.preco),
    desconto20: aplica20Desconto(produto.preco),
    desconto30: aplicaDesconto(30)(produto.preco),
    desconto40: aplicaDesconto(40)(produto.preco),
    desconto50: aplicaDesconto(50)(produto.preco),
    desconto60: aplicaDesconto(60)(produto.preco),
    desconto70: aplicaDesconto(70)(produto.preco),
    desconto80: aplicaDesconto(80)(produto.preco),
    desconto90: aplicaDesconto(90)(produto.preco),
    desconto100: aplicaDesconto(100)(produto.preco),
}));

console.log(arrayComDescontos);
