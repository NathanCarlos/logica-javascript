const ulListaUsuarios = document.getElementById('listaUsuarios');

const usuarios = [
    {
        id: 1,
        nome: 'Nathan',
        idade: 28,
        email: 'nathan@gmail.com',
        senha: '1234'
    },
    {
        id: 2,
        nome: 'Alan',
        idade: 30,
        email: 'alan@gmail.com',
        senha: '4321'
    },
    {
        id: 3,
        nome: 'Alberto',
        idade: 35,
        email: 'alberto@gmail.com',
        senha: '7263'
    },
    {
        id: 4,
        nome: 'Jeferson',
        idade: 25,
        email: 'jeferson@gmail.com',
        senha: '5242'
    },
];

const listarUsuarios = () => {
    let listaLi = '';
    usuarios.forEach((usuario, indice) => {
        listaLi += `
        <li>Nome do usuário: ${usuario.nome}
        Índice: ${indice}
        </li>
        `;
    });
    ulListaUsuarios.innerHTML = listaLi;
}

listarUsuarios();