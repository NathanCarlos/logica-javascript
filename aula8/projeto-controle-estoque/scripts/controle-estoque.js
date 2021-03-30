const produtos = [];
const descricaoProduto = document.getElementById('descricaoProduto');
const quantidadeProduto = document.getElementById('quantidadeProduto');
const categoriaProduto = document.getElementById('categoriaProduto');
const linkImagemProduto = document.getElementById('linkImagemProduto');
const inputBusca = document.getElementById('inputBusca');
const filtroBusca = document.getElementById('filtroBusca');
let proximoId = 1;

inputBusca.addEventListener('keyup', (event) => {
    const valor = event.target.value;
    const listaProdutos = buscaProdutosPorFiltro(filtroBusca.value, valor);
    atualizaListaProdutos(listaProdutos);
});


// inputBusca.addEventListener('keydown', (event) => {
//     if (event.keyCode == 13) {
//         const descricao = event.target.value;
//         const listaProdutos = buscaProdutosPorFiltro(descricao);
//         atualizaListaProdutos(listaProdutos);
//         event.preventDefault();
//         return false;
//     }
// });

const visualizacaoProdutos = document.getElementById('visualizacaoProdutos');

const adicionaProduto = (descricao, quantidade, categoria, linkImagem) => {
    const produto = {
        id: proximoId,
        descricao: descricao.value, // descricao: "Notebook"
        quantidade: parseInt(quantidade.value),
        categoria: categoria.value,
        linkImagem: linkImagem.value
    };
    produtos.push(produto);
    console.log(produtos);
    atualizaListaProdutos();
    limpaCampos();
    proximoId++;
}

const limpaCampos = () => {
    descricaoProduto.value = '';
    quantidadeProduto.value = '';
    categoriaProduto.value = '';
    linkImagemProduto.value = '';
}

// Funções de alta ordem podem retornar/receber funções;
const buscaPorDescricao = (descricao) => {
    return (produto) => produto.descricao.toUpperCase().search(descricao) > -1;
};

// Função de alta ordem que retorna outra função
const buscaPorId = (id) => {
    return (produto) => produto.id === id;
}

const buscaProdutosPorFiltro = (tipoFiltro, valor) => {
    // let listaProdutosNovos = [];
    // if(tipoFiltro === 'id') {
    //     listaProdutosNovos = produtos.filter((produto) => produto.id === id);
    // } else {
    //     listaProdutosNovos = produtos.filter(produto.descricao.toUpperCase().search(descricao) > -1);
    // }
    // return listaProdutosNovos;
    const listaProdutosEncontrandos = produtos.filter(
    tipoFiltro === 'id' ?
    buscaPorId(parseInt(valor)) :
    buscaPorDescricao(valor.toUpperCase()));
    return listaProdutosEncontrandos;
}

const atualizaListaProdutos = (listaProdutos) => {
    let cardsProdutos = '';
    const produtosAListar = listaProdutos ? listaProdutos : produtos;
    for (produto of produtosAListar) {
        cardsProdutos += `
        <div class="card">
            <img width="250px" height="250px"
                src="${produto.linkImagem}">
            <div class="descricao-card">
                <p><b>${produto.descricao}</b></p>
                <p>Quantidade em estoque: <b>${produto.quantidade}</b></p>
                <p>Categoria: <b>${produto.categoria}</b></p>
            </div>
            <div class="acoes">
                <span class="material-icons acao" onclick="removeProduto(${produto.id})">
                    delete
                </span>
            </div>
        </div>
        `;
    }
    visualizacaoProdutos.innerHTML = cardsProdutos;
}

const removeProduto = (id) => {
    const indiceProduto = produtos.findIndex((produto) => produto.id === parseInt(id));
    produtos.splice(indiceProduto, 1);
    atualizaListaProdutos();
};

// const geraIdRandomico = () => {
//     const min = 1;
//     const max = 1000000;

//     return Math.floor(Math.random() * (max - min) + min);
// }