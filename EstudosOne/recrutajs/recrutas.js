const primeiroNome = prompt("informe o primeiro nome:")
const sobrenome = prompt("informe o sbrenome do recruta:")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?")
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?")

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo " + campoDeEstudo +
    "\nIdade: " + (2022 - anoDeNascimento)
)