// Função para trocar a cor de fundo da página
function changeBackgroundColor() {
    if (confirm("Deseja trocar a cor de fundo da página?")) {
        var color = prompt("Escolha uma cor (blue, red, green):").toLowerCase();
        document.body.style.backgroundColor = color;
    }
}

// Função para solicitar o nome do usuário e exibir uma mensagem de boas-vindas
function askUserName() {
    var name = prompt("Qual é o seu nome?");
    if (name != null && name !== "") {
        alert("Bem-vindo(a), " + name + "!");
    } else {
        alert("Bem-vindo(a)!");
    }
}

// Função para calcular a média de 3 números
function calculateAverage() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    var num3 = parseFloat(prompt("Digite o terceiro número:"));

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        var average = (num1 + num2 + num3) / 3;
        alert("A média dos números é: " + average.toFixed(2));
    } else {
        alert("Por favor, digite números válidos.");
    }
}