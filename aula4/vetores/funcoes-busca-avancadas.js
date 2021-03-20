const nomesSimples = ['Nathan', 'Clarissa', 'Flavio'];
const clientes = [
    {
      nome: 'Augusto',
      email: 'augusto@gmail.com'
    },
    {
        nome: 'João',
        email: 'joao@gmail.com'
    },
    {
        nome: 'Nathan',
        email: 'nathan@gmail.com'
    },
    {
        nome: 'Nathan',
        email: 'nathan@gmail.com'
    }
];

// const nome = prompt('Digite o nome do cliente que deseja buscar:');
// const email = prompt('Digite o seu e-mail');

// findIndex()
// const indexCliente = clientes.findIndex((cliente) => cliente.nome === nome);
// console.log(indexCliente);

// const indiceEmail = clientes.findIndex((cliente) => cliente.email === email);

// if (indiceEmail > -1) console.log('Email existe!');
// else console.log('Email não existe');

// const indexNomes = nomesSimples.findIndex((nomeAbreviado) => nomeAbreviado === nome);

// console.log(indexNomes);

// const nomeEncontrado = nomesSimples.find((nomeSimples) => nomeSimples === nome);

// console.log(nomeEncontrado);

// const clienteEncontrado = clientes.find((cliente) => cliente.email === email);

// if(!clienteEncontrado) console.log('Cliente não encontrado');
// else console.log(`Cliente Econtrado`, clienteEncontrado);

// filter()

// const clientesEcontrados = clientes.filter((cliente) => cliente.email === email);

// if (clientesEcontrados.length === 0) console.log('Clientes com email não encontrado!');
// else console.log('Clientes encontrados!', clientesEcontrados);

// const listaCompras = ['Arroz', 'Feijão', 'Farofa', 'Brócolis', 'Arroz', 'Milho', 'Arroz', 'Arroz'];
// const itemARetirar = prompt('Digite o item que deseja retirar');
// const listaSemItem = listaCompras.filter((item) => item !== itemARetirar);
// console.log(listaSemItem);


// const novosClientes = clientes.map((cliente) => (
//     {
//         nome: cliente.nome
//     }
// ));

// console.log(novosClientes);