// console.log(this);

function minhaFuncao () {
  
    console.log(this);
    // window.location.reload();
}

this.nome = 'Nathan';

console.log(window.nome);

minhaFuncao();

const cliente = {
    nome: 'Nathan',
    sobrenome: 'Carlos',
    retornaNomeCompleto: function () {
        console.log('Contexto do this: ', this);
        return this.nome + '' + this.sobrenome;
    },
    nomeCompleto: this.nome + this.sobrenome,
}

console.log(cliente);
console.log(cliente.retornaNomeCompleto());

const retornaNomeCompleto = cliente.retornaNomeCompleto.bind(cliente);

console.log(retornaNomeCompleto());