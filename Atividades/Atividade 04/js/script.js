
let input = document.querySelector('#inputTextArea');
//Pegando o tam maximo do textarea(140)
const tamMaximo = 140;

let contador = document.querySelector('#contador');

contador.innerHTML = tamMaximo;
contador.style.display = 'none';
document.querySelector('#botaoEnviarTzeet').style.backgroundColor = 'rgba(18, 102, 248, 0.5)';
document.querySelector('#botaoEnviarTzeet').disabled = true;



input.addEventListener('input', function(){
    let qtdCaracteres = input.value.length;
    let qtdRestante = tamMaximo - qtdCaracteres;
    contador.innerHTML = qtdRestante;
    
    if(qtdRestante == 140){
        contador.style.display = 'none';
        document.querySelector('#botaoEnviarTzeet').style.backgroundColor = 'rgba(18, 102, 248, 0.5)';
        document.querySelector('#botaoEnviarTzeet').disabled = true;
    }{
        document.querySelector("#botaoEnviarTzeet").style.backgroundColor = 'rgba(18, 102, 248,1)';
        document.querySelector('#botaoEnviarTzeet').disabled = false;
        contador.style.color = 'black';
        contador.style.display = 'inline';
        if(qtdRestante < 40){
            contador.style.color = 'rgb(255, 200, 0)';
        }
            if(qtdRestante < 0){
                contador.style.color = 'rgb(255, 0, 0)';
                document.querySelector('#botaoEnviarTzeet').style.backgroundColor = 'rgba(18, 102, 248, 0.5)';
                document.querySelector('#botaoEnviarTzeet').disabled = true;

    }
        

    }

});

