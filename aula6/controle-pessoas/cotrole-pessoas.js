const pessoas = [];
const siglaMasculino = 'M';
const siglaFeminino = 'F';

// Arrow Functions
const adicionaPessoas = (idade, peso, sexo) => {
    const pessoa = {
        idade: parseInt(idade),
        peso: parseFloat(peso),
        sexo
    };
    pessoas.push(pessoa);
    atualizaLista();
}

const atualizaContadores = () => {
    const totalHomens = document.getElementById('totalHomens');
    const totalMulheres = document.getElementById('totalMulheres');
    const mediaIdadeHomens = document.getElementById('mediaIdadeHomens');
    const mediaIdadeMulheres = document.getElementById('mediaIdadeMulheres');

    totalHomens.innerText = `Total de homens: ${totalPessoasSexo(siglaMasculino)}`;
    totalMulheres.innerText = `Total de mulheres: ${totalPessoasSexo(siglaFeminino)}`;
    mediaIdadeHomens.innerText = `Média da idade dos homens: ${mediaIdadePorSexo(siglaMasculino)}`;
    mediaIdadeMulheres.innerText = `Média da idade das mulheres: ${mediaIdadePorSexo(siglaFeminino)}`;

}

const totalPessoasSexo = (sexo) => {
    const pessoasSexo = pessoas.filter((pessoa) => pessoa.sexo === sexo);
    return pessoasSexo.length;
}

const mediaIdadePorSexo = (sexo) => {
    let somaIdades = 0;
    const pessoasPorSexo = pessoas.filter((pessoa) => pessoa.sexo === sexo);
    for (pessoa of pessoasPorSexo) {
        somaIdades += pessoa.idade;
    }
    if (pessoasPorSexo.length > 0) {
        return somaIdades / pessoasPorSexo.length;
    }
    return 0;
}

const atualizaLista = () => {
    const listaUl = document.getElementById('listaPessoas');
    let pessoasLi = '';

    for (pessoa of pessoas) {
        pessoasLi += `<li>
        Idade: ${pessoa.idade},
        Sexo: ${pessoa.sexo === 'M'? 'Masculino' : 'Feminino'},
        Peso: ${pessoa.peso}</li>`;
    }

    listaUl.innerHTML = pessoasLi;
    atualizaContadores();
}