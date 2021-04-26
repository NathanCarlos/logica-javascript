const inputCarro = document.getElementById('carro');
const dataListCarros = document.getElementById('carros');

// const carros = [
//     'Onix',
//     'Celta',
//     'Polo',
//     'Fucsa',
//     'Opala',
//     'Corsa'
// ];

const carros = [
    { id: 1, nome: 'Onix' },
    { id: 2, nome: 'Celta' },
    { id: 3, nome: 'Polo' },
    { id: 4, nome: 'Fucsa' },
    { id: 5, nome: 'Opala' },
    { id: 6, nome: 'Corsa' }
];

const atualizaListaOpcoes = (listaBusca) => {
    const listaCarros = listaBusca ? listaBusca : carros;
    const carrosOpcoes = listaCarros.map((carro) => `<option value="${carro.nome}"></option>`).join('');
    dataListCarros.innerHTML = carrosOpcoes;
}

atualizaListaOpcoes();

const buscaPorNome = nome => carro => carro.nome.toUpperCase().search(nome.toUpperCase()) > -1;

inputCarro.addEventListener('keyup', (event) => {
    const valor = event.target.value;
    const listaCarros = carros.filter(buscaPorNome(valor));
    atualizaListaOpcoes(listaCarros);
});