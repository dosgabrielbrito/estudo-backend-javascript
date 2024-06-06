const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123123123',
    turma: 'JavaScript',
    bolsista: true,
    telefone: ['5511999998888', '5511999997777'],
    endereco: [
        {
            logradouro: 'Rua Esquerda',
            numero: '45',
            complemento: 'Apto 66'
        },
        {
            logradouro: 'Rua Direita',
            numero: '2A',
            complemento: 'Casa'
        },
    ]
}

function exibirTelefones(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

//exibirTelefones(estudante.telefone[0], estudante.telefone[1]);
exibirTelefones(...estudante.telefone);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.endereco[0]
}

console.log(dadosEnvio);