//Faz um reset:
function apagar(){
    document.querySelector("textarea#numeros").innerText += " "
    text = []
}

//Faz as operações:
function calcular(){
    //Verifica as operações a serem realizadas
    let soma = text.indexOf('+')
    let subtracao = text.indexOf('-')
    let multiplicacao = text.indexOf('x')
    let divisao = text.indexOf('/')
    let percent = text.indexOf('%')

    //Somar
    if (soma != -1){
        var num1 = '0'
        var num2 = '0'
        //pega numero anterior ao sinal
        for(c = 0; c < soma; c++){
            num1 += text[c]
        }
        //pega numero posterior ao sinal
        for(c = soma+1; c < text.length; c++){
            num2 += text[c]
        }

        let res = Number(num1) + Number(num2)
        document.querySelector("textarea#numeros").innerHTML = res
    }
    

    //Subtração
    if (subtracao != -1){
        var num1 = '0'
        var num2 = '0'
        //pega numero anterior ao sinal
        for(c = 0; c < subtracao; c++){
            num1 += text[c]
        }
        //pega numero posterior ao sinal
        for(c = subtracao+1; c < text.length; c++){
            num2 += text[c]
        }

        let res = Number(num1) - Number(num2)
        document.querySelector("textarea#numeros").innerHTML = res
    }

    //Multiplicação
    if (multiplicacao != -1){
        var num1 = '0'
        var num2 = '0'
        //pega numero anterior ao sinal
        for(c = 0; c < multiplicacao; c++){
            num1 += text[c]
        }
        //pega numero posterior ao sinal
        for(c = multiplicacao+1; c < text.length; c++){
            num2 += text[c]
        }

        let res = Number(num1) * Number(num2)
        document.querySelector("textarea#numeros").innerHTML = res
    }

    //Divisão
    if (divisao != -1){
        var num1 = '0'
        var num2 = '0'
        //pega numero anterior ao sinal
        for(c = 0; c < divisao; c++){
            num1 += text[c]
        }
        //pega numero posterior ao sinal
        for(c = divisao+1; c < text.length; c++){
            num2 += text[c]
        }

        let res = Number(num1) / Number(num2)
        document.querySelector("textarea#numeros").innerHTML = res
    }
}

//Capturando valores que o usuario digitar:

let text = []         //Array que armazena os dados que o usuario digitou

function capturarZero(){
    document.querySelector("textarea#numeros").innerHTML += "0"     //insere na tela os dados
    text.push('0')                                                    //manda dado pro Array
}
function capturarOne(){
    document.querySelector("textarea#numeros").innerHTML += "1"
    text.push('1')
}
function capturarTwo(){
    document.querySelector("textarea#numeros").innerHTML += "2"
    text.push('2')
}
function capturarTree(){
    document.querySelector("textarea#numeros").innerHTML += "3"
    text.push('3')
}
function capturarFour(){
    document.querySelector("textarea#numeros").innerHTML += "4"
    text.push('4')
}
function capturarFive(){
    document.querySelector("textarea#numeros").innerHTML += "5"
    text.push('5')
}
function capturarSix(){
    document.querySelector("textarea#numeros").innerHTML += "6"
    text.push('6')
}
function capturarSeven(){
    document.querySelector("textarea#numeros").innerHTML += "7"
    text.push('7')
}
function capturarEight(){
    document.querySelector("textarea#numeros").innerHTML += "8"
    text.push('8')
}
function capturarNine(){
    document.querySelector("textarea#numeros").innerHTML += "9"
    text.push('9')
}
function virgula(){
    document.querySelector("textarea#numeros").innerHTML += "."
    text.push('.')
}
function ponto(){
    document.querySelector("textarea#numeros").innerHTML += "."
    text.push('.')
}

//Sinalização:

function soma(){
    document.querySelector("textarea#numeros").innerHTML += "+"
    text.push('+')
}
function subtracao(){
    document.querySelector("textarea#numeros").innerHTML += "-"
    text.push('-')
}
function multiplicacao(){
    document.querySelector("textarea#numeros").innerHTML += "x"
    text.push('x')
}
function divisao(){
    document.querySelector("textarea#numeros").innerHTML += "/"
    text.push('/')
}
function percent(){
    document.querySelector("textarea#numeros").innerHTML += "%"
    text.push('%')
}

