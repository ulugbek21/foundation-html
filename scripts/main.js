const month = "July";
var day = "Thursday";
let year = 2022;

day = "Friday"

year = year + 1

day += " and Saturday"



var ulugbek = document.getElementById("ulugbek")


setInterval(function () {
    var date = new Date()
    var currentTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    ulugbek.innerHTML = currentTime
}, 1000)


var firstNumber = document.getElementById("first-number")
var secondNumber = document.getElementById("second-number")

var calculateButton = document.getElementById("calculate")
var result = document.getElementById("result")

var myFunction = function () {
    result.innerHTML = parseInt(firstNumber.value) + parseInt(secondNumber.value);
}

calculateButton.addEventListener("click", myFunction)

// Arithemtic operators

// 1. Addition +
// 2. Subtraction -
// 3. Multiplication *
// 4. Division /  (e.g. 10 / 5)
// 5. Modulus %


// Boolean expression

// 1. true
// 2. false

// Calculator minimal
var button5 = document.getElementById("button-5")
var button6 = document.getElementById("button-6")
var buttonPlus = document.getElementById("button-plus")
var buttonMinus = document.getElementById('button-minus')
var buttonEqual = document.getElementById("button-equal")
var buttonClean = document.getElementById("button-clean")

var calculationResult = document.getElementById("calculation-result")

var finalResult = 0
var currentValue = ""

var operation = ""
var equalPressed = false
var lastButtonWasOperation = false

buttonClean.addEventListener("click", () => {
    // calculationResult.removeChild(calculationResult.lastChild)
    calculationResult.innerHTML = ""
    currentValue = ""
})

button5.addEventListener("click", function () {
    if (equalPressed) {
        calculationResult.innerHTML = ""
        equalPressed = false
    }
    fiveNode = document.createTextNode("5")
    calculationResult.appendChild(fiveNode)

    currentValue += "5"
    lastButtonWasOperation = false
})

button6.addEventListener("click", function () {
    if (equalPressed) {
        calculationResult.innerHTML = ""
        equalPressed = false
    }
    sixNode = document.createTextNode("6")
    calculationResult.appendChild(sixNode)

    currentValue += "6"
    lastButtonWasOperation = false
})

buttonPlus.addEventListener("click", function () {
    if (lastButtonWasOperation && operation == "+") {
        return
    } else if (lastButtonWasOperation && operation == "-") {
        calculationResult.removeChild(calculationResult.lastChild)
        operation = "+"
        return
    }
    plusNode = document.createTextNode("+")
    calculationResult.appendChild(plusNode)

    finalResult += parseInt(currentValue)
    currentValue = ""
    operation = "+"
    lastButtonWasOperation = true
})

buttonMinus.addEventListener("click", function () {
    if (lastButtonWasOperation && operation == "-") {
        return
    } else if (lastButtonWasOperation && operation == "+") {
        operation = "-"
        calculationResult.removeChild(calculationResult.lastChild)
        return
    }
    minusNode = document.createTextNode("-")
    calculationResult.appendChild(minusNode)

    if (!lastButtonWasOperation) {
        finalResult -= parseInt(currentValue)
    }
    
    currentValue = ""
    operation = "-"
    lastButtonWasOperation = true
})

buttonEqual.addEventListener("click", function () {
    switch (operation) {
        case "+":
            finalResult += parseInt(currentValue)
            break;
        case "-":
            finalResult -= parseInt(currentValue)
        default:
            break;
    }

    currentValue = ""
    operation = ""
    calculationResult.innerHTML = finalResult
    finalResult = 0
    equalPressed = true
})