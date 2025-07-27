let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById(
    "display"
  ).value = `${currentInput} ${operator} ${previousInput}`;
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  previousInput = "";
  document.getElementById("display").value = "";
}
