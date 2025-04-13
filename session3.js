//--------------------task4---------------------
let correctPIN = "1234";
let attempts = 0;
let maxAttempts = 3;
let balance = 1000;
let isAuthenticated = false;
while (attempts < maxAttempts) {
    let enteredPIN = prompt("Enter your PIN:");
    if (enteredPIN === null || enteredPIN.trim() === "") {
        alert("PIN cannot be empty.");
        continue;
    }
    if (enteredPIN === correctPIN) {
        isAuthenticated = true;
        break;
    } else {
        attempts++;
        alert(`Incorrect PIN. Attempts left: ${maxAttempts - attempts}`);
    }
}
if (!isAuthenticated) {
    alert("Too many failed attempts. Card blocked.");
} else {
    let choice;
    do {
        choice = prompt(
            "Welcome to the ATM!\n\nChoose an option:\n" +
            "1. Withdraw Money\n" +
            "2. Deposit Money\n" +
            "3. Check Balance\n" +
            "4. Exit"
        );
        switch (choice) {
            case "1":
                let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
                if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
                    alert("Please enter a valid amount.");
                } else if (withdrawAmount > balance) {
                    alert("Insufficient balance.");
                } else {
                    balance -= withdrawAmount;
                    alert(`Withdrawal successful. New balance: ${balance} EGP`);
                }
                break;
            case "2":
                let depositAmount = Number(prompt("Enter amount to deposit:"));
                if (isNaN(depositAmount) || depositAmount <= 0) {
                    alert("Please enter a valid amount.");
                } else {
                    balance += depositAmount;
                    alert(`Deposit successful. New balance: ${balance} EGP`);
                }
                break;
            case "3":
                alert(`Your current balance is: ${balance} EGP`);
                break;
            case "4":
                alert("Thank you for using our ATM. Goodbye!");
                break;
            default:
                alert("Invalid option. Please choose 1, 2, 3, or 4.");
        }
    } while (choice !== "4");
}
//--------------------task2---------------------
let studentName = prompt("Enter the student's name:");
let numSubjects = Number(prompt("Enter the number of subjects:"));
if (isNaN(numSubjects) || numSubjects <= 0) {
    alert("Please enter a valid number of subjects.");
} else {
    let totalScore = 0;
    for (let i = 1; i <= numSubjects; i++) {
        let subjectName = prompt(`Enter the name of subject ${i}:`);
        let grade;
        do {
            let gradeInput = prompt(`Enter the grade for ${subjectName}:`);
            grade = Number(gradeInput);
            if (isNaN(grade) || grade < 0 || grade > 100) {
                alert("Please enter a valid grade between 0 and 100.");
            }
        } while (isNaN(grade) || grade < 0 || grade > 100);
        totalScore += grade;
    }
    let average = totalScore / numSubjects;
    let status;
    if (average >= 50) {
        status = "Congratulations! You passed 🎉";
    } else {
        status = "Sorry, you failed ❌";
    }
    alert(
        `🎓 Student Grade Summary 🎓\n\n` +
        `Name: ${studentName}\n` +
        `Subjects: ${numSubjects}\n` +
        `Total Score: ${totalScore}\n` +
        `Average: ${average.toFixed(2)}\n` +
        `${status}`
    );
}
//--------------------task3---------------------
function calculate(num1, num2, operator) {
    if (operator === "+") {
        console.log(num1 + num2);
    } else if (operator === "-") {
        console.log(num1 - num2);
    } else if (operator === "*") {
        console.log(num1 * num2);
    } else if (operator === "/") {
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Error: Cannot divide by zero.");
        }
    } else {
        console.log("Invalid operator");
    }
}
calculate(10, 5, "+");
calculate(10, 5, "-");
calculate(10, 5, "*");
calculate(10, 5, "/");
calculate(10, 5, "^");
