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

calculateResult = () => {
  if (currentInput === "" || previousInput === "" || currentOperation === "") {
    return;
  }

  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current === 0 ? "cannot divide by zero" : prev / current;
      break;
    default:
      return;
  }
  document.getElementById("display").value = result.toString();
  currentInput = "";
  currentOperation = "";
  previousInput = result;
};
