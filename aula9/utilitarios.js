// Funções alta ordem elas podem receber outras funções por parâmetros

const somar = (n1, n2) => n1 + n2; 
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 === 0 ? 0 : n1 / n2;

// Função de alta ordem que recebe função por parâmetro.
const calcular = (operacao, n1, n2) => operacao(n1, n2);

// const exibeTexto = (funcaoExibirTexto, texto) => funcaoExibirTexto(texto);

// function criarExibirMensagem(funcaoExibeTexto) {
//     return function (texto) {
//         return funcaoExibeTexto(texto);
//     }
// }

// const criarExibirMensagem = (funcaoExibeTexto) => {
//     return texto => funcaoExibeTexto(texto);
// }

// Função de alta ordem que recebe e retorna função
const criarExibirMensagem = funcaoExibeTexto => texto => funcaoExibeTexto(texto);

// const exibeMensagemSucesso = criarExibirMensagem(alert);
// const exibeMensagemErro = criarExibirMensagem(console.log);

// exibeMensagemSucesso('Site aberto com sucesso!');
// exibeMensagemSucesso('Novo texto');