const numero = prompt(
    "Olá, eu sou o Robô da Tabuada!\n" +
    "Informe o número que voce deseja calcular a tabuada:"
)
let resultado = ""

for (let fator = 1; fator <= 10; fator++) {
    resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n"   
}
alert("Resultado da tabuada " + numero + ":\n\n" + resultado)