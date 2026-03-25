// Solicita os números ao usuário
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

// Solicita a operação
let operacao = prompt("Digite a operação (+, -, *, /):");

// Validação dos números
if (isNaN(num1) || isNaN(num2)) {
    alert("Erro: você precisa digitar números válidos.");
} else {
    let resultado;

    // Escolhe a operação
    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Erro: divisão por zero não é permitida.");
                break;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operação inválida.");
    }

    // Exibe o resultado (se existir)
    if (resultado !== undefined) {
        alert(`Resultado: ${resultado}`);
    }
}