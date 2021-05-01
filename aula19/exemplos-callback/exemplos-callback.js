
const soma = (a, b) => a + b;
const multiplicacao = (a, b) => a * b;

const exibeMensagem = (texto) => {
    alert(texto);
}

const exibeSoma = (a, b, callBack) => {
    const resultado = soma(a, b);
    callBack(resultado);
}

exibeSoma(10, 20, exibeMensagem);
exibeSoma(20, 30, console.log);

// const clientes = new Promise(() => {
//     return [
//         { id: 1, nome: 'Teste'}
//     ];
// });

// await clientes;

console.log('teste');

exibeMensagem('teste');