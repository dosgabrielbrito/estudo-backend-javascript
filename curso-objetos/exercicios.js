const livro = {
    titulo: 'Hyrule Historia',
    autor: 'Miyamoto',
    anoPublicacao: 2016,
    genero: 'Documentário'
}

console.log(livro);

const anoAtual = new Date().getFullYear();

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

console.log(livro);

const mostrarDetalhes = `O livro possui ${livro.idadePublicacao} anos de idade e é do gênero ${livro.genero}.`;

console.log(mostrarDetalhes);

livro.avaliacao = null;

if (livro.avaliacao !== null) {
    console.log('O livro já possui uma avaliação.');
} else {
    livro['avaliacao'] = 7.5;
}

console.log(livro);

livro.genero = 'Aventura';

delete livro.avaliacao;

console.log(livro);

const contaBancaria = {
    titular: 'Gabriel Brito',
    saldo: 10000000,
    depositar: function (valor) {
        this.saldo += valor;
        console.log(`Deposito de ${valor} efetuado. Saldo Atual: ${this.saldo}`);
        return this.saldo;
    },
    sacar: function (valor) {
        this.saldo -= valor;
        console.log(`Saque de ${valor} efetuado. Saldo Atual: ${this.saldo}`);
        return this.saldo;
    },
}

console.log(contaBancaria.sacar(12000000));
console.log(contaBancaria.depositar(500000000));