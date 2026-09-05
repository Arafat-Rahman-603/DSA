// ─────────────────────────────────────────────────────────────
//  Binary Search Algorithm
//  Time Complexity  : O(log n)  – halves the search space each step
//  Space Complexity : O(1)      – iterative, no extra memory used
//  Pre-condition    : The input array MUST be sorted in ascending order
// ─────────────────────────────────────────────────────────────

/**
 * Searches for a target value in a sorted array using Binary Search.
 *
 * @param {number[]} arr   - A sorted array of numbers
 * @param {number}   first - The starting index of the search range (inclusive)
 * @param {number}   last  - The ending index of the search range (inclusive)
 * @param {number}   trg   - The target value to search for
 * @returns {number} The index of the target if found, otherwise -1
 */
const binarySearch = (arr, first, last, trg) => {
    while (first <= last) {
        // Calculate the middle index (avoids integer overflow vs (first+last)/2)
        const mid = Math.floor((first + last) / 2);

        if (arr[mid] === trg) {
            return mid; // Target found — return its index
        }

        if (arr[mid] > trg) {
            // Target is in the LEFT half — discard the right half
            last = mid - 1;
        } else {
            // Target is in the RIGHT half — discard the left half
            first = mid + 1;
        }
    }

    return -1; // Target was not found in the array
};

// ─── Test ─────────────────────────────────────────────────────
const arr = [2, 4, 6, 8, 11, 14, 15];

console.log("Array          :", arr);
console.log("Searching for  : 14");
console.log("Found at index :", binarySearch(arr, 0, arr.length - 1, 14)); // → 5

console.log("Searching for  : 7  (not in array)");
console.log("Found at index :", binarySearch(arr, 0, arr.length - 1, 7));  // → -1
