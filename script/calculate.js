//Variaveis de numeros para as operações
let n1 = '';
let n2 = '';

//Função que determina qual operação será realizada e chama a função respectiva:
function calculate(){
    let soma = tela.indexOf('+')
    let subtracao = tela.indexOf('-')
    let multiplicacao = tela.indexOf('x')
    let divisao = tela.indexOf('/')
    let percent = tela.indexOf('%')

    if(soma != -1){
        getPositions(soma);
        sum();
        
    }
    if(subtracao != -1){
        getPositions(subtracao);
        sub();
        
    }
    if(multiplicacao != -1){
        getPositions(multiplicacao);
        mult();
        
    }
    if(divisao != -1){
        getPositions(divisao);
        div();

    }

    clearVars();

    
}


//Pega os numero anteriores e posteriores ao sinal para fazer as operações
function getPositions(pos){
    
    for(let c = 0; c < pos; c++){
        n1 += tela[c]
    }
    
    for(let c = pos+1; c < tela.length; c++){
        n2 += tela[c]
    }

}

//Função para somar os dois numeros:
function sum(){
    
    let res =String(parseInt(n1) + parseInt(n2));
    tela = res;
    console.log(res)
}

//Função para subtrair os dois numeros:
function sub(subtracao){
   
    let res =String(parseInt(n1) - parseInt(n2));
    tela = res;
    console.log(res)
}

//Função para multiplicar os dois numeros:
function mult(multiplicacao){
   
    let res =String(parseInt(n1) * parseInt(n2));
    tela = res;
    console.log(res)
}

//Função para fazer a divisão dos dois numeros:
function div(divisao){
   
    let res =String(parseInt(n1) / parseInt(n2));
    tela = res;
    console.log(res)
}

//Função para limpar as variaveis cada vez que o ciclo reinicia:
function clearVars(){
    n1 = '';
    n2 = '';
}