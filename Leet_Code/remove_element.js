
var removeElement = function(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return (nums.slice(0, k));

};

let nums = [1, 4, 3, 4, 7, 8];
let k = removeElement(nums, 4);
console.log(k);
console.log(nums.slice(0, k));
