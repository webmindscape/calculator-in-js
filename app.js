var operation = prompt("Choose an operation: add, subtract, multiply, or divide")

var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));

var result;

if (operation === "add") {
    result = num1 + num2;
} else if (operation === "subtract") {
    result = num1 - num2;
} else if (operation === "multiply") {
    result = num1 * num2;
} else if (operation === "divide") {
    if (num2 === 0) {
        alert("Cannot divide by zero!");
    } else {
        result = num1 / num2;
    }
} else {
    alert("Invalid operation!");
}

alert("Result: " + result);
