const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 === 0 ? 0 : n1 / n2;
const calcular = (operacao, n1, n2) => operacao(n1, n2);

const criarExibirMensagem = funcaoExibeTexto => texto => funcaoExibeTexto(texto);
