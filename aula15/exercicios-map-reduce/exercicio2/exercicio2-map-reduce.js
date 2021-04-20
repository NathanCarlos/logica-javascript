const colaboradores = [
    {
        id: 1,
        nome: 'Thiago',
        salario: 3000,
        cargo: 'Dev Full Stack Jr'
    },
    {
        id: 2,
        nome: 'Matheus',
        salario: 3200,
        cargo: 'Dev Full Stack Jr'
    },
    {
        id: 3,
        nome: 'Otavio',
        salario: 2600,
        cargo: 'Dev Full Stack Jr'
    },
    {
        id: 4,
        nome: 'Jorge',
        salario: 9000,
        cargo: 'Dev Full Stack Snr'
    },
    {
        id: 5,
        nome: 'Alan',
        salario: 10000,
        cargo: 'Dev Full Stack Snr'
    },
    {
        id: 6,
        nome: 'David',
        salario: 11000,
        cargo: 'Dev Full Stack Snr'
    },
    {
        id: 7,
        nome: 'Gabriel',
        salario: 7000,
        cargo: 'Dev Full Stack Pln'
    },
    {
        id: 8,
        nome: 'Arthur',
        salario: 6500,
        cargo: 'Dev Full Stack Pln'
    },
];

const cargos = [
    'Dev Full Stack Jr',
    'Dev Full Stack Snr',
    'Dev Full Stack Pln'
];

const buscaPorCargo = cargo => colaborador => colaborador.cargo === cargo;
const reduceSomaSalarios = (acc, colaborador) => acc + colaborador.salario;
const atualizaIndicadores = () => {
    const totalSalarios = colaboradores.reduce(reduceSomaSalarios, 0);
    const mediaSalarios = divisao(totalSalarios)(colaboradores.length);

    for (cargo of cargos) {
        const colaboradoresPorCargo = colaboradores.filter(buscaPorCargo(cargo));
        const totalSalarioPorCargo = colaboradoresPorCargo.reduce(reduceSomaSalarios, 0);
        const mediaSalariosPorCargo = divisao(totalSalarioPorCargo)(colaboradoresPorCargo.length);
        let lisAtualTotal = retornaUlTotalSalariosPorCargo();
        let lisAtualMedia = retornaUlMediaSalariosPorCargo();
        lisAtualTotal += `
            <li>Cargo: ${cargo} - Total Salários: ${totalSalarioPorCargo}</li>
        `;
        lisAtualMedia += `
            <li>Cargo: ${cargo} - Média Salários: ${mediaSalariosPorCargo}</li>
        `;
        setaUlMediaSalariosPorCargo(lisAtualMedia);
        setaUlTotalSalariosPorCargo(lisAtualTotal);
    }

    setaH1TotalSalarios(`Total de salários R$${formataValor(totalSalarios)}`);
    setaH1MediaSalarios(`Média de salários R$${formataValor(mediaSalarios)}`);
}

atualizaIndicadores();