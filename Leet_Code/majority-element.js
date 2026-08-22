let nums = [2, 2, 1, 1, 1, 2, 2];

let ele = (nums) => {
    let ele = nums[0];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (ele !== nums[i] && count == 0) {
            ele = nums[i];
        }
        if (ele !== nums[i] && count !== 0) {
            --count;
        }
        if (ele == nums[i]) {
            count++
        }
    }
    return ele
}

console.log(ele(nums))
