// Given an array nums of size n and an integer k, find the length of the longest sub-array that sums to k. If no such sub-array exists, return 0.

// Input:
//  nums = [10, 5, 2, 7, 1, 9], k = 15
// Output:
//  4

// Assuming all numbers are positive

//O(N*N)
// O(N)

const longestSubArray = (arr, k) => {
  let i = 0;
  let j = 0;
  let res = [];
  let sum = 0;
  let maxLength = -Infinity;
  while (i < arr.length) {
    j = i;
    res = [];
    sum = 0;
    while (j < arr.length) {
      res.push(arr[j]);
      sum = sum + arr[j];
      if (sum === k && res.length > maxLength) {
        maxLength = res.length;
      }
      j++;
    }
    i++;
  }
  return maxLength;
};

console.log(longestSubArray([10, 5, 2, 7, 1, 9], 15));

//-----------------------------------------

//We can even do it without that extra array

const bruteLongestSubArray = (arr, k) => {
  let i = 0;
  let j = 0;
  let sum = 0;
  let maxLength = 0;
  while (i < arr.length) {
    j = i;
    sum = 0;
    while (j < arr.length) {
      sum = sum + arr[j];
      if (sum === k) {
        maxLength = Math.max(maxLength, j - i + 1);
        break;
      }
      j++;
    }
    i++;
  }
  return maxLength;
};

console.log(bruteLongestSubArray([10, 5, 2, 7, 1, 9], 15));

// ------------------------------------------

//TC : O(N)
// SC : O(N)
// Its a optimal solution if the array has positive , negative or zeroes
const betterLongestSubarray = (arr, k) => {
  let i = 0;
  let sum = 0;
  let maxLength = 0;
  const obj = {};
  while (i < arr.length) {
    sum = sum + arr[i];
    if (sum === k) {
      maxLength = Math.max(maxLength, i + 1);
    }
    let rem = sum - k;
    if (obj[rem] !== undefined) {
      maxLength = Math.max(maxLength, i - obj[rem]);
    }

    if (obj[sum] === undefined) obj[sum] = i;
    i++;
  }
  return maxLength;
};

console.log(betterLongestSubarray([10, 5, 2, 7, 1, 9], 15));

//------------------------------------------------------

//TC : O(2N)
//SC : O(1)

const optimalLongestSubarray = (arr, k) => {
  let i = 0;
  let j = 0;
  let sum = 0;
  let maxLength = 0;
  while (j < arr.length) {
    sum = sum + arr[j];
    while (sum > k && i <= j) {
      sum = sum - arr[i];
      i++;
    }
    if (sum === k) {
      maxLength = Math.max(maxLength, j - i + 1);
    }
    j++;
  }
};

console.log(optimalLongestSubarray([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 6));
