const divVisualizacaoProdutos = document.getElementById('visualizacaoProdutos');
const divVisualizacaoModal = document.getElementById('visualizacaoModal');
const inputBusca = document.getElementById('inputBusca');
const h3TotalCarrinho = document.getElementById('totalCarrinho');

const setaVisualizacaoProdutos = (valor) => {
    divVisualizacaoProdutos.innerHTML = valor;
};

const setaVisualizacaoProdutosModal = (valor) => {
    divVisualizacaoModal.innerHTML = valor;
};

const setaTotalCarrinho = (valor) => {
    h3TotalCarrinho.innerText = valor;
}
