// Implement Upper Bound

// Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.

// What is Upper Bound?
// The upper bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than the given key i.e. x.

// The upper bound is the smallest index, ind, where arr[ind] > x.

// Example 1:
// Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
// Result: 3
// Explanation: Index 3 is the smallest index such that arr[3] > x.

const upperBound = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) return i;
  }
  return nums.length;
};

console.log(upperBound([3, 5, 8, 15, 15, 15, 19], 2));

//-----------------------------------------

const binaryUpperBound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let res = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      res = Math.min(res, mid);
      right = mid - 1;
    }
  }
  return res;
};

console.log(binaryUpperBound([2, 3, 6, 7, 8, 8, 11, 11, 11, 12], 13));
