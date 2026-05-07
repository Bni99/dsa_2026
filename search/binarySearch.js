// logN iterations

const binarySearch = (nums, target, left, right) => {
  if (left <= right && left < nums.length && right < nums.length) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      return binarySearch(nums, target, mid + 1, right);
    } else {
      return binarySearch(nums, target, left, mid - 1);
    }
  } else {
    return -1;
  }
};

console.log(binarySearch([0, 1, 2, 9, 4], 0, 0, 4));
