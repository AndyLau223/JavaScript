const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInputNumber() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDesription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDesription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  //  craete an object
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
}

function add() {
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', currentResult, enteredNumber);
  //  craete an object
  writeToLog('Add', initialResult, enteredNumber, currentResult);
}

  function subtract() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', currentResult, enteredNumber);

    writeToLog('subtract',initialResult,enteredNumber, currentResult);
  }

  function multiply() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', currentResult, enteredNumber);
    writeToLog('multiply', initialResult, enteredNumber, currentResult)
  }

  function divide() {
    const enteredNumber = getUserInputNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    writeToLog('divide', initialResult, enteredNumber, currentResult);
  }
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
