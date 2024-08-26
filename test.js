console.clear();

function removeElement(nums, val) {
    let k = 0;
    
    for(let i=0; i<nums.length; i++)
    {
        if(nums[i]!==val)
            nums[k++] = nums[i];
    }
    
    return k;
}


// Test Case 1
let nums = [3, 2, 2, 3];
let val = 3;
let k = removeElement(nums, val);
console.log(nums.slice(0, k));  // Expected Output: [2, 2]

// Test Case 2
nums = [0, 1, 2, 2, 3, 0, 4, 2];
val = 2;
k = removeElement(nums, val);
console.log(nums.slice(0, k));  // Expected Output: [0, 1, 3, 0, 4]

// Test Case 3
nums = [1, 1, 1, 1];
val = 1;
k = removeElement(nums, val);
console.log(nums.slice(0, k));  // Expected Output: []

// Test Case 4
nums = [4, 5, 6];
val = 7;
k = removeElement(nums, val);
console.log(nums.slice(0, k));  // Expected Output: [4, 5, 6]

