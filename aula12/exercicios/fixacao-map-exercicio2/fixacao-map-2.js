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

const buscaPorPrecoMinimoMaximo = (precoMinimo, precoMaximo) => produto => produto.preco >= precoMinimo && produto.preco <= precoMaximo;

const realizaBusca = (precoMinimo, precoMaximo) => {
    const produtosFiltrados = produtos.filter(buscaPorPrecoMinimoMaximo(precoMinimo, precoMaximo));
    atualizaListagem(produtosFiltrados);
}

const atualizaListagem = (listaProdutos) => {
    ulListaProdutos.innerHTML = '';
    listaProdutos.forEach((produto) => {
        ulListaProdutos.innerHTML += `
            <li>
                <h3>Nome: ${produto.nome}</h3>
                <h3>Preço: ${produto.preco}</h3>
            </li>
        `;
    });
}