/**
 * Merges two sorted arrays nums1 and nums2 in-place.
 * nums1 has enough space at the end to hold elements of nums2.
 * @param {number[]} nums1 - The first sorted array, size m + n.
 * @param {number} m - Number of elements initialized in nums1.
 * @param {number[]} nums2 - The second sorted array, size n.
 * @param {number} n - Number of elements in nums2.
 */
const merge = function (nums1, m, nums2, n) {
    let i = m - 1; // Last element index of active elements in nums1
    let j = n - 1; // Last element index in nums2
    let k = m + n - 1; // Last available index of the combined nums1 array

    // Compare elements from the end of both arrays and place the larger element at index k
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }

    // If there are remaining elements in nums2, copy them over
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};