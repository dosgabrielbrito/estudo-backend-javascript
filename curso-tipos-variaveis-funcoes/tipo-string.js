const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "nosso lema é 'Estudar bastante!'";
const citacao = `Ju diz: "'Nosso lema é estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);

console.log('A estudante chama: ' + estudante);
console.log(`A estudante chama ${estudante}.`); //Template String

const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);
