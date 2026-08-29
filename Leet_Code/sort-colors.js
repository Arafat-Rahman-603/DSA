/**
 * Sorts array of 0s, 1s, and 2s in-place (Dutch National Flag algorithm).
 * @param {number[]} nums - Array to sort.
 * @returns {number[]} The sorted array.
 */
var sortColors = function (nums) {
    let j = 0; // Pointer for boundary of 0s (low)
    let i = 0; // Current scanning element pointer (mid)
    let k = nums.length - 1; // Pointer for boundary of 2s (high)

    while (i <= k) {
        // If current element is 0, swap with element at low pointer
        if (nums[i] === 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;

            j++;
            i++;
        }
        // If current element is 1, keep it in place and move scanning pointer
        else if (nums[i] === 1) {
            i++;
        }
        // If current element is 2, swap with element at high pointer
        else {
            let temp = nums[k];
            nums[k] = nums[i];
            nums[i] = temp;

            k--;
        }
    }

    return nums;

};

// Test sorting colors (0 = red, 1 = white, 2 = blue)
console.log(sortColors([1, 2, 0, 2, 1, 0, 1, 2, 0]))