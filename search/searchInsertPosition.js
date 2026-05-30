//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// O(n)
const searchInsertPosition = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    if (nums[i] > target) return i;
  }
  return nums.length;
};

console.log(searchInsertPosition([1, 3, 5, 6], 2));

//----------------------------------------

const binarySearchInsertPosition = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let res = nums.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else {
      res = Math.min(res, mid);
      right = mid - 1;
    }
  }
  return res;
};

console.log(binarySearchInsertPosition([1, 2, 4, 7], 6));
