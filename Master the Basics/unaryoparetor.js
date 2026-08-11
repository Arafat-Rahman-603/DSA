// Unary Operators in JavaScript
// Unary operators operate on a single operand.

// 1. Unary Plus (+) -> Converts operand to a Number
console.log("--- Unary Plus (+) ---");
let strNum = "25";
console.log(+strNum);       // 25 (number)
console.log(+true);         // 1
console.log(+false);        // 0
console.log(+"hello");      // NaN

// 2. Unary Negation (-) -> Converts operand to a Number and negates it
console.log("\n--- Unary Negation (-) ---");
let val = 10;
console.log(-val);          // -10
console.log(-"-15");        // 15

// 3. Increment (++) -> Pre-increment vs Post-increment
console.log("\n--- Increment (++) ---");
let x = 5;
console.log(++x); // 6 (Pre-increment: increments first, then returns value)

let y = 5;
console.log(y++); // 5 (Post-increment: returns current value, then increments)
console.log(y);   // 6

// 4. Decrement (--) -> Pre-decrement vs Post-decrement
console.log("\n--- Decrement (--) ---");
let a = 10;
console.log(--a); // 9 (Pre-decrement)

let b = 10;
console.log(b--); // 10 (Post-decrement)
console.log(b);   // 9

// 5. Logical NOT (!) -> Converts operand to Boolean and flips it
console.log("\n--- Logical NOT (!) ---");
console.log(!true);         // false
console.log(!0);            // true (0 is falsy)
console.log(!"");           // true (empty string is falsy)
console.log(!!"JS");        // true (Double NOT converts value to explicit Boolean)

// 6. typeof -> Returns data type of operand as a string
console.log("\n--- typeof ---");
console.log(typeof 100);       // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"


