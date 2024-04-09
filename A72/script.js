function resolverSituacao() {
    // Pegar os valores inseridos no formulário
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var peso = parseFloat(document.getElementById("peso").value);

    // Verificar se a idade é par ou ímpar
    var mensagemIdade = (idade % 2 === 0) ? "par" : "ímpar";

    // Calcular o ano atual
    var anoAtual = new Date().getFullYear();

    // Criar a mensagem para imprimir todos os anos, do ano atual até o ano de nascimento
    var anosDeNascimento = "";
    for (var ano = anoAtual; ano >= anoAtual - idade; ano--) {
        anosDeNascimento += ano + "<br>";
    }

    // Mostrar os resultados na página
    document.getElementById("resultado").innerHTML = "<p>Nome: " + nome + "</p>" +
    "<p>Idade: " + idade + " (idade " + mensagemIdade + ")</p>" +
    "<p>Peso: " + peso + "</p>" +
    "<p>Anos de Nascimento:<br>" + anosDeNascimento + "</p>";
}