/**
 * Removes duplicate elements from a sorted array in-place.
 * @param {number[]} nums - The sorted array.
 * @returns {number} The count of unique elements in the array.
 */
var removeDuplicates = function (nums) {
    let count = 1; // Index pointer for unique elements (first element is always unique)
    
    // Iterate through the array and find values different from their subsequent neighbor
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[count] = nums[i + 1] // Put unique element at the count index
            count++
        }

    }
    // Return count of unique elements
    return count
};