// Input array of numbers to find the majority element in
let nums = [2, 2, 1, 1, 1, 2, 2];

/**
 * Finds the majority element in the array using the Boyer-Moore Voting Algorithm.
 * @param {number[]} nums - The input array.
 * @returns {number} The majority element.
 */
let ele = (nums) => {
    let ele = nums[0]; // Candidate element initialization
    let count = 0;      // Counter for the candidate element

    for (let i = 0; i < nums.length; i++) {
        // If the count drops to 0 and we see a different element, we update the candidate
        if (ele !== nums[i] && count == 0) {
            ele = nums[i];
        }
        // If we see a different element, we decrement the count
        if (ele !== nums[i] && count !== 0) {
            --count;
        }
        // If we see the candidate element, we increment the count
        if (ele == nums[i]) {
            count++
        }
    }
    return ele
}

// Log the majority element candidate
console.log(ele(nums))

