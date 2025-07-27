let currentInput = "";
let currentOperation = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById(
    "display"
  ).value = `${currentInput} ${currentOperation} ${previousInput}`;
}

function appendOperation(operation) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
  document.getElementById(
    "display"
  ).value = `${previousInput} ${currentOperation}`;
}

function clearDisplay() {
  currentInput = "";
  currentOperation = "";
  previousInput = "";
  document.getElementById("display").value = "";
}
