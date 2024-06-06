// const dados = require('./dados.json');

// console.log(dados);

// const chaves = Object.entries(dados);

// console.log(chaves);

// const produto = {
//     id: 1454,
//     nome: 'Bota Larga Preta',
//     preco: 145.99
// }

// const stringProduto = JSON.stringify(produto);

// console.log(stringProduto);

// const dadosAnimais = require('./animais.json');

// console.log(typeof dadosAnimais);

// dadosAnimais.animais.push({
//     id: 4,
//     nome: 'Raposa',
//     tipo: 'Mamífero',
//     habitat: 'Cerrado'
// })

// dadosAnimais.animais.splice(2, 1);

// dadosAnimais.animais[0].habitat = 'Cidade Grande';

// console.log(dadosAnimais);

// const stringDadosAnimais = JSON.stringify(dadosAnimais);

// console.log(stringDadosAnimais);

// function novoObjetoClone(objeto) {
//     return JSON.parse(JSON.stringify(objeto));
// }

// const cloneDadosAnimais = novoObjetoClone(dadosAnimais);

// cloneDadosAnimais.animais.splice(0, 3);

// console.log(dadosAnimais);
// console.log(cloneDadosAnimais);

const biblioteca = [
    {
        id: 1,
        titulo: 'Memórias Póstumas de Bras Cubas',
        autor: 'Machado de Assis',
        anoPublicacao: 1824
    },
    {
        id: 2,
        titulo: 'Macunaíma',
        autor: 'Mario de Andrade',
        anoPublicacao: 1929
    },
    {
        id: 3,
        titulo: 'Vidas Secas',
        autor: 'Graciliano Ramos',
        anoPublicacao: 1945
    },
]

function encontrarLivroPorId(idBusca) {
    const livroSelecionado = biblioteca.find((livro) => livro.id === idBusca);
    if (livroSelecionado) {
        return livroSelecionado;
    } else {
        console.log(`Id ${idBusca} não encontrado na biblioteca.`);
        return [];
    }
}

console.log(encontrarLivroPorId(2));
console.log(encontrarLivroPorId(4));

const catalogoFilmes = [
    {
        id: 1,
        titulo: 'Apenas Uma Vez',
        diretor: 'Maninho da Irlanda',
        anoLancamento: 2016
    },
    {
        id: 2,
        titulo: 'Interstellar',
        diretor: 'Christopher Nolan',
        anoLancamento: 2018
    },
    {
        id: 3,
        titulo: 'Tropa de Elite',
        autor: 'José Padilha',
        anoLancamento: 2008
    },
]

function filtrarFilmesPorAno(anoBusca) {
    const filmesSelecionados = catalogoFilmes.filter((filme) => filme.anoLancamento >= anoBusca);
    if (filmesSelecionados.length) {
        return filmesSelecionados;
    } else {
        console.log(`Nenhum filme no catálogo com ano de lançamento apṕos ${anoBusca}.`);
        return [];
    }
}

console.log(filtrarFilmesPorAno(2015));
console.log(filtrarFilmesPorAno(2024));

const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdenarProdutosPorPreco(valorMax) {
    const produtosSelecionados = listaProdutos.filter((produto) => produto.preco <= valorMax);
    if (produtosSelecionados.length) {
        const produtosSelecionadosOrd = produtosSelecionados.sort((a, b) => {
            if (a['preco'] < b['preco']) return -1;
            if (a['preco'] > b['preco']) return 1;
            return 0;
        });
        return produtosSelecionadosOrd;
    } else {
        console.log(`Não existem produtos com preço igual ou abaixo de R$ ${valorMax}.`);
        return [];
    }
}

console.log(filtrarOrdenarProdutosPorPreco(49.99));
console.log(filtrarOrdenarProdutosPorPreco(12.50));

const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function compararIdadeDecrescente(propriedade) {
    const animaisOrd = animais.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return 1;
        if (a[propriedade] > b[propriedade]) return -1;
        return 0;
    })
    return animaisOrd;
}

console.log(compararIdadeDecrescente('idade'));

const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId(valorId) {
    for (const departamento of departamentos) {
        const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === valorId);
        if (funcionarioEncontrado) {
            return funcionarioEncontrado;
        }
    }
    console.log(`Não foi encontrado o ID ${valorId}.`);
    return {};
}

console.log(encontrarFuncionarioPorId(202));
console.log(encontrarFuncionarioPorId(209));
