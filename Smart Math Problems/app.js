let arr = [];
let max = 0;

function check(n1,n2){
    if (n1 < n2) {
        for (let i = n1; i >= 0; i--) {
            if (n1 % i == 0 && n2 % i == 0) {
                arr.push(i)
            } 
        }
}else{
           for (let i = n2; i >= 0; i--) {
            if (n1 % i == 0 && n2 % i == 0) {
                arr.push(i)
            } 
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
}
check(20,10);
console.log(arr,max);

let i = 1;

function maxFact(n1,n2) {
    if (n1 < n2) n2 = n2 - n1;
    else n1 =  n1 - n2;
    
    match(n1,n2)
}

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


function gcd(a,b){
    if(a==b) return a;
    if(a<b) return gcd(a,b-a);
    else return gcd(a-b,b)
}

console.log(gcd(10,20))

