// ==========================================
// Everything About Loops in JavaScript
// ==========================================

// ------------------------------------------
// 1. STANDARD FOR LOOP EXAMPLES
// ------------------------------------------

// Example 1: Sum of first N natural numbers
let naturalSum = 5;
let sum = 0;

for (let i = 1; i <= naturalSum; i++) {
    sum += i;
}
console.log("Sum of first " + naturalSum + " natural numbers:", sum); // Output: 15


// Example 2: Finding factors of a number
let factorialNum = 4;
console.log(`\nFactors of ${factorialNum}:`);

for (let i = 1; i <= factorialNum; i++) {
    if (factorialNum % i === 0) {
        console.log(i); // Prints 1, 2, 4
    }
}


// Example 3: Prime Number Check
let primeNum = 16;
let isPrime = true;

for (let i = 2; i <= Math.floor(primeNum / 2); i++) {
    if (primeNum % i === 0) {
        isPrime = false;
        break; // Exit loop early once a factor is found
    }
}

if (isPrime) {
    console.log(`${primeNum} is a Prime Number`);
} else {
    console.log(`${primeNum} is Not Prime`);
}


// ------------------------------------------
// 2. WHILE LOOP EXAMPLES
// ------------------------------------------
// Best used when the number of iterations is NOT known beforehand.

// Example: Reversing digits of a number (e.g., 1234 -> 4321)
console.log("\n--- While Loop: Reversing Digits ---");
let numToReverse = 1234;
let reversedNum = 0;
let tempNum = numToReverse;

while (tempNum > 0) {
    let lastDigit = tempNum % 10;
    reversedNum = (reversedNum * 10) + lastDigit;
    tempNum = Math.floor(tempNum / 10);
}
console.log(`Original: ${numToReverse}, Reversed: ${reversedNum}`);


// ------------------------------------------
// 3. DO...WHILE LOOP EXAMPLES
// ------------------------------------------
// Guarantees execution at least ONCE before checking condition.

console.log("\n--- Do...While Loop ---");
let count = 1;
do {
    console.log(`Count is: ${count}`);
    count++;
} while (count <= 3);


// ------------------------------------------
// 4. FOR...OF LOOP (Iterating over Iterables)
// ------------------------------------------
// Used to loop directly over values of Arrays, Strings, Sets, etc.

console.log("\n--- For...Of Loop (Array & String) ---");
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

let greeting = "JS";
for (let char of greeting) {
    console.log("Char:", char);
}


// ------------------------------------------
// 5. FOR...IN LOOP (Iterating over Object Properties)
// ------------------------------------------
// Used to loop over key names / properties of an object.

console.log("\n--- For...In Loop (Objects) ---");
let student = {
    name: "Arafat",
    age: 22,
    course: "Computer Science"
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}


// ------------------------------------------
// 6. LOOP CONTROL STATEMENTS: BREAK & CONTINUE
// ------------------------------------------
// break: Exits the loop immediately.
// continue: Skips current iteration and jumps to next iteration.

console.log("\n--- Break and Continue ---");
console.log("Using continue to skip even numbers:");
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) continue; // Skip even numbers
    console.log(i); // Prints 1, 3, 5
}

console.log("Using break to stop loop at 3:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i); // Prints 1, 2
}


// ------------------------------------------
// 7. NESTED LOOPS (Pattern Printing Example)
// ------------------------------------------
console.log("\n--- Nested Loop (Pattern) ---");
let rows = 4;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
