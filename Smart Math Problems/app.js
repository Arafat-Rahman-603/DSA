// Array to store common factors of two numbers
let arr = [];
// Variable to store the greatest common factor (GCD) found
let max = 0;

/**
 * Finds all common factors of two numbers n1 and n2, stores them in 'arr',
 * and updates 'max' to be the greatest common divisor.
 * @param {number} n1 - First number.
 * @param {number} n2 - Second number.
 */
function check(n1,n2){
    // Loop through possible divisors from the smaller of the two numbers down to 0
    if (n1 < n2) {
        for (let i = n1; i >= 0; i--) {
            if (n1 % i == 0 && n2 % i == 0) {
                arr.push(i)
            } 
        }
    } else {
        for (let i = n2; i >= 0; i--) {
            if (n1 % i == 0 && n2 % i == 0) {
                arr.push(i)
            } 
        }
    }
    // Find the maximum common factor in the array
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
}
check(20,10);
console.log(arr,max);

let i = 1;

/**
 * Attempts to reduce two numbers by subtraction and calls 'match' to find a common factor.
 * @param {number} n1 - First number.
 * @param {number} n2 - Second number.
 */
function maxFact(n1,n2) {
    if (n1 < n2) n2 = n2 - n1;
    else n1 =  n1 - n2;
    
    match(n1,n2)
}

/**
 * Recursively divides the numbers by 2 and prints/returns the value when they become equal.
 * @param {number} n1 - First number.
 * @param {number} n2 - Second number.
 */
function match(n1,n2){
    let a = n1/2;
    let b = n2/2;
    if(a == b) {
        console.log(a)
        return a
    }
    else match(a,b);
}

maxFact(10,20)


/**
 * Calculates the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm by subtraction.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The GCD.
 */
function gcd(a,b){
    if(a==b) return a;
    if(a<b) return gcd(a,b-a);
    else return gcd(a-b,b)
}

console.log(gcd(10,20))



let num =  30;

// Finds and prints all divisors of 'num' efficiently by checking up to its square root.
for (let i = 0; i <= Math.sqrt(num); i++) {
    if (num%i==0) {
        console.log(i) // Print the divisor i
        if(i*i!==num) console.log(num/i) // Print the corresponding symmetric divisor num/i
    }
}


// --- Exercise: Check if a number is a prime number ---
let searchPrimeNum = 10;
let primeArr = [];

/**
 * Finds all prime numbers from 2 up to searchPrimeNum and stores them in primeArr.
 * @param {number} searchPrimeNum - The upper limit to search for primes.
 * @returns {number[]} The array of prime numbers found.
 */
function findPrime(searchPrimeNum){
    // Loop through all numbers from 2 to searchPrimeNum
    for (let i = 2; i <= searchPrimeNum; i++) {
        let isPrime = true;
        // Check if i is divisible by any number up to its square root
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        // If the number is prime, push it to primeArr
        if (isPrime) {
            primeArr.push(i);
        }
    }
    return primeArr;
}

// Log the result of finding primes up to searchPrimeNum
console.log(findPrime(searchPrimeNum));

// Log the final array containing the prime numbers
console.log(primeArr);

