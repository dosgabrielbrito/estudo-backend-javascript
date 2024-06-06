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

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}`;
        console.log(texto);
    }
}