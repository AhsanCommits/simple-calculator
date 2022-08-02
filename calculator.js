
// Require express in your calculator.js
const express = require('express');

/* 
Require body-parser which allow us to parse information 
that we get sent from the post request
So we have access to properties and variables 
So we can do our calculations 
*/
const bodyParser = require('body-parser');


// Setup express
const app = express()

// BodyParser works with Express, so we can say app.use
app.use(bodyParser.urlencoded({ extended: true }));

// Create a root route get method with app.get()
app.get("/", (req, res) => {
    // Send the index.html file from the root route as the response
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var operator = req.body.n3;
    var result;
    switch (operator) {
        case "/":
            result = Math.floor(num1 / num2);
            break;
        case "*":
            result = num1 * num2;
            break;
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
    }
    res.send(`<p style="display:flex;align-items:center;justify-content:center;height:90vh;font-size:4rem;">The result of the calculation is ${result}</p>`)

})

// Spin up our server on port 3000 with app.listen
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// Run server with nodemon
// nodemon calculator.js