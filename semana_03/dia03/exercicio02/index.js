let name = prompt("Digite o nome:")

let newName = ""

let caracter = prompt("Qual o caracter que deseja substituir?")

let newCaracter = prompt("Por qual o caracter que deseja substituir?")

for (let i = 0; i <= name.length; i++ ){
  if(name[i] == caracter){
    newName += newCaracter
  }
  else {
    newName += name[i]
  }
}

alert("O novo nome é " + newName)
