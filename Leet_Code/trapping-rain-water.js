// Sample input heights representing elevation map
let height = [4, 2, 0, 3, 2, 5];

/**
 * Calculates the total trapped rain water.
 * This implementation uses the Two Pointer approach.
 * @param {number[]} height - The elevation map.
 * @returns {number} The total volume of trapped water.
 */
let water = (height) => {
    let left = 0;                  // Left pointer starting at beginning
    let right = height.length - 1; // Right pointer starting at end

    let leftMax = 0;               // Maximum height seen from the left
    let rightMax = 0;              // Maximum height seen from the right
    let totalWater = 0;            // Accumulator for total trapped water

    while (left < right) {
        // Process the side with the smaller height value
        if (height[left] < height[right]) {
            // Update leftMax or calculate trapped water
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }

            left++;
        } else {
            // Update rightMax or calculate trapped water
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }

            right--;
        }
    }

    return totalWater;
};

// Log total trapped water
console.log(water(height));
 
