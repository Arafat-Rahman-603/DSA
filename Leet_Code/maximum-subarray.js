// Test input array containing positive and negative integers
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

/**
 * Finds the contiguous subarray which has the largest sum and returns its sum.
 * This implementation uses Kadane's Algorithm.
 * @param {number[]} nums - The input array.
 * @returns {number} The maximum subarray sum.
 */
var maxSubArray = function (nums) {
    let max = - Infinity; // Initialize max sum to negative infinity
    let sum = 0;          // Tracks the current running sum

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; // Add current element to running sum
        
        // If current sum exceeds the maximum found so far, update max
        if (sum > max) {
            max = sum;
        }
        
        // If sum becomes negative, reset it to 0 as it would only decrease the sum of future subarrays
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};

// Log the maximum subarray sum to the console
console.log(maxSubArray(nums));