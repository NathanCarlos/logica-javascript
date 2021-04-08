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

const autenticar = (email, senha) => {
    const usuario = usuarios.find(
        (usuario) => usuario.email === email && usuario.senha === senha);
    console.log(usuario);
    if (!usuario) alert('Email/senha inválidos');
    else alert('Autenticado com sucesso!');
}