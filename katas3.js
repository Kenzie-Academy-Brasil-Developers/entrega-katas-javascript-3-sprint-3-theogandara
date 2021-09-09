const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


// 1 - Selecionamos um elemento no qual queremos adcionar algo
// const divToAppend = document.getElementById('box_3')

// 2 - Criamos o elemento no caso um <p></p>
// const paragraph = document.createElement('p')
// 3 - Inserimos as alteracoes que queremos nele
// no exemplo estamos colocando apenas um texto
// paragraph.innerText = 'Eu fui criado dinamicamente'

// 4 - Colocamos ele na tela linkando com o passo 1.
// Obs. O passo 1 pode vir depois do 2 e 3.
// divToAppend.appendChild(paragraph)

function showResults(x){
    
    const divSelecionada = document.getElementById('resultados')

    const paragrafo = document.createElement('p')
    
    paragrafo.innerText = 'AQUI ESTÁ O RESULTADO DO KATA =>';

    divSelecionada.appendChild(paragrafo)

    if( typeof(x) ===  "number"){

        paragrafo.innerText = 'AQUI ESTÁ O RESULTADO DO KATA => ' + x
        
    }else{
    
    for(let i  = 0; i < x.length; i++){
        paragrafo.innerText += ('  ') + x[i]
    }
}

}


function kata1() {
    // implemente o código do kata 1 aqui
    
    const resultado = []

    let valorInicial = 1

    while (valorInicial <= 25){
        resultado.push(valorInicial)
        valorInicial++
    }
    return resultado
}

let ex1 = kata1()

showResults(ex1)

function kata2() {
    // implemente o código do kata 2 aqui

    const resultado = []

    let valorInicial = 25

    while (valorInicial >= 1){
        resultado.push(valorInicial)
        valorInicial--
    }
    return resultado
}

let ex2 = kata2()

showResults(ex2)

function kata3() {
    // implemente o código do kata 3 aqui

    const resultado = []

    let valorInicial = -1

    while (valorInicial >= -25){
        resultado.push(valorInicial)
        valorInicial--
    }    
    return resultado
}

let ex3 = kata3()

showResults(ex3)

function kata4() {
    // implemente o código do kata 4 aqui

    const resultado = []

    let valorInicial = -25

    while (valorInicial < 0){
        resultado.push(valorInicial)
        valorInicial++
    }    
    return resultado

}

let ex4 = kata4()

showResults(ex4)

function kata5() {
    // implemente o código do kata 5 aqui

    const resultado = []

    let valorInicial = 25

    while (valorInicial >= -25){
        resultado.push(valorInicial)
        valorInicial=valorInicial-2
    }    
    return resultado
}

let ex5 = kata5()

showResults(ex5)

function kata6() {
    // implemente o código do kata 6 aqui

    const resultado = []

    let valorInicial = 3

    while (valorInicial <= 100){
        resultado.push(valorInicial)
        valorInicial=valorInicial+3
    }    
    return resultado

}

let ex6 = kata6()

showResults(ex6)

function kata7() {
    // implemente o código do kata 7 aqui

    const resultado = []

    let valorInicial = 7

    while (valorInicial <= 100){
        resultado.push(valorInicial)
        valorInicial=valorInicial+7
    }    
    return resultado
}

let ex7 = kata7()

showResults(ex7)

function kata8() {
    // implemente o código do kata 8 aqui

    const resultado = []

    for (let i = 100; i > 1 ;i--){

        if (i % 3 === 0 || i % 7 === 0){
            resultado.push(i)
        }
    }
    return resultado
}

let ex8 = kata8()

showResults(ex8)


function kata9() {
    // implemente o código do kata 9 aqui

    const resultado = []

    for (let i = 5; i < 100 ;i += 5){

        if (i % 2 !== 0 ){

            resultado.push(i)
        }
    }
    return resultado
}

let ex9 = kata9()

showResults(ex9)

function kata10() {
    // implemente o código do kata 10 aqui
    return sampleArray
}

let ex10 = kata10()

showResults(ex10)

function kata11() {
    // implemente o código do kata 11 aqui

    const resultado = []

    for (let i = 0; i < sampleArray.length ;i++){

        if (sampleArray[i] % 2 === 0){

            resultado.push(sampleArray[i])
        }
    }
    return resultado

}

let ex11 = kata11()

showResults(ex11)

function kata12() {
    // implemente o código do kata 12 aqui

    const resultado = []

    for (let i = 0; i < sampleArray.length ;i++){

        if (sampleArray[i] % 2 !== 0){

            resultado.push(sampleArray[i])
        }
    }
    return resultado
}

let ex12 = kata12()

showResults(ex12)

function kata13() {
    // implemente o código do kata 13 aqui

    const resultado = []

    for (let i = 0; i < sampleArray.length ;i++){

        if (sampleArray[i] % 8 === 0){

            resultado.push(sampleArray[i])
        }
    }
    return resultado

}

let ex13 = kata13()

showResults(ex13)

function kata14() {
    // implemente o código do kata 14 aqui

    const resultado = []

    for (let i = 0; i < sampleArray.length ;i++){

        resultado.push(sampleArray[i]**2)
    }
    return resultado
}

let ex14 = kata14()

showResults(ex14)

function kata15() {
    // implemente o código do kata 15 aqui

    let resultado = 0
    
    for (let i = 0; i <= 20 ;i++){
    
        resultado += (i)
    }
    return resultado
}

let ex15 = kata15()

showResults(ex15)

function kata16() {
    // implemente o código do kata 16 aqui
    let resultado = 0
    
    for (let i = 0; i < sampleArray.length ;i++){
    
        resultado += (sampleArray[i])
    }
    return resultado
}

let ex16 = kata16()

showResults(ex16)

function kata17() {
    // implemente o código do kata 17 aqui
    let resultado = sampleArray[0]
    
    for (let i = 0; i < sampleArray.length ;i++){

        if (sampleArray[i] < resultado){
            resultado = (sampleArray[i])
        }
    }
    return resultado

}

let ex17 = kata17()

showResults(ex17)

function kata18() {
    // implemente o código do kata 18 aqui

    let resultado = sampleArray[0]
    
    for (let i = 0; i < sampleArray.length ;i++){

        if (sampleArray[i] > resultado){
            resultado = (sampleArray[i])
        }
    }
    return resultado
}

let ex18 = kata18()

showResults(ex18)

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
