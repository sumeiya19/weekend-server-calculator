
let currentOperator;

// Will take an operator from the buttons in the DOM
let setOperator = (event, op) => {
    event.preventDefault()
    currentOperator = op
    console.log("Current Operator is...", currentOperator);
}

// Create a function that will perfomr a GET request to retrieve a history

let getHistory = () => {
    console.log("getHistory working...");
    //Axios 
    axios({
        method: "GET",
        url: "/getHistory", 
        

    })
    .then((response)=> {
        console.log("response.data from /getHistory:", response.data);
        let history = response.data
         renderHistory(history)
        
       
    })
    .catch((error)=> {
        console.error("There was an error on GET /getHistory", error);
        alert: ("GET /getHistroy didn't work")
    })
}

getHistory()

// Will post new calculation to /postHistory route

let postHistory = (event) => {
    event.preventDefault()
    console.log("New History created...");

    // Create selectors for the two input fields to get values
        let numOne = document.getElementById("numOne").value
        let numTwo = document.getElementById("numTwo").value

let newHistory = {
    num1: numOne,
    num2: numTwo,
    operator: currentOperator,
}

    // Axios post request and send data
   axios({
    method: "POST",
    url: "/postHistory",
    data: newHistory
   })
   .then(() => {
    console.log("/postHistory succeeded! yay!");
    // Get history and re-rendered
    getHistory()
    // Clear Form
    clearForm()
   })
   .catch((error) => {
    console.error("There was an error on POST /postHistory", error)
    alert: ("POST /postHistroy didn't work")
   })

}

// Create a render function to display history on the DOM

let renderHistory = (calcHistory) => {
    console.log("render histroy(), incoming histroy",calcHistory);
    if(!calcHistory){
        return
    }

    // Selector for id "resultHistory"
    let resultHistory = document.getElementById("resultHistory")
    console.log("resultHistory:", resultHistory);

    resultHistory.innerHTML = ""

    for (let history of calcHistory){
        console.log("current history:", history);
        resultHistory.innerHTML += `<div>${history.num1}${history.operator} ${history.num2} ${history.result}</div>`

    }

    //! Rendering for recent result
    // Getting error
    let recentResult = document.getElementById("recentResult")
    let lastHistory = calcHistory[calcHistory.length - 1]
    // Will only render if last histroy exists
    if(lastHistory) {
    recentResult.innerHTML = `<div> ${lastHistory.result}</div>`
        // Loop over histroy
            // Append each history to resultHistory in a div
                //>div>histroy.num1 histroy.operator history.num2 = histroy.result</div>
    
    }
}

let clearForm = (event) => {
    event.preventDefault()
    // selectors for inputfields
    document.getElementById("calcForm").reset()
    currentOperator = undefined
}













//let firstNumber = null;
// Function for Plus Operator
//function plusOperator(event){
 //   event.preventDefault();
 //   console.log('plus works!');
//firstNumber = +document.getElementById("numberOne").value;
//console.log('First number check', firstNumber);

//}

//function subOperator(event){
   // event.preventDefault();
   // console.log('subtract works!');
   // firstNumber = +document.getElementById("numberOne").value;
   // console.log('First number check', firstNumber);
    
//}


// Function for equal operation
//function getCalculations(event) {
  //  event.preventDefault();
   // console.log("getCalculations() works!");
   // console.log("Event:", event);

    
   // if (firstNumber !== null) {
        // Retrieve the second number from the input field
     //   const secondNumber = +document.getElementById("numberTwo").value;
     //   console.log('Second number check', secondNumber);

       // let result;

        // Check the operation based on the button clicked
       // if (event.target.id === "addButton") {
         //   result = addNumbers(firstNumber, secondNumber);
       //     
       // }  console.log('Result:', result);
//}

//}

//function addNumbers(numberOne, numberTwo){
 //   return numberOne + numberTwo;
//}

function subNumbers(numberOne, numberTwo){
    return numberOne - numberTwo;
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
