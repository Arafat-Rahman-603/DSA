/**
 * Finds the index if the target is found, or the index where it would be if it were inserted in order.
 * This implementation uses Binary Search.
 * @param {number[]} nums - Sorted array of distinct integers.
 * @param {number} target - Target value to find or insert.
 * @returns {number} The insert position index.
 */
var searchInsert = function(nums, target) {
    let left = 0;                  // Left boundary pointer
    let right = nums.length - 1;   // Right boundary pointer

    while (left <= right) {
        // Find the middle element index
        let mid = Math.floor((left + right) / 2);

        // Target found at mid
        if (nums[mid] === target) {
            return mid;
        }

        // Adjust boundaries depending on search key comparison
        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // Target not found; left points to insertion position
    return left;
};

// Test output showing insert position of 4 in [1, 2, 3, 5, 6] (should output 3)
console.log(searchInsert([1,2,3,5,6],4));