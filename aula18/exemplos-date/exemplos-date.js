const inputDate = document.getElementById('inputDate');

inputDate.addEventListener('input', () => {
    const valorDataString = inputDate.value;
    console.log(valorDataString);
    const date = new Date(valorDataString);
    console.log(date);

    console.log(date.getDate());

    console.log(`
        ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}
    `);
    console.log(date.getHours());

    const dataAtual = new Date();
    const dataFormatada = formataData(dataAtual.getDate(), (dataAtual.getMonth() + 1), dataAtual.getFullYear(), dataAtual.getHours());
    console.log(dataFormatada);

    console.log(diaAtualSemana(dataAtual.getDay()));

    const dataHojeComAlteracoes = new Date();

    dataHojeComAlteracoes.setHours(12);
    dataHojeComAlteracoes.setMonth(4);
    dataHojeComAlteracoes.setDate(2);
    console.log(dataHojeComAlteracoes);
    

    const idUnico = dataAtual.getFullYear().toString() + dataAtual.getMonth().toString() + dataAtual.getDate().toString() + dataAtual.getHours().toString() + dataAtual.getMinutes().toString() + dataAtual.getMilliseconds().toString();
    console.log(idUnico);
    
    // console.log(dataHojeComAlteracoes.getTime())
    
});

const formataData = (dia, mes, ano, hora) => {
    return `Dia: ${dia}, mês: ${mes + 1}, ano: ${ano}, horário: ${hora}`;
}

const diaAtualSemana = (dia) => {
    switch (dia) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        default:
            break;
    }
}