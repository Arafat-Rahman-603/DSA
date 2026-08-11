let a = "10";
let b = 10;
let age = prompt("Enter your age for check eligibilty of voting");
age = Number(age); //type casting

console.log(a + b); // contatination bcz one is string
console.log(b + a); // contatination
console.log(b - a); // 0 because the `-` operator triggers implicit type coercion, converting the string "10" to a number
console.log(a * b); // 100 because * operator triggers implicit type coercion, converting the string "10" to a number
console.log(a / b); // 1 because / operator triggers implicit type coercion, converting the string "10" to a number
console.log(a % b); // 0 because % operator triggers implicit type coercion, converting the string "10" to a number

if (age < 18) {

    console.Log("You'r eligibilty of voting");

} else if (typeof age !== Number || isNaN(age)) {

    console.Log("Invalide input");

} else {

    console.Log("You'r not eligibilty of voting");

} 