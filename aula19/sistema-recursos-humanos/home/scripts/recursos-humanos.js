const colaboradores = [];
let proximoId = 1;

const adicionaColaborador = () => {
    const colaborador = retornaColaborador();
    if (!camposValidos(colaborador)) return;
    colaboradores.push(colaborador);
    limpaCampos();
    exibeMensagemSucesso('Colaborador Adicionado Com Sucesso!');
    atualizaListagemColaboradores();
    proximoId++;
}

const removeColaborador = (id) => {
    const colaboradorIndice = colaboradores.findIndex(buscaPorId(id));

    if(colaboradorIndice > -1) {
        colaboradores.splice(colaboradorIndice, 1);
    }

    atualizaListagemColaboradores();
}

const carregaDadosParaEdicao = (id) => {
    const colaborador = colaboradores.find(buscaPorId(id));
    setaValorInputNome(colaborador.nome);
    setaValorInputEmail(colaborador.email);
    setaValorInputIdade(colaborador.idade);
    setaValorInputCargo(colaborador.cargo);
    setaValorInputSalario(colaborador.salario);
    setaValorInputDataAdmissao(colaborador.dataAdmissao);
    setaValorInputDataDemissao(colaborador.dataDemissao || '');

    btnSalvar.onclick = () => editaDados(id);

}

const editaDados = (id) => {
    const colaboradorIndice = colaboradores.findIndex(buscaPorId(id));

    if (colaboradorIndice > -1) {
        colaboradores[colaboradorIndice] = {
            id,
            nome: retornaValorInputNome(),
            email: retornaValorInputEmail(),
            idade: retornaValorInputIdade(),
            cargo: retornaValorInputCargo(),
            salario: retornaValorInputSalario(),
            dataAdmissao: retornaValorInputDataAdmissao(),
            dataDemissao: retornaValorInputDataDemissao()
        }
    }

    atualizaListagemColaboradores();
    exibeMensagemSucesso('Colaborador Editado com Sucesso!');
    limpaCampos();
    btnSalvar.onclick = adicionaColaborador;
}

inputBusca.addEventListener('keyup', (event) => {
    const valor = event.target.value;
    const tipoBusca = retornaValorSelectTipoBusca();
    if (tipoBusca === 'dataAdmissao' && moment(valor)) {
        const listaColaboradores = colaboradores.filter(buscaPorDataAdmissaoMaiorPeriodo(valor));
        atualizaListagemColaboradores(listaColaboradores);
    }
    else if (tipoBusca !== 'dataAdmissao') {
        const listaColaboradores = colaboradores.filter(
            tipoBusca === 'id' ? buscaPorId(parseInt(valor)) :
            tipoBusca === 'nome' ? buscaPorNome(valor) :
            buscaPorCargo(valor)
        );
        atualizaListagemColaboradores(listaColaboradores);
    }
});

const atualizaListagemColaboradores = (listaColaboradores) => {
    const colaboradoresLista = listaColaboradores && listaColaboradores.length > 0 ? listaColaboradores : colaboradores;
    const cards = colaboradoresLista.map((colaborador) => 
        `
        <div class="card">
            <div class="descricao-card">
                <p>Nome: <b>${colaborador.nome}</b></p>
                <p>Idade: <b>${colaborador.idade}</b></p>
                <p>Email: <b>${colaborador.email}</b></p>
                <p>Cargo: <b>${colaborador.cargo}</b></p>
                <p>Salário: <b>R$${colaborador.salario}</b></p>
                <p>Data de Admissão: <b>${formataData(colaborador.dataAdmissao)}</b></p>
                <p>Data de Demissão: <b>${
                    colaborador.dataDemissao ?
                    formataData(colaborador.dataDemissao) : 'Não tem!'}</b></p>
            </div>
            <div class="acoes">
                <span class="material-icons acao" onclick="removeColaborador(${colaborador.id})">
                    delete
                </span>
                <span class="material-icons acao" onclick="carregaDadosParaEdicao(${colaborador.id})">
                    edit
                </span>
            </div>
        </div>
        `).join('');
    setaValorDivVisualizacao(cards);
}

btnSalvar.onclick = adicionaColaborador;

const retornaColaborador = () => {
    return {
        id: proximoId,
        nome: retornaValorInputNome(),
        email: retornaValorInputEmail(),
        idade: retornaValorInputIdade(),
        cargo: retornaValorInputCargo(),
        salario: retornaValorInputSalario(),
        dataAdmissao: retornaValorInputDataAdmissao(),
        dataDemissao: retornaValorInputDataDemissao()
    }
}

const camposValidos = (colaborador) => {
    if (!colaborador.nome || !colaborador.email || !colaborador.idade || !colaborador.cargo || !colaborador.salario || !colaborador.dataAdmissao) {
        exibeMensagemErro('Preencha os campos obrigatórios!');
        return false;
    }
    if (padraoEmail.test(colaborador.email)) {
        escondePEmailInvalido();
    }
    else {
        exibePEmailInvalido();
        return false;
    }
    if(!padraoInvalidoNome.test(colaborador.nome)) {
        escondePNomeInvalido();
    }
    else {
        exibePNomeInvalido();
        return false;
    }
    return true;
}

const limpaCampos = () => {
    setaValorInputNome('');
    setaValorInputEmail('');
    setaValorInputIdade('');
    setaValorInputCargo('');
    setaValorInputSalario('');
    setaValorInputDataAdmissao('');
    setaValorInputDataDemissao('');
}

const buscaPorId = id => colaborador => colaborador.id === id;
const buscaPorNome = nome => colaborador => colaborador.nome.toUpperCase().search(nome.toUpperCase()) > -1;
const buscaPorCargo = cargo => colaborador => colaborador.cargo.toUpperCase().search(cargo.toUpperCase()) > -1;
const buscaPorDataAdmissaoMaiorPeriodo = data => colaborador => moment(colaborador.dataAdmissao).isAfter(moment(data));