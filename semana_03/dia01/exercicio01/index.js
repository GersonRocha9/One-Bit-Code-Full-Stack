alert("Bem vindo! A seguir pediremos que informe alguns dados.") //criando um alerta no browser

let name = prompt("Insira o seu nome:") //cria uma caixa pro usuário digitar um texto e salvar numa variável

let age = prompt("Insira a sua idade:")

let ageConfirmation = confirm("Idade digitada: " + age + ". Confirma?") //caixa de confirmação para o usuário confirmar ou não

alert("Nome: " + name + "\nIdade: " + age + "\nConfirmação da idade: " + ageConfirmation) //concatenação no alert mostrando todos os dados digitados

