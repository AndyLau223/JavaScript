const defaultResult = 0;
let currentResult = defaultResult;
let result;

function getUserInputNumber() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDesription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDesription);
}

function add() {
  const enteredNumber = getUserInputNumber();
  currentResult += enteredNumber;
  createAndWriteOutput('+', currentResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInputNumber();
  currentResult -= enteredNumber;
  createAndWriteOutput('-', currentResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserInputNumber();
  currentResult *= enteredNumber;
  createAndWriteOutput('*', currentResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserInputNumber();
  currentResult /= enteredNumber;
  createAndWriteOutput('/', currentResult, enteredNumber);
}

addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract);

multiplyBtn.addEventListener('click', multiply);

divideBtn.addEventListener('click', divide);
