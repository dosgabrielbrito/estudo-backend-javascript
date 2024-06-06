const estudantes = require('./estudantes.json');

function ordenaPorPropriedade(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0;
    })
}

const listaOrdenada = ordenaPorPropriedade(estudantes, 'nome');

console.log(listaOrdenada);