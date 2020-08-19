function calcularMedia () {
  const nota1 = prompt("Qual a primeira nota?")
  const nota1Formatada = parseFloat(nota1)
  const nota2 = prompt("Qual a segunda nota?")
  const nota2Formatada = parseFloat(nota2)
  const media = (nota1Formatada+nota2Formatada)/2
  if (media >= 6.0) {
    alert("O aluno está aprovado")
  } else {
    alert("O aluno está reprovado")
  }
}