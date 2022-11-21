//Declarando variável do modal
let modal = document.getElementById("meuModal");
//Abrir modal ao carregar a página
modal.style.display = "block";

//Desabilitar botão de enviar
let botao = document.getElementById("botaoCadastro");
botao.disabled = true;
botao.style.backgroundColor = "rgba(11, 94, 215, 0.5)";

//Declarando variáveis dos inputs
let inputs = document.querySelectorAll("input");
let inputNome = document.getElementById("inputNome");
let spanNome = document.getElementById("spanNome");
let inputEmail = document.getElementById("inputEmail");
let spanEmail = document.getElementById("spanEmail");
let inputSenha = document.getElementById("inputSenha");
let spanSenha = document.getElementById("spanSenha");
let inputConfirmacaoSenha = document.getElementById("inputConfirmacaoSenha");
let spanConfirmacaoSenha = document.getElementById("spanConfirmacaoSenha");

//Função para verificar se o email é válido utilizando expressão regular(Regex)
function validarEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

//Função para verificar se o input está preenchido, se sim retorna true, se não, retorna false
function verificaInputs(input) {
  let ret = input.value.length > 0 ? true : false;

  return ret;
}

//Ao soltar uma tecla, verifica se o input está preenchido, se não estiver, pede para o usuário fornecer um nome
inputNome.addEventListener("keyup", () => {
  if (!verificaInputs(inputNome)) {
    spanNome.innerHTML = "Por favor, informe um nome de usuário.";
    spanNome.style.color = "#DC3446";
    spanNome.style.fontSize = "0.9em";
  } else {
    spanNome.innerHTML = "";
  }
});

//Ao soltar uma tecla, verifica se o email é válido, se for, permite a continuação do preenchimento do formulário, se não, exibe uma mensagem de erro embaixo do campo de email
inputEmail.addEventListener("keyup", () => {
  if (validarEmail(inputEmail.value)) {
    spanEmail.innerHTML = "";
  } else {
    spanEmail.innerHTML = "Informe um email válido.";
    spanEmail.style.color = "#DC3446";
    spanEmail.style.fontSize = "0.9em";
  }
});

//Ao soltar uma tecla, verifica se o input está preenchido, e se possui menos de 6 caracteres
inputSenha.addEventListener("keyup", () => {
  if (!verificaInputs(inputSenha) || inputSenha.value.length < 6) {
    spanSenha.innerHTML =
      "A senha é obrigatória e deve ter pelo menos 6 caracteres";
    spanSenha.style.color = "#DC3446";
    spanSenha.style.fontSize = "0.9em";
  } else {
    spanSenha.innerHTML = "";
  }
});

inputConfirmacaoSenha.addEventListener("keyup", () => {
  if (inputSenha.value != inputConfirmacaoSenha.value) {
    spanConfirmacaoSenha.innerHTML =
      "A senha é obrigatória e deve ter pelo menos 6 caracteres";
    spanConfirmacaoSenha.style.color = "#DC3446";
    spanConfirmacaoSenha.style.fontSize = "0.9em";
  } else {
    spanConfirmacaoSenha.innerHTML = "";
  }
});

//--------------------------------------------------------
//

let meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Junho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
let selectMes = document.getElementById("selectMes");
let selectDia = document.getElementById("selectDia");
let selectAno = document.getElementById("selectAno");

function addMeses() {
  for (let i = 0; i < meses.length; i++) {
    let option = document.createElement("option");
    option.innerHTML = meses[i];
    selectMes.appendChild(option);
  }
}

function addDias() {
  let dias = 31;
  switch (selectMes.value) {
    case "Fevereiro":
      dias = 29;
      break;
    case "Abril":
    case "Junho":
    case "Setembro":
    case "Novembro":
      dias = 30;
      break;
  }
  for (let i = 1; i <= dias; i++) {
    let option = document.createElement("option");
    option.innerHTML = i;
    selectDia.appendChild(option);
  }
}

function addAnos() {
  for (let i = 2022; i >= 1940; i--) {
    if (selectMes.value == "Fevereiro" && selectDia.value == "29") {
      if (i % 4 == 0) {
        let option = document.createElement("option");
        option.innerHTML = i;
        selectAno.appendChild(option);
      }
    } else {
      let option = document.createElement("option");
      option.innerHTML = i;
      selectAno.appendChild(option);
    }
  }
}


addMeses();

selectMes.addEventListener("change", () => {
  addDias();
});

selectDia.addEventListener("change", () => {
  addAnos();
});

radios = document.querySelectorAll("input[type=radio]");

radios[0].addEventListener('change', ()=>{
  botao.disabled = false;
  botao.style.backgroundColor = "rgba(11, 94, 215, 1)";
})

radios[1].addEventListener('change', ()=>{
  botao.disabled = true;
  botao.style.backgroundColor = "rgba(11, 94, 215, 0.5)";
})
