// Exercício 1) Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.

// const n1 = parseFloat(prompt('Digite o primeiro número'));
// const n2 = parseFloat(prompt('Digite o segundo número'));
// const n3 = parseFloat(prompt('Digite o terceiro número'));

// const numeros = [n1, n2, n3];

// console.log(numeros);


// Exercício 2) Considere o array: [10,15,30]. Crie um script que pergunte 2 números ao usuário, insira o primeiro número no começo desse array e o segundo número no final.
// Dica: utilize push() e unshift()

// const numeros = [10,15,30];

// const n1 = parseFloat(prompt('Digite o primeiro número'));
// const n2 = parseFloat(prompt('Digite o segundo número'));

// numeros.unshift(n1);
// numeros.push(n2);

// console.log(numeros);

// Exercício 3) Considere o array: [10,15,50]. Crie um script que pergunte 3 números ao usuário e utilize o concat() para unir os 2 arrays em 1 só.

// const numeros = [10,15,50];

// const n1 = parseFloat(prompt('Digite o primeiro número'));
// const n2 = parseFloat(prompt('Digite o segundo número'));
// const n3 = parseFloat(prompt('Digite o terceiro número'));

// const numerosConcatenados = numeros.concat(n1, n2, n3);

// console.log(numerosConcatenados);


// Exercício 4) Considere o array: ['Nathan', 'Gabriel', 'Matheus', 'Roberta']
//Crie um script que pede ao usuário um nome para busca, se o nome estiver na lista exiba uma mensagem: 'Nome encontrado', caso contrário exiba: 'Nome não encontrado'.
//Dica: Utilize indexOf()

// const nomes = ['Nathan', 'Gabriel', 'Matheus', 'Roberta'];

// const nome = prompt('Digite o nome para validar');

// const indiceNome = nomes.indexOf(nome);

// if (indiceNome > -1) console.log('Nome encontrado');
// else console.log('Nome não encontrado!');

/** 
 * Exercício 5) Considere o array: ['Nathan', 'Gabriel', 'Nathan', 'Matheus', 'Roberta']
 * Crie um script que pede ao usuário um nome para busca, exiba o primeiro índice onde o nome foi encontrado e o último índice.
 * Dica: Utilize a função indexOf() e lastIndexOf()
*/
// const nomes = ['Nathan', 'Gabriel', 'Nathan', 'Matheus', 'Roberta'];

// const nome = prompt('Digite o nome para encontrar');

// const indiceNome = nomes.indexOf(nome);
// const ultimoIndice = nomes.lastIndexOf(nome);

// console.log(`Primeiro índice: ${indiceNome} e último índice: ${ultimoIndice}`);


/** 
 * Exercício 6) Considere o array: ['Nathan', 'Gabriel', 'Matheus', 'Roberta']
 * Crie um script que pede ao usuário um nome para deletar, e exiba o novo array com o nome deletado.
 *Dica: Utilize splice()
*/

// const nomes = ['Nathan', 'Gabriel', 'Matheus', 'Roberta'];

// const nome = prompt('Digite o nome para deletar');

// const indiceNome = nomes.indexOf(nome);

// if (indiceNome > -1) nomes.splice(indiceNome, 1);

// console.log(nomes);


/**
 * Exercício 7) Considere o array:
[
    {
        nome: 'pipoca',
        quantidade: 1
    },
    {
        nome: 'sal',
        quantidade: 2
    },
    {
        nome: 'pimenta',
        quantidade: 1
    }
]
Crie um script que pede ao usuário o nome de um produto e exiba o produto se encontrado. Utilize find() ou findIndex().
 */

// const produtos = [
//     {
//         nome: 'pipoca',
//         quantidade: 1
//     },
//     {
//         nome: 'sal',
//         quantidade: 2
//     },
//     {
//         nome: 'pimenta',
//         quantidade: 1
//     }
// ];

// const produtoAEcontrar = prompt('Digite o nome do produto');

// const produtoEcontrado = produtos.find((produto) => produto.nome === produtoAEcontrar);

// if (produtoEcontrado) {
//     console.log('Produto encontrado');
// } else {
//     console.log('Produto não encontrado');
// }


/**
 * Exercício 8) Considere o array:

[
    {
        nome: 'pipoca',
        quantidade: 1
    },
    {
        nome: 'sal',
        quantidade: 2
    },
    {
        nome: 'pipoca',
        quantidade: 1
    },
    {
        nome: 'pimenta',
        quantidade: 1
    }
   ]
Crie um script que pede ao usuário o nome de um produto e exiba os produtos encontrados. Utilize filter().
 */

// const produtos = [
//     {
//         nome: 'pipoca',
//         quantidade: 1
//     },
//     {
//         nome: 'sal',
//         quantidade: 2
//     },
//     {
//         nome: 'pipoca',
//         quantidade: 1
//     },
//     {
//         nome: 'pimenta',
//         quantidade: 1
//     }
// ];

// const produtoAEcontrar = prompt('Digite o nome do produto');

// const produtosEcontrados = produtos.filter((produto) => produto.nome === produtoAEcontrar);

// console.log(produtosEcontrados);