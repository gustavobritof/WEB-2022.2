//Declarando variáveis
let inputs = document.querySelectorAll('input');  
let inputEmail = document.getElementById('inputEmail'); 
let spanEmail = document.getElementById('spanTexto');
let botao = document.getElementById('botaoLogin');

//Desabilitar botão de enviar
botao.disabled=true;
botao.style.backgroundColor  = "rgba(11, 94, 215, 0.5)";

//Função para ver se os campos estão vazios ou não
function verificaInputs(_array){

    let preenchido = true;

    _array.forEach(
        function (input) {
        if(input.value === "") {
            preenchido = false;
        }
    });
    
    return preenchido;
}

//Função para verificar se o email é válido utilizando expressão regular(Regex)
function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

//ForEach para cada input, verifica o evento de digitação, se o campo não estiver vazio, e o email for válido, habilita o botão de enviar 
inputs.forEach(
    function(input) {
    
    input.addEventListener("keyup", function() {
  
      if(verificaInputs(inputs)&& validarEmail(inputEmail.value)) {
        botao.disabled = false;
        botao.style.backgroundColor  = "rgba(11, 94, 215, 1)";
      } else {
        botao.disabled = true;
      }
  
    });
  
  });

//Ao clicar no botão de enviar, verifica se o email é válido, se for, envia o formulário, se não, exibe uma mensagem de erro embaixo do campo de email
inputEmail.addEventListener("keyup",()=>{
    console.log(validarEmail(inputEmail.value));
    if(validarEmail(inputEmail.value)){
      spanEmail.innerHTML = "";
    }else{
        spanEmail.innerHTML = "Informe um email válido";
        spanEmail.style.color = "#DC3446";
        spanEmail.style.fontSize = "0.9em"
    }
});

