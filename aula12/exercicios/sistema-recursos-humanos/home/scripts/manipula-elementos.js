// Seção de declaração de elementos
const inputNome = document.getElementById('nome');
const inputIdade = document.getElementById('idade');
const inputCargo = document.getElementById('cargo');
const inputSalario = document.getElementById('salario');
const inputDataAdmissao = document.getElementById('dataAdmissao');
const btnSalvar = document.getElementById('btnSalvar');
const divVisualizacao = document.getElementById('visualizacao');
const selectTipoBusca = document.getElementById('tipoBusca');
const inputBusca = document.getElementById('inputBusca');
const divIndicadores = document.getElementById('indicadores');

// Seção de funções
// Seção de retorno dos inputs(Getter)
const retornaNome = () => inputNome.value;
const retornaIdade = () => {
    const idade = parseInt(inputIdade.value);
    return idade ? idade : 0;
}
const retornaCargo = () => inputCargo.value;
const retornaSalario = () => {
    const salario = parseFloat(inputSalario.value);
    return salario ? salario : 0;
}
const retornaDataAdmissao = () => inputDataAdmissao.value;
const retornaTipoBusca = () => selectTipoBusca.value;

// Seção de setar dados;(Setters)
const setaNome = nome => inputNome.value = nome;
const setaIdade = idade => inputIdade.value = idade;
const setaCargo = cargo => inputCargo.value = cargo;
const setaSalario = salario => inputSalario.value = salario;
const setaDataAdmissao = dataAdmissao => inputDataAdmissao.value = dataAdmissao;
const setaDadosDivVisualizacao = cards => divVisualizacao.innerHTML = cards;
const setaDadosDivIndicadores = listaH3 => divIndicadores.innerHTML = listaH3;
