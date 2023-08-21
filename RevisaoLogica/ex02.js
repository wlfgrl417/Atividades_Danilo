function fatorial(numero) {
    let original = numero
    for(let i = numero-1; i>1; i--) {
        numero *= i
    }
    if(original==0) {
        console.log('0 = 1')
    } else {
        console.log(`${original} = ${numero}`)
    }
}

fatorial()
fatorial(0)