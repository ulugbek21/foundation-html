const month = "July";
var day = "Thursday";
let year = 2022;

console.log(month);
console.log(day);
console.log(year);

day = "Friday"

year = year + 1

console.log(day)
console.log(year)

day += " and Saturday"

console.log(day)


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