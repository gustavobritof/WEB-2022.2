
let input1 = document.querySelector('#inputTextArea1');
//Pegando o tam maximo do textarea(140)
const tamMaximo1 = 140;

let contador1 = document.querySelector('#contador1');

contador1.innerHTML = tamMaximo;
contador1.style.display = 'none';
document.querySelector('#botaoEnviarTzeet1').style.backgroundColor = 'rgba(18, 102, 248, 0.5)';
document.querySelector('#botaoEnviarTzeet1').disabled = true;



input1.addEventListener('input', function(){
    let qtdCaracteres = input1.value.length;
    let qtdRestante = tamMaximo - qtdCaracteres;
    contador1.innerHTML = qtdRestante;
    
    if(qtdRestante == 140){
        contador1.style.display = 'none';
        document.querySelector('#botaoEnviarTzeet1').style.backgroundColor = 'rgba(18, 102, 248, 0.5)';
        document.querySelector('#botaoEnviarTzeet1').disabled = true;
    }{
        document.querySelector("#botaoEnviarTzeet1").style.backgroundColor = 'rgba(18, 102, 248,1)';
        document.querySelector('#botaoEnviarTzeet1').disabled = false;
        contador1.style.color = 'black';
        contador1.style.display = 'inline';
        if(qtdRestante < 40){
            contador1.style.color = 'rgb(255, 200, 0)';
        }
            if(qtdRestante < 0){
                contador1.style.color = 'rgb(255, 0, 0)';
                document.querySelector('#botaoEnviarTzeet1').style.backgroundColor = 'rgba(18, 102, 248, 0.5)';
                document.querySelector('#botaoEnviarTzeet1').disabled = true;

    }
        

    }

});

