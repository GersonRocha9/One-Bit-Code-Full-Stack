function borderProgram () {
  let name = prompt("Qual o nome da nave?")
  let velocity
  let newVelocity = 0;

  let opcao = prompt("Digite apenas o número da opção desejada:\n1 - Acelerar a nave em 5km/s\n2 - Desacelerar em 5km/s\n3 - Imprimir dados de bordo\n4 - Sair do Programa")

  switch (opcao) {
      case '1':
        newVelocity = velocity + 5;
        alert("Velocidade aumentada em 5km/s. A velocidade está em: " + newVelocity + "km/s")
        break

      case '2': 
        if (velocity <= 0) {
          newVelocity = 0;
          alert("A nave está parada. Não há como diminuir a velocidade.")          
        } else {
          newVelocity = velocity - 5;
          alert("Velocidade diminuída em 5km/s. A velocidade está em: " + newVelocity + "km/s")
        }
        break
  

      case '3':
        alert("Nome da nave: " + name + "\nVelocidade atual: " + newVelocity)
        break

      case '4':
        alert("Saindo do programa... Clique em OK para fechar.")
        return(0)
        break
        
      default:
        alert("Opção não encontrada")
        return(borderProgram())
  }
  
}

borderProgram()