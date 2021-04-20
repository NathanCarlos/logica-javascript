const ulVisualizacaoProdutos = document.getElementById('visualizacaoProdutos');
const h1TotalProdutos = document.getElementById('totalProdutos');
const h1MediaPrecos = document.getElementById('mediaProdutos');


const setaVisualizacaoProdutos = (texto) => {
    ulVisualizacaoProdutos.innerHTML = texto;
};

const setaH1TotalProdutos = (texto) => {
    h1TotalProdutos.innerText = texto;
}

const setaH1MediaPrecos = (texto) => {
    h1MediaPrecos.innerText = texto;
}