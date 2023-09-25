const formElement = document.querySelector("#myForm");
const outputElement = document.querySelector(".output");
const inputElement = document.getElementById("romanInput");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let romanoNumber = inputElement.value.toUpperCase();

    if (romanoNumber === "") {
        outputElement.textContent = "Please enter a Roman numeral.";
        return;
    }

    const romanToDecimal = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let decimalNumber = 0;
    let index = 0;

    while (index < romanoNumber.length) {
        const currentDigit = romanoNumber[index];

        if (!romanToDecimal.hasOwnProperty(currentDigit)) {
            outputElement.textContent = "Invalid input - Please enter a valid Roman numeral.";

            inputElement.value = "";
            inputElement.focus();

            return;
        }

        const currentValue = romanToDecimal[currentDigit];
        const nextDigit = romanoNumber[index + 1];
        const nextValue = romanToDecimal[nextDigit];

        if (nextDigit && currentValue < nextValue) {
            decimalNumber += nextValue - currentValue;
            index += 2;
        } else {
            decimalNumber += currentValue;
            index++;
        }
    }

    inputElement.value = "";
    inputElement.focus();

    outputElement.textContent = `The decimal number  "${romanoNumber}" is: ${decimalNumber}`;
});