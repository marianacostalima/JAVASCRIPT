// Função para converter numeral romano em decimal
function convertRomanNumeral() {
  var inputRomanNumeral = document.getElementById("inputNumeral").value.toUpperCase(); // Obtém o numeral romano e converte para maiúsculas
  var decimalResult = 0; // Inicializa o resultado decimal como 0

  for (var i = 0; i < inputRomanNumeral.length; i++) {
    var current = romanToDecimal(inputRomanNumeral.charAt(i)); // Obtém o valor decimal  do numeral romano
    var next = romanToDecimal(inputRomanNumeral.charAt(i + 1)); // Obtém o valor decimal do próximo numeral romano

    if (next && current < next) { // Verifica se há um próximo caractere e se o valor atual é menor do que o próximo valor
      decimalResult += (next - current); // Subtrai o valor atual pelo do próximo valor e adiciona ao resultado decimal
      i++; // Incrementa i para pular o próximo caractere
    } else {
      decimalResult += current; // Adiciona o resultado decimal
    }
  }

  document.getElementById("outputResult").innerHTML = decimalResult; // Define o resultado decimal 
}

// converter um caractere romano em decimal
function romanToDecimal(character) {
  switch (character) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return 0; // Retorna 0 para caracteres romanos inválidos
  }
}

// Adiciona um clique ao botão
document.getElementById("convertButton").addEventListener("click", convertRomanNumeral);
