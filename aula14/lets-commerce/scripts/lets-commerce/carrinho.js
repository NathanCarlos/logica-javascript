let produtosCarrinho = [];


const adicionaProdutoCarrinho = (id) => {
    const produto = produtos.find(buscaProdutoPorId(id));
    produtosCarrinho.push(produto);
    exibeMensagemSucesso('Produto adicionado ao carrinho!');
    atualizaListagemCarrinho();
}

const reduzProdutosCarrinho = (acc, produto) => {
    const indiceProdutoAcc = acc.findIndex(buscaProdutoCarrinhoPorId(produto.id));
    if (indiceProdutoAcc === -1) {
        acc.push({
            ...produto,
            quantidade: 1
        });
    }
    if (indiceProdutoAcc > -1) {
        acc[indiceProdutoAcc].quantidade++;
    }
    return acc;
}

const atualizaListagemCarrinho = () => {
    let cards = '';
    const produtosUnificados = produtosCarrinho.reduce(reduzProdutosCarrinho, []);
    for (produto of produtosUnificados) {
        cards += `
        <div class="card">
        <img width="250px" height="250px"
            src="${produto.imagem}">
        <div class="descricao-card">
            <p><b>${produto.descricao}</b></p>
            <p>Valor: <b>R$${produto.preco}</b></p>
            <div class="quantidade-produtos">
                <span>Quantidade:</span>
                <span class="material-icons adicao" onclick="adicionaQuantidadeProduto(${produto.id})">
                    add
                </span>
                <span><b>${produto.quantidade}</b></span>
                <span class="material-icons remocao" onclick="removeQuantidadeProduto(${produto.id})">
                    remove
                </span>
            </div>
        </div>
        <div class="acoes">
            <span class="material-icons acao" onclick="removeProdutoCarrinho(${produto.id})">
                delete
            </span>
            </div>
        </div>
        `;
    }
    if (produtosCarrinho.length === 0) {
        setaVisualizacaoProdutosModal(`<h3>Você não tem produtos no carrinho :(</h3>`);
    } else {
        setaVisualizacaoProdutosModal(cards);
    }
    atualizaTotal();
}

const atualizaTotal = () => {
    const totalCarrinho = produtosCarrinho
    .reduce((acc, produto) => acc + produto.preco, 0);
    setaTotalCarrinho(`Total: R$: ${totalCarrinho}`);
}

const buscaProdutoCarrinhoPorId = id => produto => produto.id === id;

const removeProdutoCarrinho = (id) => {
    produtosCarrinho = produtosCarrinho.reduce((acc, produto) => {
        if (produto.id !== id) acc.push(produto);
        return acc;
    }, []);
    atualizaListagemCarrinho();
}


const removeQuantidadeProduto = (id) => {
    const indiceProduto = produtosCarrinho.findIndex(buscaProdutoCarrinhoPorId(id));
    produtosCarrinho.splice(indiceProduto, 1);
    atualizaListagemCarrinho();
}

const adicionaQuantidadeProduto = (id) => {
    const produto = produtosCarrinho.find(buscaProdutoCarrinhoPorId(id));
    produtosCarrinho.push(produto);
    atualizaListagemCarrinho();
}

const finalizaPedido = () => {
    produtosCarrinho.splice(0);
    exibeMensagemSucesso('Pedido finalizado com sucesso!');
    fecharModal('modal');
}