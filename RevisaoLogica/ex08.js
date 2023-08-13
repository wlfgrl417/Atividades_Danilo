// function contarVogais(mensagem) {
//     mensagem = mensagem.toLowerCase()
//     let vogais = 0
//     for(let i = 0; i < mensagem.length; i++) {
//         switch(mensagem[i]) {
//             case "a":
//                 vogais++
//                 break
//             case "e":
//                 vogais++
//                 break
//             case "i":
//                 vogais++
//                 break
//             case "o":
//                 vogais++
//                 break
//             case "u":
//                 vogais++
//                 break
    
//         }
//     }
//     console.log(vogais)
// }

// contarVogais("maçâ")

function contarVogais(mensagem) {
    var quantidadeVogais = 0
    var listaVogais = "aAeEiIoOuUáàâãéèêíìîóòõôùúû"
    for(var letra in mensagem)  {
        for(var vogal in listaVogais) {
            if(mensagem[letra] == listaVogais[vogal]) {
                quantidadeVogais++
            }
        }
    }
    console.log(`${mensagem} = ${quantidadeVogais}`)
}

contarVogais("maçã")
contarVogais("banana")