let name = prompt("Qual o seu nome, piloto?")
let velocity = 0
let newVelocity = prompt("Qual a velocidade que você gostaria de acelerar a nave?")
let confirmVelocity = confirm("Confirme a velocidade: " + newVelocity + "km/s")

if (newVelocity <= 0) {
  alert("A nave está parada. Considere partir e aumentar a velocidade")
} else if ( newVelocity < 40 ) {
  alert ("Você está devagar, podemos aumentar mais")
} else if ( newVelocity >= 40 && newVelocity < 80 ) {
  alert ("Parece uma boa velocidade para manter")
} else if ( newVelocity >= 80 && newVelocity < 100 ) {
  alert ("Velocidade alta. Considere diminuir")
} else {
  alert ("Velocidade perigosa. Controle automático forçado")
}

alert("Piloto: " + name + "\nVelocidade atual: " + newVelocity + "km/s")