/*Vai no nosso documento e seleciona todos os botões e coloca um listener
que ao clicar em qualquer botão chama uma função para verificar esse botão*/
document.addEventListener('DOMContentLoaded', ()=>{

    let buttons = document.querySelectorAll('.btts');

    buttons.forEach((button) =>{
        button.addEventListener('click', checkButton);
    })

})

/*Verifica o ID do botão que foi clicado e envia esse ID para o Backend e para o
updateScreen para fazer a exibição do elemento na tela */
function checkButton(event){
    let position = event.target.id;
    getNumber(position);
    updateScreen();
    

}

/*Captura o simbolo respectivo ao boão no Backend e exibe na tela
(caso não seja: igual, apagar, deletar e ON)*/
function updateScreen(){
    
    let screen = document.getElementById('numeros');
    screen.innerHTML = tela;
       

}