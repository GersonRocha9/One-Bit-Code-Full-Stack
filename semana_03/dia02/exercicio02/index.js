let distanciaEmAnosLuz = prompt("Digite a distância em anos-luz")

let opcao = prompt("Digite apenas o número da opção desejada:\n1 - Parsec(pc)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros(km)")

let distanciaConvertida

switch (opcao) {
    case '1':
      distanciaConvertida = distanciaEmAnosLuz * 0.306601
      alert("Distância em Anos-Luz: " + distanciaEmAnosLuz + "\nDistância em Parsec (PC): " + distanciaConvertida)
      break

    case '2': 
      distanciaConvertida = distanciaEmAnosLuz * 63241.1
      alert("Distância em Anos-Luz: " + distanciaEmAnosLuz + "\nDistância em Unidade Astronômica (UA): " + distanciaConvertida)
      break

    case '3':
      distanciaConvertida = distanciaEmAnosLuz * 9.5 * Math.pow(10, 12)
      alert("Distância em Anos-Luz: " + distanciaEmAnosLuz + "\nDistância em Quilômetros (km): " + distanciaConvertida)
      break

    default:
      alert("Distância em Anos-Luz: " + distanciaEmAnosLuz + "\nUnidade não identificada: Conversão fora do escopo")
}