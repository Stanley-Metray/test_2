console.clear();

function removeElement(nums, val) {
   let k = 0;

   for(let i=0; i<nums.length; i++)
   {
        if(nums[i]!==val)
        {
            nums[k++] = nums[i];
        }
   }

   return k;
}


let nums1 = [3, 2, 2, 3];
let val1 = 3;
let k1 = removeElement(nums1, val1);
console.log(nums1.slice(0, k1)); // Expected output: 2, [2, 2]

// Test Case 2
let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let k2 = removeElement(nums2, val2);
console.log(nums2.slice(0, k2)); // Expected output: 5, [0, 1, 3, 0, 4]

// Test Case 3
let nums3 = [2, 2, 2, 2];
let val3 = 2;
let k3 = removeElement(nums3, val3);
console.log(nums3.slice(0, k3)); // Expected output: 0, []

// Test Case 4
let nums4 = [1, 2, 3, 4, 5];
let val4 = 6;
let k4 = removeElement(nums4, val4);
console.log(nums4.slice(0, k4)); // Expected output: 5, [1, 2, 3, 4, 5]

// Test Case 5
let nums5 = [4, 5, 6, 6, 7, 8];
let val5 = 6;
let k5 = removeElement(nums5, val5);
console.log(nums5.slice(0, k5)); // Expected output: 4, [4, 5, 7, 8]
