const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Amye');

const telefoneEncontrado = buscaInformacao(estudantes, 'telefone', '9466883489');

console.log(estudanteEncontrado);
console.log(telefoneEncontrado);