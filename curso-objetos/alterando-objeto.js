const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312321',
    turma: 'JavaScript'
}

console.log(estudante.telefone);
estudante.telefone = '5511999999999';
console.log(estudante.telefone);

estudante.nome = 'José Souza';
console.log(estudante);

const estudante2 = {};
estudante2.nome = 'Ana Maria';
console.log(estudante2);