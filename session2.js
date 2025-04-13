//--------------------task1---------------------
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operator = prompt("Enter an operation (+, -, *, /):");
let result;
if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Cannot divide by zero.";
    }
} else {
    result = "Invalid operator.";
}
alert("Result: " + result);
//--------------------task2---------------------
let userInput = prompt("Enter a number:");
let number = Number(userInput);
if (isNaN(number) || userInput.trim() === "" || number <= 0) {
    alert("Please enter a valid number.");
} else {
    for (let i = 1; i <= number; i++) {
        console.log(i);
    }
}
//--------------------task3---------------------
let name = prompt("What is your name?");
if (name === null || name.trim() === "") {
    alert("No name entered.");
} else {
    let isConfirmed = confirm(`Are you sure your name is ${name}?`);
    if (isConfirmed) {
        console.log(`Welcome, ${name}!`);
    }
}
//--------------------task4---------------------
let userINput = prompt("Enter a number:");
let Number = Number(userInput);
if (isNaN(number) || userInput.trim() === "") {
    alert("Please enter a valid number.");
} else if (number > 0) {
    console.log("Positive Number");
} else if (number < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}