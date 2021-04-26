const pNomeInvalido = document.getElementById('nomeInvalido');
const pEmailInvalido = document.getElementById('emailInvalido');
const inputNome = document.getElementById('nome');
const inputCpf = document.getElementById('cpf');

const escondeMensagemErroNome = () => {
    pNomeInvalido.style.display = 'none';
}
const escondeMensagemErroEmail = () => {
    pEmailInvalido.style.display = 'none';
}

const exibeMensagemErroNome = () => {
    pNomeInvalido.style.display = 'block';
}
const exibeMensagemErroEmail = () => {
    pEmailInvalido.style.display = 'block';
}

escondeMensagemErroNome();
escondeMensagemErroEmail();

const padraoNomeSemNumero = new RegExp('[0-9|*|@|!|&|-]', 'g');
const padraoEmail = new RegExp('[@|.]', 'g');
const padraoEmailInvalido = new RegExp('[*|!|=]', 'g');
const padraoCaracterEspecialSenha = new RegExp('[@|.|!|*|-|~]');

const enviar = (nome, email) => {
    if(!validaEmail(email) || validaPadraoEmailInvalido(email)) exibeMensagemErroEmail();
    else escondeMensagemErroEmail();

    if (nomeInvalido(nome)) exibeMensagemErroNome();
    else escondeMensagemErroNome();

}

const validaEmail = (email) => {
    return padraoEmail.test(email);
}

const validaPadraoEmailInvalido = (email) => {
    return padraoEmailInvalido.test(email);
}

const nomeInvalido = (nome) => {
    return padraoNomeSemNumero.test(nome);
}

const formataCpf = (cpf) => {
    const cpfSpt = cpf.split('');
    if (cpf.length === 3) {
        return `${cpfSpt[0]}${cpfSpt[1]}${cpfSpt[2]}.`;
    }
    if (cpf.length === 7) {
        return `${cpfSpt[0]}${cpfSpt[1]}${cpfSpt[2]}.${cpfSpt[4]}${cpfSpt[5]}${cpfSpt[6]}.`;
    }
    return cpf;
    // return `${cpfSpt[0]}${cpfSpt[1]}${cpfSpt[2]}.${cpfSpt[3]}${cpfSpt[4]}${cpfSpt[5]}.${cpfSpt[6]}${cpfSpt[7]}${cpfSpt[8]}-${cpfSpt[9]}${cpfSpt[10]}`;
}

inputNome.addEventListener('keyup', (event) => {
    const nome = event.target.value;
    console.log(nome);
    if (nomeInvalido(nome)) {
        inputNome.value = nome.replace(padraoNomeSemNumero, '');
    };
});

inputCpf.addEventListener('keyup', (event) => {
    const cpf = event.target.value;
    inputCpf.value = formataCpf(cpf);
});