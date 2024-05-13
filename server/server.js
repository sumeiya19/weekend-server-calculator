const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calcHistory = [] // store hardcoded history



// Here's a wonderful place to make some routes:

// GET /calculations
// Will respond with the calcHistory array of objects

app.get('/getHistory', (req, res) => {
res.send(calcHistory)
})
// POST /calculations
app.post('/postHistory', (req, res) => {
  let newHistory = req.body
  console.log("touchdown /postHistory, incoming history:", newHistory);
// Create and call a function that will call a result
  let result = calcResult(newHistory)
  console.log("Result is:", result);

  newHistory.result = result
  console.log("New Histroy to store:", newHistory);

  calcHistory.push(newHistory)
  // Store the numbers in variables and convert to Number
  newHistory.num1 = Number(newHistory.num1)
  newHistory.num2 = Number(newHistory.num2)
 
  // Create a function that will provide a result
  calcResult(newHistory)
      // Switch statement that uses the operator and performs the calculation
      let num1 = toCalculate.num1
      let num2 = toCalculate.num2
      //* Will use the operator to determine which arithmetic to do. 
      switch(toCalculate.operator){
      case "+":
        break; 
      case "-":
        break;
      case "*":
        break;
      case "/":
        break;
      default:
        return NaN
    }
    // Store a new histroy object with the 4 parts
  res.sendStatus(200)
})

let calcResult = (toCalculate) => {
console.log("calcResult() called from /postHistory");
}


// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
