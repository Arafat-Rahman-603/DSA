function printN(n){
    if(n <= 0) return;
    console.log(n);
    printN(n-1)
}

printN(5);

let sum = 0;
function sumf(n){
    if(n <= 0) return;
    sum += n;
    sumf(--n)
}

sumf(3)
    console.log(sum)

    function fact(n) {
        if(n <= 1) return 1;
        return n*fact(n-1)
    }

    console.log(fact(10))



    let a = 0;
    let b = 1;
    let sum_f = 1;
function fSum(n){
    let c = a+b;
    a=b;
    b=c;
    sum_f += c;

    if(n==0)return;
    console.log(sum_f)
    fSum(n-1)
}

fSum(5)

function fibo(n){
    if( n==1) return 1;
    return fibo(n-1) + fibo(n-2);
}

console.log(fibo(5))