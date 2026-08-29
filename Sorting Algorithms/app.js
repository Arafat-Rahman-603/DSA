// --- Bubble Sort / Selection Sort variant for sorting an array in ascending order ---
let arr = [1, 3, 2, 4, 6, 5];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        // If current element is greater than the next element, swap them
        if (arr[i] > arr[j]) {
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}

console.log(arr);


// --- Template / unfinished selection sort implementation ---
let arr2 = [2, 5, 1, 4, 3];
let min = arr2[0];

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        // Placeholder check condition (unfinished logic)
        if (condition) {

        }
    }
}

