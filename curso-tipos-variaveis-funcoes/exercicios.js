let varString = 'String';
let varBool = true;
let varNum = 10;

console.log(varString, varBool, varNum);

let primeiroNome = 'Gabriel';
let segundoNome = 'Brito';

let nome = primeiroNome + segundoNome;

console.log(nome);

let numeroTeste = 100;
let stringTeste = 'Numero';

let concatTeste = numeroTeste + stringTeste;

console.log(concatTeste);

let valorTeste = 10000;
console.log(valorTeste);

valorTeste = 10;
console.log(valorTeste);

var testeVarForaBloco = 'VariavelForaBloco';
let testeLetForaBloco = 'VariavelForaBloco';

if (true) {
    var testeBloco = 'VariavelBloco';
    let testeLetBloco = 'VariavelBloco';
}

console.log(testeVarForaBloco);
console.log(testeLetForaBloco);
console.log(testeBloco);
//console.log(testeLetBloco);

const estaChovendo = true;

if (estaChovendo) {
    console.log('Leve um guardachuva.');
} else {
    console.log('Não leve um guardachuva.');
}

const fraseNormal = 'Essa é uma frase.';

console.log(fraseNormal.toLowerCase());
console.log(fraseNormal.toUpperCase());

let nullTeste = null;
let undefTeste;

console.log(nullTeste);
console.log(undefTeste);

console.log(`Template ${1} string ${false} dos ${'Brothers'}`);

let stringToNumber = '10';
let numberToString = 15;

console.log(Number(stringToNumber), String(numberToString));