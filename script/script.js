//Variaveis
let tela = ""
let board = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', 'x', '/', '%', '=', 'CE', 'C', 'ON']
let on = false;


/*Essa função indentifica a tecla que foi clicada e chama as funções para
fazer as operações necessarias*/
function getNumber(id){

    if(id == 19){
        isOn();
    }

    if(on == true){
        if(id<16){
            addScreen(id);

        }
        if(id==17){
            clearScreen()
        }
        if(id==18){
            backspace()
        }
        if(id == 16){
            calculate()
        }
    }
}

/*Verifica se a calculadora está ligada ou desligada, se estiver ligada, desliga e se 
estiver desligada, liga, */
function isOn(){
    if(on == false){
        on = true;
        tela = '0'
    }else{
        on = false;
        tela = ''
    }
}

/*Adiciona os simbolos na tela*/
function addScreen(id){
    if(tela.length < 9){
        tela += board[id];
    }
    if(tela[0] == 0){
        tela = board[id];
    }

    
}

/*Limpa a tela */
function clearScreen(){
    tela = '0'
}

/*Apaga o ultimo simbolo da tela*/
function backspace(){
    tela = tela.substring(0, tela.length - 1);
}