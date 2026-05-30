// Example 1:
// Input:
//  N = 7, target = 13, array[] = {3, 4, 13, 13, 13, 20, 40}
// Output:
//  2
// Explanation:
//  The target value 13 appears for the first time at index number 2 in the array.

const firstOccurence = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let res = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      res = mid;
      right = mid - 1;
    } else left = mid + 1;
  }
  //Similar to lower bound where we find the minimum index where a[i]>=x and check if the value it found is actually equal to target or not
  if (nums[res] === target) return res;
  return -1;
};

const lastOccurence = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let res = nums.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      res = mid;
      right = mid - 1;
    }
  }
  if (nums[res - 1] === target) return res - 1;
  return -1;
};

const firstAndLastOccurence = (nums, target) => {
  return [firstOccurence(nums, target), lastOccurence(nums, target)];
};

console.log(firstAndLastOccurence([1, 2, 3, 3, 7, 8, 9, 9, 9, 11], 12));
