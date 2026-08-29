
/**
 * Modifies the array in-place to remove all occurrences of target value val.
 * @param {number[]} nums - The input array.
 * @param {number} val - The target value to remove.
 * @returns {number[]} The prefix slice of the array with non-val elements.
 */
var removeElement = function(nums, val) {
    let k = 0; // Pointer for the next non-val element position

    // Iterate through the array; if element is not val, write it at index k
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    // Return a slice of the array containing only non-val elements up to index k
    return (nums.slice(0, k));

};

// Setup initial testing variables
let nums = [1, 4, 3, 4, 7, 8];
let k = removeElement(nums, 4);
console.log(k);
console.log(nums.slice(0, k));

