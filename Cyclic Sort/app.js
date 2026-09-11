let arr = [7, 6, 5, 3, 1, 4, 2];
let i = 0;

// Iterate through the array
while (i < arr.length) {
    // In cyclic sort (for numbers 1 to N), the correct index for a value is its value - 1
    // e.g., the number 5 should be at index 4
    let surIndx = arr[i] - 1;
    
    // Check if the current number is NOT at its correct index
    if (arr[i] !== arr[surIndx]) {
        // Swap the current number to its correct index
        [arr[i], arr[surIndx]] = [arr[surIndx], arr[i]];
    } else {
        // If the number is at the correct index, move to the next one
        i++;
    }
}

// Log the sorted array
console.log(arr);