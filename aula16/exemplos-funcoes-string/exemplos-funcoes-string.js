const nome = 'Nathan Carlos';

console.log(nome.indexOf('Carlos'));
console.log(nome.includes('Carlos'));


const data = '2021-04-23';

// const dataSplited = [
//     '2021',
//     '04',
//     '23'
// ]
const dataSplited = data.split('-');

console.log(dataSplited);

const dataFormatada = `${dataSplited[2]}/${dataSplited[1]}/${dataSplited[0]}`;

console.log('data formatada', dataFormatada);

console.log(nome.split(''));

const telefone = '5511976849383';

const formataNumeroTelefone = (numeroTelefone) => {
    const nt = numeroTelefone.split('');
    if (nt.length === 11) return `(${nt[0]}${nt[1]}) ${nt[2]}${nt[3]}${nt[4]}${nt[5]}${nt[5]}-${nt[6]}${nt[7]}${nt[8]}${nt[9]}`;

    if (nt.length === 13) return `+${nt[0]}${nt[1]} (${nt[2]}${nt[3]})${nt[4]}${nt[5]}${nt[6]}${nt[7]}-${nt[8]}${nt[9]}${nt[10]}${nt[11]}`;
}

console.log(formataNumeroTelefone(telefone));

console.log(nome.substring(0, 3));

console.log(nome.replace('Nathan', ''));
const formatoBarraData = '/';
console.log(dataFormatada.replace(/-/g, formatoBarraData));
console.log(dataFormatada.replaceAll(formatoBarraData, '-'));
// console.log(nome.split('a'));

const email = 'Teste@gmail.com';
console.log(email.toUpperCase());
console.log(email.toLowerCase());

const nomeUsuario = '   Augusto Matheus';

console.log(nomeUsuario.trim());
// console.log(nomeUsuario.trimStart());
// console.log(nomeUsuario.trimEnd());

const sobreNome = 'Teste Novo';

console.log(nome.concat(' ', sobreNome));


