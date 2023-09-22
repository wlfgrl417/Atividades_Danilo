console.log(`Resultado: ${divisao(10,2)[0]}
Resto: ${divisao(10)[1]}`)

function divisao(dividendo, divisor) {
    let resultado = dividendo / divisor
    let resto = dividendo % divisor
    return [resultado, resto]
}