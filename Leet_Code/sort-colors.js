var sortColors = function (nums) {
    let j = 0;
    let i = 0;
    let k = nums.length - 1;

    while (i <= k) {
        if (nums[i] === 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;

            j++;
            i++;
        }
        else if (nums[i] === 1) {
            i++;
        }
        else {
            let temp = nums[k];
            nums[k] = nums[i];
            nums[i] = temp;

            k--;
        }
    }

    return nums;

};

console.log(sortColors([1, 2, 0, 2, 1, 0, 1, 2, 0]))