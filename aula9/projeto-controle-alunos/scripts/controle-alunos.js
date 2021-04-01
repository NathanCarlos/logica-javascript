// Declaração elementos html
const inputPrimeiraNota = document.getElementById('primeiraNota');
const inputSegundaNota = document.getElementById('segundaNota');
const divVisualizacao = document.getElementById('visualizacao');
const selectTipoBusca = document.getElementById('tipoBusca');
const inputBusca = document.getElementById('inputBusca');
// Declaração de variáveis
const exibeMensagemSucesso = criarExibirMensagem(alert);
const exibeMensagemErro = criarExibirMensagem(alert);
let proximoId = 1;
const mediaMinima = 5;
const alunos = [];

const adicionaAluno = (nomeAluno, primeiraNota, segundaNota, materia) => {
    if (!nomeAluno || !primeiraNota || !segundaNota || !materia) 
        return exibeMensagemErro('Todos os campos são obrigatórios!');

    const media = calcular(dividir, somar(primeiraNota, segundaNota), 2);
    const aluno = {
        id: proximoId,
        nomeAluno,
        primeiraNota,
        segundaNota,
        media,
        materia,
        aprovado: media >= mediaMinima ? true : false,
    };
    alunos.push(aluno);
    proximoId++;
    atualizaListaAlunos();
}

const atualizaListaAlunos = (listaAlunos) => {
    let cards = '';
    for (aluno of listaAlunos && listaAlunos.length > 0 ? listaAlunos : alunos) {
        const pAprovado = `
        <p>Aprovado: <b class="${aluno.aprovado ? 'aprovado' : 'reprovado'}">
        ${aluno.aprovado ? 'Sim' : 'Não'}
        </b></p>`;
        cards += `
        <div class="card">
            <div class="descricao-card">
                <p><b>${aluno.nomeAluno}</b></p>
                <p>Nota 1: <b>${aluno.primeiraNota}</b></p>
                <p>Nota 2: <b>${aluno.segundaNota}</b></p>
                <p>Matéria: <b>${aluno.materia}</b></p>
                <p>Média Aluno: <b>${aluno.media}</b></p>
                ${pAprovado}
            </div>
            <div class="acoes">
                <span class="material-icons acao" onclick="removeAluno(${aluno.id})">
                    delete
                </span>
            </div>
        </div>`
    }

    divVisualizacao.innerHTML = cards;
}

const removeAluno = (id) => {
    const indiceAluno = alunos.findIndex(buscaPorId(id));
    alunos.splice(indiceAluno, 1);
    atualizaListaAlunos();
}

const buscaPorId = id => aluno => aluno.id === id;
const buscaPorNome = nome => aluno => aluno.nomeAluno.toUpperCase().search(nome.toUpperCase()) > -1;
const buscaPorMateria = materia => aluno => aluno.materia === materia;

const validaRangeNota = (nota, inputEvento) => {
    if (!(nota > 0 && nota <= 10)) {
        inputEvento.value = '';
        return exibeMensagemErro('As notas precisam estar entre 0 e 10');
    }
}

const validaEventoPrimeiraNota = (event) => {
    const valor = parseFloat(event.target.value);
    validaRangeNota(valor, inputPrimeiraNota);
}

const validaEventoSegundaNota = (event) => {
    const valor = parseFloat(event.target.value);
    validaRangeNota(valor, inputSegundaNota);
}

inputPrimeiraNota.addEventListener('keyup', validaEventoPrimeiraNota);
inputSegundaNota.addEventListener('keyup', validaEventoSegundaNota);

inputBusca.addEventListener('keyup', (event) => {
    const valor = event.target.value;
    const listaAlunos = alunos.filter(
        selectTipoBusca.value === 'id' ? buscaPorId(parseInt(valor)) : 
        selectTipoBusca.value === 'nome' ? buscaPorNome(valor) : buscaPorMateria(valor))
    atualizaListaAlunos(listaAlunos);
});