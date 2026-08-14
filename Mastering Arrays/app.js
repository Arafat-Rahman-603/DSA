import promptSync from "prompt-sync";

const prompt = promptSync();

let arr = [];
let sizeOfArr = Number(prompt("Enter the size of array: "));


for (let i = 0; i < sizeOfArr; i++) {
    arr[i] = Number(prompt("enter 1st element of array: "))

}

console.log(arr)



let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum)


let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i]
}
console.log(max)


let max1 = arr[0];
let max2 = arr[1];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
        max2 = max1;
        max1 = arr[i];
    } else if (arr[i] > max2 && arr[i] !== max1) {
        max2 = arr[i];
    }
}

console.log(`1st max: ${max1}, 2nd max: ${max2}`);


let reverseArrMethord1 = [];
let arr2 = new Array(arr.length);

for (let i = arr.length - 1; i >= 0; i--) {
    reverseArrMethord1.push(arr[i])
}

let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
    arr2[j] = arr[i]
    j++
}


    for (let i = 0; i < arr.length / 2; i++) {
    let tmp = arr[i];

    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
}


console.log("reverseArrMethord1 " + reverseArrMethord1)
console.log("arr2 " + arr2)
console.log("arr " + arr)


let arr3 = [1,0,1,0,1,0,0,0,1,1,1];

let k =0 ;

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === 0) {
        let tmp = arr3[k];
        arr3[k] = arr3[i];
        arr3[i] = tmp;
        k++;
    }
}

console.log(arr3)