const ulListaNumeros = document.getElementById('listaNumeros');

const numeros = ["10", "20", "30", "40"];

const n2 = parseFloat(prompt('Digite o número'));

const arrayNumerosOperacoes = numeros.map((numero) => {
    const numeroFloat = parseFloat(numero);
    return {
        numero: numeroFloat,
        soma: numeroFloat + n2,
        subtracao: numeroFloat - n2,
        divisao: numeroFloat / n2,
        multiplicacao: numeroFloat * n2
    }
});

for (numero of arrayNumerosOperacoes) {
    ulListaNumeros.innerHTML += `
        <li>
            <h3>Número um: ${numero.numero}</h3>
            <h3>Número dois: ${n2}</h3>
            <p>Soma: ${numero.soma}</p>
            <p>Subtração: ${numero.subtracao}</p>
            <p>Divisão: ${numero.divisao}</p>
            <p>Multiplicação: ${numero.multiplicacao}</p>
        </li>
    `;
}

