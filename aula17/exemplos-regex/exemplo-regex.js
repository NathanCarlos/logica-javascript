// const nome = 'Nathan Carlos';

// const padraoNome = new RegExp('^nathan', 'i');
// const padraoNomeFinal = new RegExp('carlos$', 'i');

// console.log(nome.toUpperCase() === 'nathan'.toUpperCase());
// console.log(padraoNome.test(nome));
// console.log(padraoNomeFinal.test(nome));

const padraoCoresAceitas = new RegExp('azul|verde', 'i');
const frase1 = 'Temos as cores de blusa azul';
const frase2 = 'Temos as cores de blusa verde';
const frase3 = 'Temos as cores de blusa vermelha';

console.log(padraoCoresAceitas.test(frase1));
console.log(padraoCoresAceitas.test(frase2));
console.log(padraoCoresAceitas.test(frase3));

// const cpf = prompt('Digite o seu cpf com pontos');
const email = prompt('Digite o seu email');
// const padraoCpf = new RegExp('[-|.]', 'g');
const padraoEmailArroba = new RegExp('[@]', 'g');
const padraoEmailPonto = new RegExp('[.]', 'g');

// console.log('Está no padrão? ', padraoCpf.test(cpf), cpf);
console.log('Email válido? ', padraoEmail.test(email));
// console.log(cpf.replace(padraoCpf, ''));

const nome = prompt('Digite o seu nome');

const nomeTemNumero = new RegExp('[0-9]', 'g');

console.log(nomeTemNumero.test(nome), nome);
if (nomeTemNumero.test(nome)) {
    console.log(nome.replace(nomeTemNumero, ''));
}
else {
    console.log(nome);
}

