const divVisualizacao = document.getElementById('visualizacao');
const divIndicadores = document.getElementById('indicadores');
const alunos = [];
let proximoId = 1;

const adicionaAluno = (nomeAluno,
    idade,
    valorMensalidade,
    professorResponsavel,
    temAcesso) => {

    const aluno = {
        id: proximoId,
        nome: nomeAluno,
        idade,
        exerciciosAdpatados: idade > 60 ? true : false,
        valorMensalidade,
        professorResponsavel,
        temAcesso,
    };

    alunos.push(aluno);
    proximoId++;
    atualizaListaAlunos();
}

const atualizaListaAlunos = () => {
    let cards = '';
    for (aluno of alunos) {
        cards += `
        <div class="card">
            <div class="descricao-card">
                <p>Nome: <b>${aluno.nome}</b></p>
                <p>Idade: <b>${aluno.idade}</b></p>
                <p>Exercícios Adaptados: <b>${aluno.exerciciosAdpatados ? 'Sim' : 'Não'}</b></p>
                <p>Professor Responsável: <b>${aluno.professorResponsavel}</b></p>
                <p>Tem acesso: <span class="${aluno.temAcesso ? 'sim' : 'nao'}" style="cursor:pointer" onclick="atualizaStatusAcesso(${aluno.id})"><b>${aluno.temAcesso ? 'Sim' : 'Não'}</b></span></p>
                <p>Valor mensalidade: <b>R$${aluno.valorMensalidade}</b></p>
            </div>
            <div class="acoes">
                <span class="material-icons acao" onclick="removeAluno(${aluno.id})">
                    delete
                </span>
            </div>
        </div>
        `;
    }

    divVisualizacao.innerHTML = cards;
    atualizaIndicadores();
}

const atualizaIndicadores = () => {
    let h3Indicadores = '';
    let somaIdades = 0;
    let somaMensalidades = 0;
    const retornaH3Formatado = (titulo, valor) => {
        return `<h3>${titulo}: ${valor}</h3>`;
    }

    for (aluno of alunos) {
        somaIdades += aluno.idade;
        somaMensalidades += aluno.valorMensalidade;
    }

    h3Indicadores += retornaH3Formatado('Total de Alunos', alunos.length);
    h3Indicadores += retornaH3Formatado('Média idades',
    calcular(dividir, somaIdades, alunos.length));
    h3Indicadores += retornaH3Formatado('Total mensalidades', somaMensalidades);
    h3Indicadores += retornaH3Formatado('Média mensalidades',
    calcular(dividir, somaMensalidades, alunos.length));

    divIndicadores.innerHTML = h3Indicadores;
}

const buscaPorId = id => aluno => aluno.id === id;

const removeAluno = (id) => {
    const alunoIndice = alunos.findIndex(buscaPorId(id));
    alunos.splice(alunoIndice, 1);
    atualizaListaAlunos();
}

const atualizaStatusAcesso = (id) => {
    
    const alunoIndice = alunos.findIndex(buscaPorId(id));
    if (alunoIndice > -1) {
        const alunoTemAcesso = alunos[alunoIndice].temAcesso;
        alunos[alunoIndice].temAcesso = !alunoTemAcesso;
    }

    atualizaListaAlunos();
}

const limpaCampos = (nomeAluno,
    idade,
    valorMensalidade,
    professorResponsavel,
    temAcesso) => {
    nomeAluno.value = '';
    idade.value = '';
    valorMensalidade.value = '';
    professorResponsavel.value = '';
    temAcesso.value = '';
}
