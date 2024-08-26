console.clear();
function merge(nums1, m, nums2, n) {

    let k = m+n-1;
    let j = n-1;
    let i = m-1;

    while(i>=0 && j>=0)
    {
        if(nums1[i]>=nums2[j])
        {
            nums1[k] = nums1[i];
            i--; k--;
        }
        else
        {
            nums1[k] = nums2[j];
            j--; k--;
        }
    }

    if(j>=0)
    {
        while(j>=0)
        {
            nums1[k--] = nums2[j--];
        }
    }
   

    return nums1;
}

// Test Case 1
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);  // Expected Output: [1, 2, 2, 3, 5, 6]

// Test Case 2
nums1 = [1];
nums2 = [];
m = 1;
n = 0;
merge(nums1, m, nums2, n);
console.log(nums1);  // Expected Output: [1]

// Test Case 3
nums1 = [0];
nums2 = [1];
m = 0;
n = 1;
merge(nums1, m, nums2, n);
console.log(nums1);  // Expected Output: [1]

