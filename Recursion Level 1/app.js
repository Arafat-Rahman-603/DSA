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