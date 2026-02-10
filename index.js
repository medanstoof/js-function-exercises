function simpleButtonClicked() {
    console.log("Simple button was clicked!");
}

function inputKeyDown() {
    console.log("Some button was pressed!");
}

function inputKeyDownWithParameter(event) {
    const pressedKey = event.key;
    const outputMessage = pressedKey + " was pressed!"
    console.log(outputMessage);
}

function inputReadingButtonClicked() {
    const inputField = document.getElementById("input-to-be-read");
    const inputFieldContent = inputField.value;
    console.log(inputFieldContent);
}

function calculatorButtonClicked() {
    const firstInput = document.getElementById("calculator-first-input");
    const operator = document.getElementById("calculator-operator-select");
    const secondInput = document.getElementById("calculator-second-input");

    const firstInputValue = parseFloat(firstInput.value);
    const operatorValue = operator.value;
    const secondInputValue = parseFloat(secondInput.value);

    let result = "";
    switch(operatorValue) {
        case "+":
            result = firstInputValue + secondInputValue;
            break;
        case "-":
            result = firstInputValue - secondInputValue;
            break;
        case "*":
            result = firstInputValue * secondInputValue;
            break;
        case "/":
            result = firstInputValue / secondInputValue;
            break;
        default:
            result = "Invalid input!"
    }

    console.log(result);
}