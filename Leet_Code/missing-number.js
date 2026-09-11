/**
 * Approach 1: Brute Force / Linear Search Approach
 * Time Complexity: O(n^2) - checks every number from 0 to n against all elements in nums
 * Space Complexity: O(n) - copies the original array into a new array
 * 
 * @param {number[]} arr
 * @return {number}
 */
var missingNumberBruteForce = function(arr) {
    // Make a copy of the input array
    var nums = [];
    let num = 0;
    while (num < arr.length) {
        nums[num] = arr[num];
        num++;
    }

    let lengthOfNum = arr.length;
    let i = 0;

    // Check each number from 0 up to n (lengthOfNum)
    // To find which one is missing from the original array
    let j = 0;
    let ifFound = false;
    while (i < lengthOfNum + 1) {
        j = 0;
        ifFound = false;

        // Search through the array to see if current number 'i' exists
        while (j < lengthOfNum) {
            if (i == nums[j]) {
                ifFound = true;
                break;
            }
            j++;
        }

        // If the number 'i' was never found in the array, it's the missing one
        if (!ifFound) {
            return i;
        }
        i++;
    }
};



/**
 * Approach 2: Mathematical Formula (Gauss Sum Formula) - Optimal
 * Sum of first n natural numbers = n * (n + 1) / 2
 * The missing number is: (Expected sum from 0 to n) - (Actual sum of array elements)
 * 
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only uses a couple of variables
 * 
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function(arr) {
    let n = arr.length;

    // Calculate the expected sum of numbers from 0 to n
    let expected = n * (n + 1) / 2;

    // Calculate the actual sum of all numbers present in the array
    let actual = 0;
    for (let num of arr) {
        actual += num;
    }

    // The difference between expected and actual sum gives the missing number
    return expected - actual;
};

// Example test case:
// Input array: [3, 0, 1] (contains 3 numbers, so range is 0 to 3)
// Expected numbers: 0, 1, 2, 3 -> sum = 6
// Actual sum: 3 + 0 + 1 = 4
// Missing number = 6 - 4 = 2
console.log(missingNumber([3, 0, 1])); // Output: 2