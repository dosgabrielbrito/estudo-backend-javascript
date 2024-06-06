const notaFinal = 6;
const faltasAluno = 2;
const advertencias = 0;

if (notaFinal < 7 && faltasAluno > 4) {
    console.log('Reprovado, boas festas!');
} else {
    console.log('Não foi reprovado por falta.');
}

if (faltasAluno >= 2 && !advertencias) {
    console.log('Recebeu bônus.');
} else {
    console.log('Não recebeu bônus.');
}
