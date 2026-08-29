// Import prompt-sync module for reading user inputs synchronously from the terminal
import PromptSync from "prompt-sync";

const prompt = PromptSync();

// --- Exercise 1: Rotate array left by 1 element based on user input size and values ---
const arrLength = Number(prompt("Enter the size of array: "))

let arr = new Array(arrLength);

// Read elements for the array
for (let i = 0; i < arrLength; i++) {
    arr[i] = Number(prompt("Enter the element of array: "));
}

const copy = arr[0]; // Store the first element to move it to the end

// Shift all elements left by 1 position
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
}

arr[arr.length - 1] = copy; // Place the stored first element at the end
console.log(arr)



// --- Exercise 2: Rotate array right by 1 element ---
let arr2 = [1, 2, 3, 4, 5]
const copy2 = arr2[arr2.length - 1]; // Store the last element

// Shift all elements right by 1 position
for (let i = arr2.length - 1; i > 0; i--) {
    arr2[i] = arr2[i - 1]
}

arr2[0] = copy2; // Place the stored last element at the beginning
console.log(arr2)


// --- Exercise 3: Print a text multiple times per execution for a given number of executions ---
let numberOfExecution = Number(prompt("Enter the number of execution : "));

let executionalText = prompt("Give the executional text :");

let perExecutionalNumber = Number(prompt("How many time you need to write text per execution : "));

// Nested loop to print the text according to user requirements
for (let i = 0; i < numberOfExecution; i++) {
    for (let j = 0; j < perExecutionalNumber; j++) {
        console.log(executionalText)
    }
}



// --- Exercise 4: Shift elements left by 2 positions manually ---
let arr3 = [1, 2, 3, 4, 5];
let arr3Copy1 = arr3[0]; // Save the first element
let arr3Copy2 = arr3[1]; // Save the second element

// Shift elements left by 2 indices
for (let i = 0; i < arr3.length - 3; i++) {
    arr3[i] = arr3[i + 2]
}

// Re-assign saved elements to the end positions
arr3[arr3.length - 1] = arr3Copy2;
arr3[arr3.length - 2] = arr3Copy1;


console.log(arr3)


// --- Exercise 5: Rotate array right by K times using nested loops ---
const rotadOfTime = Number(prompt("Enter the eotad number : "));

let arr4 = [1, 2, 3, 4, 5];

// Outer loop runs K times
for (let j = 0; j < rotadOfTime; j++) {
    const copy2 = arr4[arr4.length - 1]; // Save last element

    // Shift elements right by 1
    for (let i = arr4.length - 1; i > 0; i--) {
        arr4[i] = arr4[i - 1]
    }

    arr4[0] = copy2; // Put last element back to first position
}

console.log(arr4);


// --- Exercise 6: Rotate array using extra temporary array ---
(function () {
    let arr = [1, 2, 3, 4, 5];

    let temp = new Array(arr.length);

    let k = Number(prompt("Enter k value"));

    k = k % arr.length; // Handle k larger than array size

    // Copy element shifted by k steps to the temp array
    for (let i = 0; i < arr.length; i++) {
        temp[i] = arr[(i + k) % arr.length];
    }

    console.log(temp);
})();


// --- Exercise 7: Rotate array in-place using the three-reversals method ---
(function () {
    let arr = [1, 2, 3, 4, 5];
    let k = 2;

    k = k % arr.length;

    // Reverse first part, second part, then the whole array to rotate
    reverse(0, k - 1);
    reverse(k, arr.length - 1);
    reverse(0, arr.length - 1);

    // Helper function to reverse array elements between two indices in-place
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


// --- Exercise 8: Count number of unique values in a sorted array ---
function removeDuplicates(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        // If current element is different from the next element, increment unique count
        if (arr[i] !== arr[i + 1]) {
            count++
        }

    }
    console.log(count)
}

removeDuplicates([1, 2, 2, 3, 4, 4])


// --- Exercise 9: Merge two sorted arrays into a new sorted array ---
function mergeSortedArray(arr1, arr2) {
    let marge = new Array(arr1.length + arr2.length);
    let i = 0;
    let j = 0;
    let k = 0;
    
    // Compare elements from both arrays and put them in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            marge[k++] = arr1[i++]
        } else {
            marge[k++] = arr2[j++]
        }
    }
    
    // Copy remaining elements of arr1
    while (i < arr1.length) {
        marge[k++] = arr1[i++]
    }
    
    // Copy remaining elements of arr2
    while (j < arr2.length) {
        marge[k++] = arr2[j++]
    }

    console.log(marge)
}

mergeSortedArray([2, 5, 6], [1, 3, 4, 7]);



