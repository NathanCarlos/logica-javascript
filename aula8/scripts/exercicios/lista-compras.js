const listaCompras = [];
const inputNomeDoItem = document.getElementById('nomeDoItem');
const ulListaCompras = document.getElementById('listaCompras');
const btnBuscaItem = document.getElementById('buscaItem');
// const btnAdicionaItem = document.getElementById('btnAdicionaItem');

// btnAdicionaItem.addEventListener('click', (event) => {
//     console.log(inputNomeDoItem.value);
// });


// Função impura porque depende do listaCompras que é externo a função
const ordenarLista = () => {
    listaCompras.sort();
    atualizaListaCompras();
}

const limparLista = () => {
    listaCompras.splice(0);
    atualizaListaCompras();
}

const buscarItem = (nomeItem) => {
    const listaComprasBusca = listaCompras.filter((item) => item === nomeItem);
    atualizaListaCompras(listaComprasBusca);
}

const resetarBusca = () => {
    btnBuscaItem.value = '';
    atualizaListaCompras();
}

const removeItem = (nomeItem) => {
    const indiceItem = listaCompras.indexOf(nomeItem);
    if (indiceItem > -1) {
        listaCompras.splice(indiceItem, 1);
        atualizaListaCompras();
    } else {
        alert('Nome não encontrado na lista!');
        inputNomeDoItem.value = '';
    }
}
