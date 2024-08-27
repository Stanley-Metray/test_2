console.clear();

function removeDuplicates(nums) {
    let k=1;

    for(let i=1; i<nums.length; i++)
    {
        if(nums[i]!==nums[i-1])
            nums[k++] = nums[i];
    }

    return k;
}


// Test Case 1
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(k1, nums1.slice(0, k1)); // Expected output: 2, [1, 2]

// Test Case 2
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log(k2, nums2.slice(0, k2)); // Expected output: 5, [0, 1, 2, 3, 4]

// Test Case 3
let nums3 = [1, 1, 1, 1, 1];
let k3 = removeDuplicates(nums3);
console.log(k3, nums3.slice(0, k3)); // Expected output: 1, [1]

// Test Case 4
let nums4 = [1, 2, 3, 4, 5];
let k4 = removeDuplicates(nums4);
console.log(k4, nums4.slice(0, k4)); // Expected output: 5, [1, 2, 3, 4, 5]

// Test Case 5
let nums5 = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6];
let k5 = removeDuplicates(nums5);
console.log(k5, nums5.slice(0, k5)); // Expected output: 6, [1, 2, 3, 4, 5, 6]

