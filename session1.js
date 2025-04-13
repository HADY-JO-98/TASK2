//--------------------task1---------------------
let num1 = 10;
let num2 = 5;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
let x = num1;
console.log("Post-increment (x++):", x++);
console.log("After post-increment, x:", x);
x = num1;
console.log("Pre-increment (++x):", ++x);
//--------------------task2--------------------
let age = 20;
if (age === 20) {
    console.log("You are in the third grade.");
}
else if (age > 18) {
    console.log("Your age is:", age);
}
else {
    console.log("This age is not valid.");
}
//--------------------task3--------------------
let grade = "A"; // You can change this to test other values
switch (grade) {
    case "A+":
    case "A":
    case "A-":
        console.log("Excellent!");
        break;
    case "B+":
    case "B":
        console.log("Very Good!");
        break;
    case "C":
        console.log("Good");
        break;
    default:
        console.log("Invalid Grade");
}
