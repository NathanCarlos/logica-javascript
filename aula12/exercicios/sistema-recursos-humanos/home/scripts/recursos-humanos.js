// Seção de declaração de variáveis e constantes do sistema.
const colaboradores = [];
let proximoId = 1;

// Seção de declaração de listeners
inputBusca.addEventListener('keyup', (event) => {
    const valor = event.target.value;
    const tipoBusca = retornaTipoBusca();
    const listaColaboradores = colaboradores.filter(
        tipoBusca === 'cargo' ? 
        buscaPorCargo(valor) :
        tipoBusca === 'nome' ?
        buscaPorNome(valor) :
        buscaPorId(parseInt(valor))
    );
    atualizaListagem(listaColaboradores);
});
// Seção de declaração de buscas
const buscaPorId = id => colaborador => colaborador.id === id;
const buscaPorNome = nome => colaborador => colaborador.nome.toUpperCase().search(nome.toUpperCase()) > -1;
const buscaPorCargo = cargo => colaborador => colaborador.cargo.toUpperCase().search(cargo.toUpperCase()) > -1;

// Fim da seçaõ de declaração de buscas

const limpaCampos = () => {
    setaNome('');
    setaIdade('');
    setaCargo('');
    setaSalario('');
    setaDataAdmissao('');
}

const adicionarColaborador = () => {
    const colaborador = {
        id: proximoId,
        nome: retornaNome(),
        idade: retornaIdade(),
        cargo: retornaCargo(),
        salario: retornaSalario(),
        dataAdmissao: retornaDataAdmissao()
    };
    colaboradores.push(colaborador);
    proximoId++;
    limpaCampos();
    atualizaListagem();
}

btnSalvar.onclick = adicionarColaborador;

const atualizaListagem = (listaFiltrada) => {
    let cards = '';
    const listaColaboradores = listaFiltrada && listaFiltrada.length > 0 ? listaFiltrada : colaboradores;
    for (colaborador of listaColaboradores) {
        cards += `
        <div class="card">
            <div class="descricao-card">
                <p>Nome: <b>${colaborador.nome}</b></p>
                <p>Idade: <b>${colaborador.idade}</b></p>
                <p>Cargo: <b>${colaborador.cargo}</b></p>
                <p>Salário: <b>${colaborador.salario}</b></p>
                <p>Data de Admissão: <b>${colaborador.dataAdmissao}</b></p>
            </div>
            <div class="acoes">
                <span class="material-icons acao" onclick="removerColaborador(${colaborador.id})">
                    delete
                </span>
                <span class="material-icons acao" onclick="carregaDadosColaborador(${colaborador.id})">
                    edit
                </span>
            </div>
        </div>
        `;
    }

    setaDadosDivVisualizacao(cards);
    atualizaIndicadores(listaColaboradores);
}

const removerColaborador = (id) => {
    const indiceColaborador = colaboradores.findIndex(buscaPorId(id));
    colaboradores.splice(indiceColaborador, 1);
    atualizaListagem();
}

const atualizaIndicadores = (listaColaboradores) => {
    let h3Indicadores = '';
    let somaSalarios = 0;
    let somaIdades = 0;
    for (colaborador of listaColaboradores) {
        somaSalarios += colaborador.salario;
        somaIdades += colaborador.idade;
    }
    const formataTituloValor = (titulo, valor) => {
        return `<h3>${titulo}: ${valor}</h3>`;
    }
    const quantidadeColaboradores = listaColaboradores.length;
    h3Indicadores += formataTituloValor('Total de colaboradores', quantidadeColaboradores);
    h3Indicadores += formataTituloValor('Custo mensal', somaSalarios);
    h3Indicadores += formataTituloValor('Média das idades',
    calcular(dividir, somaIdades, quantidadeColaboradores).toFixed(2));
    h3Indicadores += formataTituloValor('Média dos salários',
    calcular(dividir, somaSalarios, quantidadeColaboradores).toFixed(2));

    setaDadosDivIndicadores(h3Indicadores);
}

const editarDados = (id) => {
    const indiceColaborador = colaboradores.findIndex(buscaPorId(id));
    colaboradores[indiceColaborador] = {
        id,
        nome: retornaNome(),
        idade: retornaIdade(),
        cargo: retornaCargo(),
        salario: retornaSalario(),
        dataAdmissao: retornaDataAdmissao()
    }
    limpaCampos();
    atualizaListagem();
    btnSalvar.onclick = adicionarColaborador;
}

const carregaDadosColaborador = (id) => {
    const colaborador = colaboradores.find(buscaPorId(id));
    setaNome(colaborador.nome);
    setaIdade(colaborador.idade);
    setaCargo(colaborador.cargo);
    setaSalario(colaborador.salario);
    setaDataAdmissao(colaborador.dataAdmissao);

    btnSalvar.onclick = () => editarDados(id);
}
