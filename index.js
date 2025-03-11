const answerDisplay = document.getElementById("answer");

const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const buttonPlus = document.getElementById("+");

const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const buttonMinus = document.getElementById("-");

const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const buttonMultiply = document.getElementById("*");

const button0 = document.getElementById("0");
const buttonClear = document.getElementById("clear");
const buttonEquals = document.getElementById("=");
const buttonDivide = document.getElementById("/");

let currentInput = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";
let displayValue = "";

// Add event listeners to all buttons
button1.addEventListener("click", () => handleButtonClick("1"));
button2.addEventListener("click", () => handleButtonClick("2"));
button3.addEventListener("click", () => handleButtonClick("3"));
button4.addEventListener("click", () => handleButtonClick("4"));
button5.addEventListener("click", () => handleButtonClick("5"));
button6.addEventListener("click", () => handleButtonClick("6"));
button7.addEventListener("click", () => handleButtonClick("7"));
button8.addEventListener("click", () => handleButtonClick("8"));
button9.addEventListener("click", () => handleButtonClick("9"));
button0.addEventListener("click", () => handleButtonClick("0"));

buttonPlus.addEventListener("click", () => handleButtonClick("+"));
buttonMinus.addEventListener("click", () => handleButtonClick("-"));
buttonMultiply.addEventListener("click", () => handleButtonClick("*"));
buttonDivide.addEventListener("click", () => handleButtonClick("/"));

buttonClear.addEventListener("click", () => clearCalculator());
buttonEquals.addEventListener("click", () => calculateResult());

// Function to handle button clicks
function handleButtonClick(value) {
  if (value >= "0" && value <= "9") {
    // If the button is a number, add it to the current input
    currentInput += value;
    displayValue += value;
    updateDisplay(displayValue);
  } else if (["+", "-", "*", "/"].includes(value)) {
    // If the button is an operator
    if (currentInput !== "") {
      if (firstOperand === "") {
        firstOperand = currentInput;
      } else {
        secondOperand = currentInput;
        const result = calculate(firstOperand, secondOperand, operator);
        firstOperand = result;
        displayValue = result + value;
        updateDisplay(displayValue);
      }
      operator = value;
      currentInput = "";
      displayValue += value;
      updateDisplay(displayValue);
    }
  }
}

// Function to calculate the result
function calculateResult() {
  if (operator && firstOperand !== "" && currentInput !== "") {
    secondOperand = currentInput;
    const result = calculate(firstOperand, secondOperand, operator);
    displayValue = result;
    updateDisplay(displayValue);
    resetCalculator(result);
  }
}

// Function to perform arithmetic operations
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

// Function to update the display
function updateDisplay(value) {
  answerDisplay.textContent = value;
}

// Function to clear the calculator
function clearCalculator() {
  currentInput = "";
  operator = "";
  firstOperand = "";
  secondOperand = "";
  displayValue = "";
  updateDisplay("0");
}

// Function to reset the calculator after calculation
function resetCalculator(result) {
  currentInput = result.toString();
  operator = "";
  firstOperand = "";
  secondOperand = "";
  displayValue = result.toString();
}
