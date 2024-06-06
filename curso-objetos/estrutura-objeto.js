const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312321',
    turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(`O nome do estudante é ${estudante.nome}`);
console.log(`Os 3 primeiros números do cpf são ${estudante.cpf.substring(0, 3)}.`);

estudante.nome //josé

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));