const resultado = prompt("Escolha uma alternativa:\nA)\nB)\nC)")

const resultadoNumerico = parseFloat(resultado)

switch (resultadoNumerico) {
    case 1:
        alert("Oresultado é 'A'")
        break
    case 2:
        alert("Oresultado é 'B'")
    case 3:
        alert("Oresultado é 'C'")
    default:
        alert("Finalizando...")
}