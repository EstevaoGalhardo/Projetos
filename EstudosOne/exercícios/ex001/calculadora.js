const entrada1 = prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo número:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const mutiplicacao = x * y
const divisao = x / y

alert(
    "Resultado:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMutiplicação: " + mutiplicacao +
    "\nDivisão: " + divisao 
)