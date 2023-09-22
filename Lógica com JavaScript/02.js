triangulo(3,3,2)

function triangulo(ladoA, ladoB, ladoC) {

    if(ladoA == ladoB && ladoB == ladoC) {
        console.log("O triângulo é EQUILÁTERO!")
    } else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        console.log("O triângulo é ISÓCELES!")
    } else {
        console.log("O triângulo é ESCALENO!")
    }
}