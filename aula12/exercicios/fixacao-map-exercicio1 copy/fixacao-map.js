const ulListaProdutos = document.getElementById('listaProdutos');

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


const aplicarDesconto = (numero, porcentagemDesconto) => numero - (numero * (porcentagemDesconto / 100));

const desconto = parseInt(prompt('Digite a porcentagem do desconto que deseja aplicar'));
const produtosComDesconto = produtos.map((produto) => (
    {
        ...produto,
        precoComDesconto: aplicarDesconto(produto.preco, desconto),
    }
));

for (produto of produtosComDesconto) {
    ulListaProdutos.innerHTML += `
        <li>
            <h3>Nome do produto: ${produto.nome}</h3>
            <h3>Preço atual: ${produto.preco}</h3>
            <h3>Preço com desconto: ${produto.precoComDesconto}</h3>
        </li>
    `;
}
// console.log(produtosComDesconto);