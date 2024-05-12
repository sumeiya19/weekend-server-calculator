let firstNumber = null;


// Function for Plus Operator
function plusOperator(event){
    event.preventDefault();
    console.log('plus works!');
firstNumber = +document.getElementById("numberOne").value;
console.log('First number check', firstNumber);

}

function subOperator(event){
    event.preventDefault();
    console.log('subtract works!');
    firstNumber = +document.getElementById("numberOne").value;
    console.log('First number check', firstNumber);
}


// Function for equal operation
function getCalculations(event){
event.preventDefault();
console.log("getCalculations() works!" );
if (firstNumber !== null) {
    // Retrieve the second number from the input field
    const secondNumber = +document.getElementById("numberTwo").value;
    console.log('Second number check', secondNumber);
    const result = addNumbers(firstNumber, secondNumber);
    console.log('Result:', result);
} else {
    console.error('Please enter the first number.');
}
}




function addNumbers(numberOne, numberTwo){
    return numberOne + numberTwo;
}

function subNumbers(numberOne, numberTwo){
    return numberOne + numberTwo;
}

function multiplyNumbers(numberOne, numberTwo){
    return numberOne * numberTwo;
}


function divideNumbers(numberOne, numberTwo) {
    // Check if the divisor is zero to prevent division by zero error
    if (numberTwo === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    return numberOne / numberTwo;
}
