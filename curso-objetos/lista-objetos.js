const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123123123',
    turma: 'JavaScript',
    bolsista: true,
    telefone: ['5511999998888', '5511999997777'],
    endereco: [{
        logradouro: 'Rua Esquerda',
        numero: '45',
        complemento: 'Apto 66'
    }]
}

estudante.endereco.push({
    logradouro: 'Rua Direita',
    numero: '3A',
    complemento: ''
})

//console.log(estudante.endereco);
//console.log(estudante.endereco[0]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);

