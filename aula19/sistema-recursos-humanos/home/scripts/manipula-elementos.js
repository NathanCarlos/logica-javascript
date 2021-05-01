// Area Inputs
const inputBusca = document.getElementById('inputBusca');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputIdade = document.getElementById('idade');
const inputCargo = document.getElementById('cargo');
const inputSalario = document.getElementById('salario');
const inputDataAdmissao = document.getElementById('dataAdmissao');
const inputDataDemissao = document.getElementById('dataDemissao');

// Area botões
const btnSalvar = document.getElementById('btnSalvar');

// Area Selects

const selectTipoBusca = document.getElementById('tipoBusca');

// Area Mensagens Erro

const pNomeInvalido = document.getElementById('nomeInvalido');
const pEmailInvalido = document.getElementById('emailInvalido');

// Area Visualização

const divVisualizacao = document.getElementById('visualizacao');

// Getters Setters

const retornaValorInputBusca = () => inputBusca.value;
const retornaValorInputNome = () => inputNome.value;
const retornaValorInputEmail = () => inputEmail.value;
const retornaValorInputIdade = () => inputIdade.value;
const retornaValorInputCargo = () => inputCargo.value;
const retornaValorInputSalario = () => inputSalario.value;
const retornaValorInputDataAdmissao = () => inputDataAdmissao.value;
const retornaValorInputDataDemissao = () => inputDataDemissao.value;
const retornaValorSelectTipoBusca = () => selectTipoBusca.value;

const setaValorInputBusca = (valor) => inputBusca.value = valor;
const setaValorInputNome = (valor) => inputNome.value = valor;
const setaValorInputEmail = (valor) => inputEmail.value = valor;
const setaValorInputIdade = (valor) => inputIdade.value = valor;
const setaValorInputCargo = (valor) => inputCargo.value = valor;
const setaValorInputSalario = (valor) => inputSalario.value = valor;
const setaValorInputDataAdmissao = (valor) => inputDataAdmissao.value = valor;
const setaValorInputDataDemissao = (valor) => inputDataDemissao.value = valor;

// Altera Estado Validações

const escondePNomeInvalido = () => pNomeInvalido.style.display = 'none';
const escondePEmailInvalido = () => pEmailInvalido.style.display = 'none';

escondePNomeInvalido();
escondePEmailInvalido();

const exibePNomeInvalido = () => pNomeInvalido.style.display = 'block';
const exibePEmailInvalido = () => pEmailInvalido.style.display = 'block';

// Setters Visualização
const setaValorDivVisualizacao = (valor) => divVisualizacao.innerHTML = valor;