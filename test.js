console.clear();

function merge(nums1, m, nums2, n) {
    let k = m+n-1;

    let i=m-1; j=n-1;

    while(i>=0 && j>=0)
    {
        if(nums2[j]>=nums1[i])
        {
            nums1[k] = nums2[j];
            k--; j--;
        }
            nums1[k] = nums1[i];
            k--; i--;
    }

    if(j>=0)
        while(j>=0)
            nums1[k--] = nums2[j--];

}


// Test Case 1
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Expected output: [1, 2, 2, 3, 5, 6]

// Test Case 2
nums1 = [1];
nums2 = [];
merge(nums1, 1, nums2, 0);
console.log(nums1); // Expected output: [1]

// Test Case 3
nums1 = [0];
nums2 = [1];
merge(nums1, 0, nums2, 1);
console.log(nums1); // Expected output: [1]

// Test Case 4
nums1 = [2, 0];
nums2 = [1];
merge(nums1, 1, nums2, 1);
console.log(nums1); // Expected output: [1, 2]

// Test Case 5
nums1 = [4, 5, 6, 0, 0, 0];
nums2 = [1, 2, 3];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Expected output: [1, 2, 3, 4, 5, 6]
