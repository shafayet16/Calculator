const resultDisplay = document.getElementById("answer");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button.textContent));
});

function handleButtonClick(value) {
  if (value >= "0" && value <= "9") {
    currentInput += value;
    updateDisplay(currentInput);
  } else if (value === "clear") {
    clearCalculator();
  } else if (value === "=") {
    if (operator && firstOperand !== "" && currentInput !== "") {
      secondOperand = currentInput;
      const result = calculate(firstOperand, secondOperand, operator);
      updateDisplay(result);
      resetCalculator(result);
    }
  } else {
    if (currentInput !== "") {
      if (firstOperand === "") {
        firstOperand = currentInput;
      } else {
        secondOperand = currentInput;
        const result = calculate(firstOperand, secondOperand, operator);
        firstOperand = result;
        updateDisplay(result);
      }
      operator = value;
      currentInput = "";
    }
  }
}

function calculate(first, second, operator) {
  const num1 = parseFloat(first);
  const num2 = parseFloat(second);
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "";
  }
}

function updateDisplay(value) {
  resultDisplay.textContent = value;
}

function clearCalculator() {
  currentInput = "";
  operator = "";
  firstOperand = "";
  secondOperand = "";
  updateDisplay("0");
}

function resetCalculator(result) {
  currentInput = result.toString();
  operator = "";
  firstOperand = "";
  secondOperand = "";
}
