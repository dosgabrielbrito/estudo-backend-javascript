const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123123123',
    turma: 'JavaScript',
    bolsista: true,
    telefone: ['5511999998888', '5511999997777'],
    media: 7.5,
    estaAprovado: function (mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudante.estaAprovado(7));