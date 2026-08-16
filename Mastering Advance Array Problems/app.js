import PromptSync from "prompt-sync";

const prompt = PromptSync();

const arrLength = Number(prompt("Enter the size of array: "))

let arr = new Array(arrLength);

for (let i = 0; i < arrLength; i++) {
    arr[i] = Number(prompt("Enter the element of array: "));
}

const copy = arr[0];

for (let i = 0; i < arr.length - 1; i++) {

    arr[i] = arr[i + 1]

}

arr[arr.length - 1] = copy;
console.log(arr)



let arr2 = [1, 2, 3, 4, 5]
const copy2 = arr2[arr2.length - 1];

for (let i = arr2.length - 1; i > 0; i--) {

    arr2[i] = arr2[i - 1]

}

arr2[0] = copy2;
console.log(arr2)


let numberOfExecution = Number(prompt("Enter the number of execution : "));

let executionalText = prompt("Give the executional text :");

let perExecutionalNumber = Number(prompt("How many time you need to write text per execution : "));

for (let i = 0; i < numberOfExecution; i++) {
    for (let j = 0; j < perExecutionalNumber; j++) {
        console.log(executionalText)
    }
}



let arr3 = [1, 2, 3, 4, 5];
let arr3Copy1 = arr3[0];
let arr3Copy2 = arr3[1];


for (let i = 0; i < arr3.length - 3; i++) {

    arr3[i] = arr3[i + 2]

}

arr3[arr3.length - 1] = arr3Copy2;
arr3[arr3.length - 2] = arr3Copy1;


console.log(arr3)


const rotadOfTime = Number(prompt("Enter the eotad number : "));

let arr4 = [1, 2, 3, 4, 5];

for (let j = 0; j < rotadOfTime; j++) {
    const copy2 = arr4[arr4.length - 1];

    for (let i = arr4.length - 1; i > 0; i--) {

        arr4[i] = arr4[i - 1]

    }

    arr4[0] = copy2;
}

console.log(arr4);


(function () {
    let arr = [1, 2, 3, 4, 5];

    let temp = new Array(arr.length);

    let k = Number(prompt("Enter k value"));

    k = k % arr.length;

    for (let i = 0; i < arr.length; i++) {
        temp[i] = arr[(i + k) % arr.length];
    }

    console.log(temp);
})();


(function () {
    let arr = [1, 2, 3, 4, 5];
    let k = 2;

    k = k % arr.length;

    reverse(0, k - 1);
    reverse(k, arr.length - 1);
    reverse(0, arr.length - 1);

    function reverse(a, b) {
        while (a < b) {
            let tmp = arr[a];
            arr[a] = arr[b];
            arr[b] = tmp;

            a++;
            b--;
        }
    }

    console.log(arr);
})();


function removeDuplicates(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            count++
        }

    }
    console.log(count)
}

removeDuplicates([1, 2, 2, 3, 4, 4])


function mergeSortedArray(arr1, arr2) {
    let marge = new Array(arr1.length + arr2.length);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            marge[k++] = arr1[i++]
        } else {
            marge[k++] = arr2[j++]
        }
    }
    while (i < arr1.length) {
        marge[k++] = arr1[i++]
    }
    while (j < arr2.length) {
        marge[k++] = arr2[j++]
    }

    console.log(marge)
}

mergeSortedArray([2, 5, 6], [1, 3, 4, 7]);


