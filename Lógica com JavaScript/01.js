
operacoes(10,2);

function operacoes(numero1, numero2) {
    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    console.log(`${numero1} + ${numero2} = ${soma} 
${numero1} - ${numero2} = ${subtracao}
${numero1} x ${numero2} = ${multiplicacao}
${numero1} / ${numero2} = ${divisao}`);
}   