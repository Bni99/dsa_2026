// Implement Lower Bound

// Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

// What is lower bound?
// The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.

// The lower bound is the smallest index, ind, where arr[ind] >= x. But if any such index is not found, the lower bound algorithm returns n i.e. size of the given array.

// Example 1:
// Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
// Result: 1
// Explanation: Index 1 is the smallest index such that arr[1] >= x.

//O(N)

const lowerBound = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};

console.log(lowerBound([3, 5, 8, 15, 15, 15, 19], 20));

//------------------------------------------------

const lowerBound2 = (nums, target) => {
  if (nums.at(-1) < target) return nums.length;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
};

console.log(lowerBound2([3, 5, 8, 15, 15, 15, 19], 20));
