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
    for (let j = 1; j < arr.length; j++) {
        if (max1 < arr[i] || max2 < arr[j]) {
            max1 = arr[i];
            max2 = arr[j];
        }

    }
}
console.log(max)