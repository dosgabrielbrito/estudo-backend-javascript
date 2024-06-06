const matrizGeral = [];
const dimensaoMatriz = 3;
let vetorLinha = [];
let valorMatriz = 1;

for (i = 0; i < dimensaoMatriz; i++) {
    for (j = 0; j < dimensaoMatriz; j++) {
        vetorLinha.push(valorMatriz);
        valorMatriz++;
    }
    matrizGeral.push(vetorLinha);
    vetorLinha = [];
}

console.log(matrizGeral);

const arrayTeste = [2, 4, 5, 7, 9, 12];
const funcaoTeste = elemento => elemento * 10;

arrayTeste.forEach(elemento => console.log(elemento));

function executaOperacaoEmArray(vetor, funcao) {
    resultados = vetor.map(funcao);
    console.log(resultados);
}

executaOperacaoEmArray(arrayTeste, funcaoTeste);

function verificaNumeroArray(vetor, numero) {
    resultados = vetor.map(elemento => elemento === numero ? true : false);
    if (resultados) {
        return resultados.indexOf(true);
    } else {
        return -1;
    }
}

console.log(verificaNumeroArray(arrayTeste, 2));
console.log(verificaNumeroArray(arrayTeste, 7));
console.log(verificaNumeroArray(arrayTeste, 90));

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
];

const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

//const alunoBuscado = 'Pedro Almeida';
const alunoBuscado = 'Maria Raíssa';
const indiceAluno = todasAsTurmas.find(aluno => aluno === alunoBuscado);

if (indiceAluno) {
    console.log(`${indiceAluno} foi encontrado na lista de alunos.`)
} else {
    console.log(`${alunoBuscado} não encontrado na lista de alunos.`)
}

