const soma = n1 => n2 => n1 + n2;
const subtracao = n1 => n2 => n1 - n2;
const divisao = n1 => n2 => n1 / n2;
const multiplicacao = n1 => n2 => n1 * n2;

const incrementaUm = soma(1);

const dobroNumero = multiplicacao(2);

// const aplicaDesconto = (numero, porcentagemDesconto) => numero - (numero * (porcentagemDesconto / 100));

const aplicaDesconto = porcentagem => numero => numero - (numero * (porcentagem / 100));

const formataValor = numero => parseFloat(numero) ? numero.toFixed(2) : 0;