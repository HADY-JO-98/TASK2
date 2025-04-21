//----------------task1----------------
let fullName = prompt("Enter your full name:");
let email = prompt("Enter your email:");
let trimmedName = fullName.trim();
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (emailPattern.test(email)) {
    console.log("✅ Valid Email");
} else {
    console.log("❌ Invalid Email");
}
console.log("Trimmed Name Length:", trimmedName.length);
let reversedName = trimmedName.split('').reverse().join('');
console.log("Reversed Name:", reversedName);
let nameParts = trimmedName.split(" ");
if (nameParts.length > 1) {
    console.log("First Word:", nameParts[0]);
} else {
    console.log("Only one word in the name.");
}
let lastThree = trimmedName.slice(-3);
console.log("Last 3 Characters:", lastThree);
//----------------task2----------------
let grades = [70.5, 88.9, 92.3, 60.7, 79.1];
console.log("Original Grades:", grades);
let roundedGrades = grades.map(grade => Math.round(grade));
console.log("Rounded Grades:", roundedGrades);
roundedGrades.unshift(55);
roundedGrades.push(99);
console.log("After unshift and push:", roundedGrades);
roundedGrades.shift(); // Remove first
roundedGrades.pop();   // Remove last
console.log("After shift and pop:", roundedGrades);
let indexOf89 = roundedGrades.indexOf(89);
console.log("Index of 89:", indexOf89 !== -1 ? indexOf89 : "Not Found");
let highest = Math.max(...roundedGrades);
let lowest = Math.min(...roundedGrades);
console.log("Highest Grade:", highest);
console.log("Lowest Grade:", lowest);
let sum = roundedGrades.reduce((acc, val) => acc + val, 0);
let average = sum / roundedGrades.length;
console.log("Average:", average.toFixed(1));