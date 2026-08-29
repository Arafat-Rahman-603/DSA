// --- Exercise 1: Recursive function to print numbers from N down to 1 ---
function printN(n){
    if(n <= 0) return; // Base case: stop when n is 0 or less
    console.log(n);    // Print current number
    printN(n-1)        // Recursive call with n-1
}

printN(5);

// --- Exercise 2: Recursive function to sum numbers from N down to 1 ---
let sum = 0;
function sumf(n){
    if(n <= 0) return; // Base case: stop when n is 0 or less
    sum += n;          // Add current number to sum accumulator
    sumf(--n)          // Recursive call with decremented n
}

sumf(3)
console.log(sum)

// --- Exercise 3: Recursive function to calculate factorial of N ---
function fact(n) {
    if(n <= 1) return 1; // Base case: factorial of 1 or less is 1
    return n*fact(n-1)   // Recursive step: n * factorial(n-1)
}

console.log(fact(10))


// --- Exercise 4: Recursive function to print sum of Fibonacci sequence up to N terms ---
let a = 0;
let b = 1;
let sum_f = 1;
function fSum(n){
    let c = a+b;
    a=b;
    b=c;
    sum_f += c;

    if(n==0)return; // Base case
    console.log(sum_f)
    fSum(n-1) // Recursive step
}

fSum(5)

// --- Exercise 5: Recursive Fibonacci finder ---
function fibo(n){
    if( n==1) return 1; // Base case
    return fibo(n-1) + fibo(n-2); // Recursive step (Note: may stack overflow for values where n <= 0 is reached)
}

console.log(fibo(5))