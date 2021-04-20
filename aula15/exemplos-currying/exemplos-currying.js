// const criarExibirMensagem = funcaoExibeTexto => texto => funcaoExibeTexto(texto);

// const exibeMensagemSucesso = criarExibirMensagem(alert);

// criarExibirMensagem(alert)('Teste');
// exibeMensagemSucesso('Teste 2');
// // const somar = (n1, n2) => n1 + n2;

// const somar = n1 => n2 => n1 + n2;
// const multiplicar = n1 => n2 => n1 * n2;
// const incrementaUm = somar(1);
// const incrementaDois = somar(2);
// const dobroNumero = multiplicar(2);

// const resultadoSoma = somar(10)(20);
// const incrementaSoma1 = incrementaUm(resultadoSoma);
// const numeroAoQuadrado = multiplicar(10)(10);
// console.log('Resultado da soma', resultadoSoma);
// console.log('Resultado soma + 1', incrementaSoma1);
// console.log('Resultado soma + 2', incrementaDois(resultadoSoma));
// console.log('Resultado da multiplicação', multiplicar(10)(20));
// console.log('Resultado do dobro de 100', dobroNumero(100));

// const produtos = [
//     {
//         id: 1,
//         nome: 'Arroz',
//         preco: 20
//     },
//     {
//         id: 2,
//         nome: 'Feijão',
//         preco: 10
//     },
//     {
//         id: 3,
//         nome: 'Milho',
//         preco: 5
//     }
// ];

// const buscaPorId = id => produto => produto.id === id;

// const produtosFiltrados = produtos.filter(buscaPorId(1));

// const produtosFiltrados = [];

// for (produto of produtos) {
//     if(buscaPorId(1)(produto)) {
//         produtosFiltrados.push(produto);
//     }
// }

// console.log(produtosFiltrados);

// const aplicaDesconto = porcentagem => numero => numero - (numero * (porcentagem / 100));

// const aplica10Desconto = aplicaDesconto(10);
// const aplica20Desconto = aplicaDesconto(20);


// console.log(aplica10Desconto(100));
// console.log(aplica20Desconto(100));
// console.log(aplicaDesconto(10)(100));

// const numeros = [
//     {
//         numero1: 10,
//         numero2: 20,
//     },
//     {
//         numero1: 10,
//         numero2: 20,
//     },{
//         numero1: 10,
//         numero2: 20,
//     }
// ];


// const somar = (operacao) => (n1, n2) => eval(`${n1} ${operacao} ${n2}`);

// console.log(somar('+')(10, 20));
